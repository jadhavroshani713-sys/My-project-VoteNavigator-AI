import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, User, Bot, Info } from 'lucide-react';

const ChatBot = ({ isOpen, onClose, messages, onSendMessage, loading, chatInput, setChatInput }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="chat-overlay"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="chat-drawer"
          >
            {/* Header */}
            <div className="chat-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'var(--primary)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px var(--primary-glow)'
                }}>
                  <Bot size={22} color="white" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>VoteSmart AI</h3>
                  <div style={{ fontSize: '11px', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '600' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--secondary)', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                    ECI Expert • Online
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose} 
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: 'none', 
                  color: 'white', 
                  cursor: 'pointer',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="chat-messages">
              <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255, 153, 51, 0.05)', borderRadius: '12px', marginBottom: '1rem', border: '1px solid rgba(255, 153, 51, 0.1)' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--primary)', margin: 0, fontWeight: '500' }}>
                  <Info size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                  Ask me about eligibility, registration, or polling.
                </p>
              </div>

              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  key={idx} 
                  className={`message ${msg.role === 'user' ? 'message-user' : 'message-assistant'}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', opacity: 0.6, fontSize: '0.7rem' }}>
                    {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                    {msg.role === 'user' ? 'You' : 'VoteSmart AI'}
                  </div>
                  <p style={{ margin: 0 }}>{msg.text}</p>
                </motion.div>
              ))}
              
              {loading && (
                <div className="message message-assistant">
                  <div className="loading-dots">
                    <div className="dot" />
                    <div className="dot" style={{ animationDelay: '0.2s' }} />
                    <div className="dot" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="chat-input-area">
              <div className="input-wrapper">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
                  placeholder="Type your question..."
                />
                <button 
                  onClick={onSendMessage}
                  disabled={loading || !chatInput.trim()}
                  style={{ 
                    position: 'absolute', 
                    right: '6px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    padding: '8px', 
                    background: 'var(--primary)', 
                    border: 'none', 
                    borderRadius: '10px', 
                    color: 'white', 
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'var(--transition)',
                    opacity: loading ? 0.6 : 1
                  }}
                >
                  <Send size={18} />
                </button>
              </div>
              <p style={{ fontSize: '10px', color: 'var(--text-dim)', marginTop: '1.2rem', textAlign: 'center', lineHeight: '1.4' }}>
                AI may provide general info. For official data, always visit <a href="https://voters.eci.gov.in" target="_blank" style={{ color: 'var(--primary)' }}>ECI Portal</a>.
              </p>
            </div>
          </motion.div>
          
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes pulse {
              0% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.5; transform: scale(1.2); }
              100% { opacity: 1; transform: scale(1); }
            }
          `}} />
        </>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;
