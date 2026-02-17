// src/components/PetalAnimation.js
import React, { useEffect } from 'react';
import '../styles/PetalAnimation.css';

const PetalAnimation = () => {
  useEffect(() => {
    const createFlower = () => {
      const flower = document.createElement('div');
      
      
      flower.className = 'flower type1';
      
      
      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 8 + 6; 
      const delay = Math.random() * 3;
      
      
      const rotation = Math.random(); 
      const sway = Math.random() * 2 - 5; 
      const speed = Math.random() * 0.5 + 0.5; 
      
     
      flower.style.left = `${startX}px`;
      flower.style.setProperty('--rotation', rotation);
      flower.style.setProperty('--sway', sway);
      flower.style.animationDuration = `${duration}s`;
      flower.style.animationDelay = `${delay}s`;
      flower.style.animationTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
      
      
      const size = Math.random() * 30 + 20;
      flower.style.fontSize = `${size}px`;
      
     
      if (Math.random() < 0.5) {
        flower.classList.add('swaying');
      }
      
      document.getElementById('flowers-container').appendChild(flower);
      
     
      setTimeout(() => {
        if (flower.parentNode) {
          flower.remove();
        }
      }, (duration + delay) * 1000);
    };
    
    
    const interval = setInterval(createFlower, 500);
    
   
    return () => {
      clearInterval(interval);
      const container = document.getElementById('flowers-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);
  
  return <div id="flowers-container" className="flowers-container"></div>;
};

export default PetalAnimation;
