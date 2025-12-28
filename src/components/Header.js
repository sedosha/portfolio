// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pixel-styles.css';

const Header = () => {
  return (
<header className="pixel-border" style={{
  background: 'var(--light-pink)',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center' 
}}>
  <div className="logo">
    <Link to="/" style={{ 
      textDecoration: 'none', 
      color: 'var(--dark-pink)',
      fontSize: '20px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center', 
      gap: '10px'
    }}>
      <span style={{ 
        fontSize: '28px', 
        lineHeight: '1',
        transform: 'translateY(1px)' 
      }}>🌸</span>
      <span className="pixel-text" style={{ 
        lineHeight: '1.2'
      }}>
        Sedosha's Portfolio
      </span>
    </Link>
  </div>
  
  <nav>
    <ul style={{
      display: 'flex',
      listStyle: 'none',
      gap: '20px',
      alignItems: 'center', 
      margin: 0,
      padding: 0,
      height: '100%'
    }}>
          <li><Link to="/" className="pixel-button">Главная</Link></li>
          <li><Link to="/education" className="pixel-button">Образование</Link></li>
        <li><Link to="/experience" className="pixel-button">Опыт</Link></li>
          <li><Link to="/projects" className="pixel-button">Проекты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;