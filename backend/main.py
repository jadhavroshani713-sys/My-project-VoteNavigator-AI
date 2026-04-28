import os
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="VoteSmart API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Gemini
GENAI_API_KEY = os.getenv("GENAI_API_KEY")
if GENAI_API_KEY:
    print(f"API Key found: {GENAI_API_KEY[:5]}...")
    genai.configure(api_key=GENAI_API_KEY)
    model = genai.GenerativeModel('gemini-1.5-flash')
else:
    print("API Key NOT found in environment.")
    model = None

class ChatRequest(BaseModel):
    message: str
    history: list = []

SYSTEM_PROMPT = """
You are VoteSmart, a highly intelligent and empathetic election assistant. 
Your primary goal is to help users understand the election process in India based on Official Election Commission of India (ECI) guidelines.

Key Responsibilities:
1. Explain voter eligibility (18+ years old, citizen of India, resident of the constituency).
2. Guide users through registration (Form 6 for new voters, NVSP portal/Voter Helpline App).
3. Describe voting procedures (Finding polling booths, EPIC card requirements, EVM/VVPAT process).
4. Provide information on documents required (Aadhaar, PAN, Passport, etc.).
5. Maintain a non-partisan, neutral, and encouraging tone.

If asked about other countries, provide general guidance but emphasize that your expertise is focused on India.
Always encourage users to verify details on the official ECI website (voters.eci.gov.in).
"""

@app.get("/")
async def root():
    return {"message": "VoteSmart API is running"}

@app.post("/api/chat")
async def chat(request: ChatRequest):
    if not model:
        return {"response": "AI Assistant is currently in demo mode (API Key not configured). For India, remember to check voters.eci.gov.in!"}
    
    try:
        chat_session = model.start_chat(history=request.history)
        response = chat_session.send_message(f"{SYSTEM_PROMPT}\n\nUser: {request.message}")
        return {"response": response.text}
    except Exception as e:
        error_msg = str(e)
        print(f"Gemini API Error: {error_msg}")
        
        if "SERVICE_DISABLED" in error_msg:
            return {"response": "I'm currently in limited mode as the Gemini API is not enabled for this project. Please verify voter details at voters.eci.gov.in!"}
        
        return {"response": "I'm having trouble connecting to my AI core right now. Please try again later or visit the official ECI website for assistance."}

# Serve static files from the frontend/dist directory
frontend_path = os.path.join(os.path.dirname(__file__), "..", "frontend", "dist")

# Ensure the directory exists to avoid errors during startup (it will be created by the build process)
if not os.path.exists(frontend_path):
    os.makedirs(frontend_path, exist_ok=True)

app.mount("/assets", StaticFiles(directory=os.path.join(frontend_path, "assets")), name="assets")

@app.get("/")
async def serve_index():
    return FileResponse(os.path.join(frontend_path, "index.html"))

@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    # Check if the requested path exists as a file (like favicon.ico or robots.txt)
    file_path = os.path.join(frontend_path, full_path)
    if os.path.isfile(file_path):
        return FileResponse(file_path)
    # Otherwise return index.html for React Router to handle
    return FileResponse(os.path.join(frontend_path, "index.html"))

@app.get("/api/election-steps")
async def get_steps():
    return [
        {
            "id": "eligibility",
            "title": "Check Eligibility",
            "description": "Ensure you are 18+ and a citizen of India.",
            "details": "You must be 18 years old on or before the qualifying date (usually Jan 1st of the year of revision)."
        },
        {
            "id": "registration",
            "title": "Register to Vote",
            "description": "Fill Form 6 on the NVSP portal.",
            "details": "Keep your passport size photo, age proof, and address proof ready."
        },
        {
            "id": "verify",
            "title": "Verify Enrollment",
            "description": "Check your name in the Electoral Roll.",
            "details": "Visit electoralsearch.in to confirm your details are correct."
        },
        {
            "id": "vote",
            "title": "Go Vote!",
            "description": "Find your booth and cast your vote.",
            "details": "Bring your EPIC card or any of the 12 alternative ID documents approved by ECI."
        }
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
