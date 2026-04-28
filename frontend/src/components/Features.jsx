import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  MessageSquareText, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Search 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "Step-by-Step Guidance",
      description: "Simple, easy-to-follow process from checking eligibility to finding your polling booth.",
      color: "#FF9933"
    },
    {
      icon: <MessageSquareText size={28} />,
      title: "AI Assistant Support",
      description: "Our intelligent chatbot is available 24/7 to answer all your election-related queries.",
      color: "#3b82f6"
    },
    {
      icon: <MapPin size={28} />,
      title: "India-specific Info",
      description: "Localized information tailored for every state and union territory across India.",
      color: "#128807"
    },
    {
      icon: <Clock size={28} />,
      title: "Time-saving Process",
      description: "Avoid long queues and confusion with pre-filled forms and digital tracking.",
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="features">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '3rem', fontWeight: '800', marginTop: '1rem', letterSpacing: '-1px' }}
          >
            Smart Features for <span style={{ color: 'var(--primary)' }}>Smart Voters</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-dim)', maxWidth: '700px', margin: '1.5rem auto 0 auto', fontSize: '1.1rem' }}
          >
            We've built tools that make democratic participation as easy as ordering food online. 
            Experience the future of civic engagement.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="premium-card"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '3rem 2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
              }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                background: `linear-gradient(135deg, ${feature.color}22, ${feature.color}44)`,
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: feature.color,
                boxShadow: `0 10px 30px -10px ${feature.color}55`
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {feature.description}
              </p>
              
              {/* Subtle hover reveal element */}
              <div style={{
                marginTop: '1rem',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: feature.color,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                opacity: 0.8
              }}>
                Learn more <ShieldCheck size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight Section */}
        <div style={{ 
          marginTop: '6rem', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem', 
          alignItems: 'center' 
        }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              width: '100%',
              height: '400px',
              background: 'url(https://images.unsplash.com/photo-1540910419892-f0c07d0af306?auto=format&fit=crop&q=80&w=600) center/cover',
              borderRadius: '32px',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              background: 'var(--bg-card)',
              padding: '2rem',
              borderRadius: '24px',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock color="white" />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>Save 40% Time</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>On Voter Registration</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              Built for <span style={{ color: 'var(--primary)' }}>Every Citizen</span>
            </h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              Whether you're a first-time voter or a seasoned citizen, VoteSmart provides all the tools you need in one place. 
              Our platform is accessible, multilingual, and intuitive.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                "Instant eligibility check via AI",
                "Digital document checklist for polling day",
                "Live tracking of application status",
                "Accessibility features for senior citizens"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ background: 'var(--primary-glow)', color: 'var(--primary)', padding: '4px', borderRadius: '50%' }}>
                    <Search size={16} />
                  </div>
                  <span style={{ fontWeight: '500' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
