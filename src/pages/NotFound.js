// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import PetalAnimation from '../components/PetalAnimation';
import '../styles/pixel-styles.css';

const NotFound = () => {
  return (
    <div className="pixel-grid" style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <PetalAnimation />
      
      <div className="pixel-block" style={{ 
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.9)',
        zIndex: 1001,
        position: 'relative'
      }}>
        <h1 className="pixel-text" style={{ 
        fontSize: '96px', 
        marginBottom: '20px',
        color: 'var(--dark-pink)',
        textShadow: '4px 4px 0 #ff4757' 
        }}>
        404
        </h1>
        
        <p className="pixel-text" style={{ fontSize: '24px', marginBottom: '30px' }}>
          Ой! Страница потерялась в лепестках...
        </p>
        
        <p style={{ marginBottom: '30px' }}>
          Кажется, вы попали на страницу, которой не существует. 
          Но зато можете полюбоваться падающими цветами! 🌸
        </p>
        
        <Link to="/" className="pixel-button" style={{ fontSize: '18px' }}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;