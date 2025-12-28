// src/components/Footer.js
import React from 'react';
import '../styles/pixel-styles.css';

const Footer = () => {
  return (
    <footer className="pixel-border" style={{
  background: 'var(--light-pink)',
  padding: '20px',
  textAlign: 'center',
  marginTop: 'auto'
}}>
  <p className="pixel-text" style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    gap: '10px',
    margin: 0 
  }}>
    © 2025 Sedosha's Portfolio | Сделано с 
    <span style={{ 
      fontSize: '20px',
      display: 'inline-block',
      transform: 'translateY(-3px)'
    }}>🌸</span>
  </p>
</footer>
  );
};

export default Footer;