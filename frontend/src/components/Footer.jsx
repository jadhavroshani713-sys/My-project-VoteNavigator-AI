import React from 'react';
import { Vote, Send, Globe, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'rgba(15, 23, 42, 0.5)', borderTop: '1px solid var(--glass-border)', padding: '5rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div style={{ width: '36px', height: '36px', background: 'var(--primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Vote color="white" size={20} />
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Vote<span style={{ color: 'var(--primary)' }}>Smart</span></h2>
            </div>
            <p style={{ color: 'var(--text-dim)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Simplifying the democratic process for 1.4 billion citizens. Empowering voices through technology and transparency.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[Send, Globe, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: 'var(--glass)', 
                  border: '1px solid var(--glass-border)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--glass)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Home', 'Eligibility', 'Registration', 'About Us', 'Help Center'].map((link) => (
                <li key={link}>
                  <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'var(--transition)', fontSize: '0.95rem' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-dim)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem' }}>Support</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dim)', fontSize: '0.95rem' }}>
                <Mail size={16} color="var(--primary)" />
                support@votesmart.in
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dim)', fontSize: '0.95rem' }}>
                <Phone size={16} color="var(--primary)" />
                +91 1800-111-400
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dim)', fontSize: '0.95rem' }}>
                <MapPin size={16} color="var(--primary)" />
                New Delhi, India
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem' }}>Stay Informed</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Subscribe for election dates and registration alerts.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                placeholder="Enter email"
                style={{ 
                  flex: 1, 
                  background: 'var(--glass)', 
                  border: '1px solid var(--glass-border)', 
                  borderRadius: '10px', 
                  padding: '10px 15px', 
                  color: 'white',
                  outline: 'none',
                  fontSize: '0.9rem'
                }} 
              />
              <button style={{ 
                background: 'var(--primary)', 
                color: 'white', 
                border: 'none', 
                borderRadius: '10px', 
                padding: '10px 15px', 
                fontWeight: '600',
                cursor: 'pointer'
              }}>Join</button>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
            © 2026 VoteSmart. All rights reserved. Not affiliated with the ECI.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'var(--text-dim)', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-dim)', fontSize: '0.85rem', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
