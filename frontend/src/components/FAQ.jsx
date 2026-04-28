import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageSquare, PhoneCall } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      style={{ 
        borderBottom: '1px solid var(--glass-border)', 
        padding: '1.5rem 0',
        cursor: 'pointer' 
      }}
      onClick={onClick}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', transition: 'var(--transition)', color: isOpen ? 'var(--primary)' : 'white' }}>
          {question}
        </h4>
        <div style={{ color: isOpen ? 'var(--primary)' : 'var(--text-dim)' }}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ color: 'var(--text-dim)', paddingTop: '1rem', lineHeight: '1.7', fontSize: '0.95rem' }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = ({ onOpenChat }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who is eligible to vote in India?",
      answer: "Every Indian citizen who has reached the age of 18 years on the qualifying date (usually 1st January of the year) and is not otherwise disqualified is eligible to be registered as a voter."
    },
    {
      question: "How do I register to vote for the first time?",
      answer: "You can register online through the Voter Service Portal (voters.eci.gov.in) by filling Form 6. You'll need proof of age, residence, and a recent photograph."
    },
    {
      question: "Can I vote if I am living away from my permanent residence?",
      answer: "No, a person can be enrolled in only one place. You must be 'ordinarily resident' in the constituency where you want to be enrolled. If you've moved, you should transfer your registration using Form 8."
    },
    {
      question: "What documents do I need on voting day?",
      answer: "While the Voter ID (EPIC card) is preferred, ECI allows 12 alternative photo identity documents including Aadhaar Card, PAN Card, Passport, and Driving License."
    },
    {
      question: "How can I check if my name is in the voter list?",
      answer: "You can check your name on the Electoral Search portal (electoralsearch.eci.gov.in) using your EPIC number or personal details."
    }
  ];

  return (
    <section id="help">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
          
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}
            >
              Help Center
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '1rem', marginBottom: '2rem', letterSpacing: '-1px' }}
            >
              Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span>
            </motion.h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.8' }}>
              Can't find what you're looking for? Our AI assistant and support team are here to help you 24/7.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <button 
                onClick={onOpenChat}
                className="btn-primary"
                style={{ width: 'fit-content' }}
              >
                <MessageSquare size={20} />
                Ask AI Assistant
              </button>
              
              <button 
                style={{
                  width: 'fit-content',
                  background: 'transparent',
                  border: '1px solid var(--glass-border)',
                  color: 'white',
                  padding: '0.9rem 1.8rem',
                  borderRadius: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => e.target.style.borderColor = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              >
                <PhoneCall size={20} />
                Contact Support
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel"
            style={{ padding: '2rem 3rem', borderRadius: '32px' }}
          >
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
