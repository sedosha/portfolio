// src/components/PetalAnimation.js
import React, { useEffect } from 'react';
import '../styles/PetalAnimation.css';

const PetalAnimation = () => {
  useEffect(() => {
    const createFlower = () => {
      const flower = document.createElement('div');
      
      // Всегда используем тип 1 (эмодзи цветок)
      flower.className = 'flower type1';
      
      // Случайные свойства для анимации
      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 8 + 6; // 6-14 секунд
      const delay = Math.random() * 3;
      
      // Генерируем CSS переменные для анимации
      const rotation = Math.random(); // 0-1 оборот
      const sway = Math.random() * 2 - 5; // -1 до 1 для движения в стороны
      const speed = Math.random() * 0.5 + 0.5; // 0.8-1.3 скорость
      
      // Позиция и анимация
      flower.style.left = `${startX}px`;
      flower.style.setProperty('--rotation', rotation);
      flower.style.setProperty('--sway', sway);
      flower.style.animationDuration = `${duration}s`;
      flower.style.animationDelay = `${delay}s`;
      flower.style.animationTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
      
      // Размер (случайный от 30px до 50px)
      const size = Math.random() * 30 + 20;
      flower.style.fontSize = `${size}px`;
      
      // Добавляем покачивание для 30% цветов
      if (Math.random() < 0.5) {
        flower.classList.add('swaying');
      }
      
      document.getElementById('flowers-container').appendChild(flower);
      
      // Удаление после анимации
      setTimeout(() => {
        if (flower.parentNode) {
          flower.remove();
        }
      }, (duration + delay) * 1000);
    };
    
    // Создаем цветы каждые 800мс
    const interval = setInterval(createFlower, 500);
    
    // Очистка
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