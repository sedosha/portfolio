// src/pages/Projects.js
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects } from '../data/portfolioData';
import '../styles/pixel-styles.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then(data => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="pixel-grid" style={{ textAlign: 'center', padding: '50px' }}>
        <div className="pixel-text" style={{ fontSize: '24px' }}>
          Загружаем проекты...
        </div>
      </div>
    );
  }

  return (
    <div className="pixel-grid" style={{ minHeight: '70vh' }}>
      <h1 className="pixel-text" style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        fontSize: '36px',
        color: 'var(--dark-pink)'
      }}>
        <span style={{ 
      fontSize: '36px',
      display: 'inline-block',
      transform: 'translateY(-10px)'
    }}>🚀</span> Мои проекты
      </h1>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '25px',
        padding: '0 20px'
      }}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="pixel-block" style={{ 
        maxWidth: '800px', 
        margin: '40px auto',
        textAlign: 'center'
      }}>
        <p className="pixel-text" style={{ marginBottom: '15px' }}>
          <span style={{ 
      fontSize: '20px',
      display: 'inline-block',
      transform: 'translateY(-3px)'
    }}>💡</span> Все проекты включают полный цикл:
        </p>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          gap: '20px',
          fontSize: '14px'
        }}>
          <span>🔍 Анализ требований</span>
          <span>📐 Проектирование</span>
          <span>🎨 Дизайн/Моделирование</span>
          <span>📋 Документирование</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;