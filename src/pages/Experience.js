// src/pages/Experience.js
import React, { useState, useEffect } from 'react';
import { fetchExperienceData } from '../data/portfolioData';
import '../styles/pixel-styles.css';

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperienceData().then(data => {
      setExperience(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="pixel-grid" style={{ textAlign: 'center', padding: '50px' }}>
        <div className="pixel-text">Загружаем опыт работы...</div>
      </div>
    );
  }

       
      <span className="pixel-text" style={{ 
        lineHeight: '1.2'
      }}>
        Sedosha's Portfolio
      </span>

  return (
    <div className="pixel-grid" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>

      <h1 className="pixel-text" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '36px' }}>
        <span style={{ 
      fontSize: '36px',
      display: 'inline-block',
      transform: 'translateY(-10px)'
    }}>💼</span> Опыт работы и навыки
      </h1>

      {experience.map((job, index) => (
        <div key={index} className="pixel-block" style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div>
              <h2 className="pixel-text" style={{ color: 'var(--dark-pink)', marginBottom: '5px' }}>
                {job.position}
              </h2>
              <h3 style={{ marginBottom: '10px', color: '#666' }}>
                {job.company} • {job.period}
              </h3>
            </div>
            <span style={{
              background: 'var(--light-pink)',
              padding: '5px 15px',
              borderRadius: '20px',
              fontFamily: 'monospace'
            }}>
              {job.type}
            </span>
          </div>
          
          <ul style={{ paddingLeft: '20px', marginTop: '15px' }}>
            {job.responsibilities.map((resp, idx) => (
              <li key={idx} style={{ marginBottom: '8px', lineHeight: '1.5' }}>
                {resp}
              </li>
            ))}
          </ul>
          
          <div style={{ marginTop: '20px' }}>
            <strong style={{ display: 'block', marginBottom: '10px' }}>Используемые технологии:</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {job.technologies.map((tech, idx) => (
                <span key={idx} className="pixel-button" style={{ padding: '5px 15px', fontSize: '14px' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      <div className="pixel-block">
        <h2 className="pixel-text" style={{ textAlign: 'center', marginBottom: '30px' }}>
          🛠️ Технические навыки
        </h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          <div>
            <h3 style={{ color: 'var(--dark-pink)' }}>Анализ и моделирование</h3>
            <ul>
              <li>IDEF0, ARIS eEPC, BPMN 2.0</li>
              <li>Бизнес-анализ процессов</li>
              <li>ER-моделирование баз данных</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--dark-pink)' }}>Разработка</h3>
            <ul>
              <li>SQL (MS SQL Server, Oracle)</li>
              <li>MongoDB, DBeaver</li>
              <li>Figma, UX/UI дизайн</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--dark-pink)' }}>Безопасность</h3>
            <ul>
              <li>ИТ-безопасность инфраструктуры</li>
              <li>Защита персональных данных</li>
              <li>Контроль доступа</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;