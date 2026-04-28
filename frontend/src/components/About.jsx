import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Heart } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Target className="text-primary" size={32} style={{ color: 'var(--primary)' }} />,
      title: "Our Mission",
      description: "To simplify the complex landscape of Indian elections through technology, making information accessible to every citizen."
    },
    {
      icon: <Eye className="text-secondary" size={32} style={{ color: 'var(--secondary)' }} />,
      title: "Our Vision",
      description: "A future where every eligible Indian voter is registered, informed, and empowered to participate in the democratic process."
    },
    {
      icon: <Heart className="text-red-500" size={32} style={{ color: '#ef4444' }} />,
      title: "Our Core Values",
      description: "Transparency, accuracy, and accessibility. We believe that a well-informed voter is the foundation of a strong democracy."
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}
          >
            About VoteSmart
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '3rem', fontWeight: '800', marginTop: '1rem', letterSpacing: '-1px' }}
          >
            Empowering the <span style={{ color: 'var(--primary)' }}>Next Generation</span> of Voters
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-dim)', maxWidth: '800px', margin: '1.5rem auto 0 auto', fontSize: '1.1rem' }}
          >
            VoteSmart is an AI-powered platform designed to guide Indian citizens through the voting journey. 
            We bridge the gap between complex bureaucratic processes and the common man with intuitive, step-by-step guidance.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                padding: '2.5rem'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--glass-border)'
              }}>
                {card.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{card.title}</h3>
                <p style={{ color: 'var(--text-dim)', lineHeight: '1.7' }}>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '4rem',
            padding: '3rem',
            borderRadius: '32px',
            background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.05) 0%, rgba(18, 136, 7, 0.05) 100%)',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>Our Community Reach</h3>
            <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
              We've helped thousands of first-time voters navigate their way to the polling booths across 28 states and 8 union territories.
            </p>
            <div style={{ display: 'flex', gap: '3rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)' }}>50k+</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Voters Guided</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--secondary)' }}>24/7</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>AI Support</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#3b82f6' }}>100%</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Reliable Info</div>
              </div>
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <Users size={200} style={{ opacity: 0.1, color: 'white' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
