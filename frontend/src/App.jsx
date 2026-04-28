import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparkles, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import FAQ from './components/FAQ';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

// Existing Stepper Logic moved to a local sub-component for better organization
import { 
  UserCheck, 
  FileText, 
  Search, 
  Vote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const API_BASE = '';

const StepperSection = ({ steps, currentStep, setCurrentStep }) => {
  const stepIcons = {
    eligibility: <UserCheck className="w-8 h-8" />,
    registration: <FileText className="w-8 h-8" />,
    verify: <Search className="w-8 h-8" />,
    vote: <Vote className="w-8 h-8" />
  };

  if (!steps || steps.length === 0) return null;

  return (
    <section id="registration" style={{ padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>The Process</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '1rem' }}>Step-by-Step Registration Guide</h2>
        </div>

        <div className="step-indicator" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          {steps.map((_, idx) => (
            <div 
              key={idx} 
              className={`step-dot ${idx === currentStep ? 'active' : ''}`}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: idx === currentStep ? 'var(--primary)' : 'var(--glass-border)',
                boxShadow: idx === currentStep ? '0 0 15px var(--primary)' : 'none',
                transition: 'var(--transition)'
              }}
            />
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="premium-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(255, 153, 51, 0.1)', borderRadius: '16px', color: 'var(--primary)' }}>
                  {stepIcons[steps[currentStep].id] || <Vote />}
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)', fontWeight: '700' }}>Step {currentStep + 1}</span>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }}>{steps[currentStep].title}</h3>
                </div>
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '2rem', lineHeight: '1.7' }}>
                {steps[currentStep].description}
              </p>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)', marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                  {steps[currentStep].details}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  style={{ 
                    padding: '0.9rem', 
                    borderRadius: '14px', 
                    border: '1px solid var(--glass-border)', 
                    background: 'transparent', 
                    color: 'white', 
                    cursor: 'pointer', 
                    opacity: currentStep === 0 ? 0.3 : 1,
                    transition: 'var(--transition)'
                  }}
                >
                  <ChevronLeft />
                </button>
                <button 
                  disabled={currentStep === steps.length - 1}
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  Next Step
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
             <div style={{ position: 'absolute', inset: -20, background: 'var(--primary-glow)', filter: 'blur(100px)', borderRadius: '50%', opacity: 0.5 }} />
             <img 
              src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=800" 
              alt="Voting in India" 
              style={{ width: '100%', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', position: 'relative', zIndex: 1, border: '1px solid var(--glass-border)' }}
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Namaste! I am VoteSmart. How can I help you today?' }
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSteps();
  }, []);

  const fetchSteps = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/election-steps`);
      setSteps(res.data);
    } catch (err) {
      console.error("Failed to fetch steps", err);
      // Fallback data if backend is not running
      setSteps([
        { id: 'eligibility', title: 'Check Eligibility', description: 'Ensure you meet the basic criteria to vote in Indian elections.', details: 'You must be an Indian citizen, 18+ years old, and ordinarily resident in a constituency.' },
        { id: 'registration', title: 'Register Online', description: 'Complete your registration via the NVSP/ECI portal.', details: 'Fill Form 6 on voters.eci.gov.in and upload required documents.' },
        { id: 'verify', title: 'Verify Status', description: 'Track your application and verify your name in the electoral roll.', details: 'Check status using your application ID or EPIC number on the portal.' },
        { id: 'vote', title: 'Cast Your Vote', description: 'Locate your booth and exercise your democratic right.', details: 'Bring your Voter ID or any of the 12 approved photo ID documents to your polling booth.' }
      ]);
    }
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMsg = { role: 'user', text: chatInput };
    setChatMessages(prev => [...prev, userMsg]);
    const messageToSend = chatInput;
    setChatInput('');
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE}/api/chat`, { 
        message: messageToSend,
        history: chatMessages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.text }]
        }))
      });
      setChatMessages(prev => [...prev, { role: 'assistant', text: res.data.response }]);
    } catch (err) {
      setChatMessages(prev => [...prev, { role: 'assistant', text: 'I encountered an issue. Please check your connection or the official ECI website.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="bg-gradient-mesh" />
      
      <Navbar />
      
      <main>
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        
        <About />
        
        <section id="eligibility" style={{ padding: '0' }}>
          {/* Eligibility content can be part of About or Features, but we have a dedicated section for the Stepper */}
        </section>

        <StepperSection 
          steps={steps} 
          currentStep={currentStep} 
          setCurrentStep={setCurrentStep} 
        />

        <Features />
        
        <FAQ onOpenChat={() => setIsChatOpen(true)} />
      </main>

      <Footer />

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(true)}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px var(--primary-glow)',
            zIndex: 90
          }}
        >
          <MessageSquare size={28} />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '2px solid var(--primary)',
              zIndex: -1
            }}
          />
        </motion.button>
      )}

      <ChatBot 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        messages={chatMessages}
        onSendMessage={handleSendMessage}
        loading={loading}
        chatInput={chatInput}
        setChatInput={setChatInput}
      />
    </div>
  );
}

export default App;
