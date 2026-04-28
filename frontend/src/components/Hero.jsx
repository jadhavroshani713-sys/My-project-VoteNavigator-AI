import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap, MousePointer2 } from 'lucide-react';

const Hero = ({ onOpenChat }) => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 153, 51, 0.1)',
              padding: '6px 16px',
              borderRadius: '100px',
              color: 'var(--primary)',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255, 153, 51, 0.2)'
            }}
          >
            <Sparkles size={16} />
            Smart Voting Assistant for Digital India
          </motion.div>

          <motion.h1
            className="gradient-text"
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
              lineHeight: '1.1', 
              marginBottom: '2rem',
              letterSpacing: '-2px'
            }}
          >
            Your Path to <br />
            <span style={{ color: 'var(--primary)', WebkitTextFillColor: 'initial' }}>The Polls</span>
          </motion.h1>

          <motion.p
            style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-dim)', 
              maxWidth: '600px', 
              marginBottom: '3rem',
              lineHeight: '1.8'
            }}
          >
            Empowering every citizen with a simplified, AI-driven guide to Indian elections. 
            From eligibility to the ballot box, we've got you covered.
          </motion.p>

          <motion.div 
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}
          >
            <button 
              onClick={onOpenChat}
              className="btn-primary"
              style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
            >
              <Sparkles size={22} />
              Ask AI Assistant
            </button>
            
            <button 
              onClick={() => document.getElementById('eligibility').scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
            >
              Get Started
              <ArrowRight size={20} />
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ 
              display: 'flex', 
              gap: '2.5rem', 
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--glass-border)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
              <ShieldCheck size={18} color="var(--secondary)" />
              Official Data
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
              <Zap size={18} color="var(--primary)" />
              Real-time Support
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
              <MousePointer2 size={18} color="#3b82f6" />
              Easy Navigation
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Visual Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ position: 'relative' }}
        >
          {/* Main Illustration Placeholder/Frame */}
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1',
            background: 'linear-gradient(45deg, rgba(255,153,51,0.1), rgba(18,136,7,0.1))',
            borderRadius: '40px',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
             <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: '80%',
                height: '80%',
                background: 'url(https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=800) center/cover',
                borderRadius: '30px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
              }}
             />
             
             {/* Floating UI Elements */}
             <motion.div
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                background: 'var(--bg-card)',
                border: '1px solid var(--glass-border)',
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
             >
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={18} color="white" />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Status</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>Verified Voter</div>
                </div>
             </motion.div>

             <motion.div
              animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              style={{
                position: 'absolute',
                bottom: '15%',
                left: '-10%',
                background: 'var(--bg-card)',
                border: '1px solid var(--glass-border)',
                padding: '1.2rem',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                maxWidth: '200px'
              }}
             >
                <div style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '8px', color: 'var(--primary)' }}>AI Insight</div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: 0 }}>
                  "Your local polling station is 1.2km away."
                </p>
             </motion.div>
          </div>

          {/* Decorative Orbs */}
          <div style={{ 
            position: 'absolute', 
            top: '-20%', 
            right: '-20%', 
            width: '300px', 
            height: '300px', 
            background: 'var(--primary-glow)', 
            filter: 'blur(100px)', 
            borderRadius: '50%',
            zIndex: -1
          }} />
          <div style={{ 
            position: 'absolute', 
            bottom: '-20%', 
            left: '-20%', 
            width: '300px', 
            height: '300px', 
            background: 'var(--secondary-glow)', 
            filter: 'blur(100px)', 
            borderRadius: '50%',
            zIndex: -1
          }} />
        </motion.div>

      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          #home .container { grid-template-columns: 1fr; text-align: center; }
          #home .container > div { display: flex; flex-direction: column; align-items: center; }
          #home p { margin-left: auto; margin-right: auto; }
          #home div[style*="trust-badges"] { justify-content: center; }
          #home div[style*="Right Content"] { display: none; }
        }
      `}} />
    </section>
  );
};

export default Hero;
