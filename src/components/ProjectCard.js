import React from 'react';
import '../styles/pixel-styles.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="pixel-block" style={{
      margin: '15px',
      width: '320px',
      minHeight: '350px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Эмодзи и заголовок */}
      <div style={{
        height: '120px',
        background: `linear-gradient(45deg, ${project.color || '#ffcfe0'}, #ff8eb4)`,
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px',
        color: 'white',
        borderRadius: '5px'
      }}>
        {project.emoji || '🖥️'}
      </div>
      
      {/* Заголовок проекта */}
      <h3 className="pixel-text" style={{ 
        marginBottom: '10px',
        fontSize: '18px',
        minHeight: '50px'
      }}>
        {project.title}
      </h3>
      
      {/* Описание */}
      <div style={{ flex: 1, marginBottom: '15px' }}>
        <p style={{ 
          fontSize: '14px', 
          lineHeight: '1.5',
          color: '#555'
        }}>
          {project.description}
        </p>
      </div>
      
      {/* Теги */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '15px' }}>
        {project.tags.map((tag, index) => (
          <span key={index} style={{
            background: 'var(--dark-pink)',
            color: 'white',
            padding: '4px 8px',
            fontSize: '11px',
            borderRadius: '3px',
            fontFamily: 'monospace'
          }}>
            {tag}
          </span>
        ))}
      </div>
      
      {/* Кнопка с ссылкой (если есть) */}
      {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="pixel-button"
          style={{
            textAlign: 'center',
            padding: '10px 15px',
            fontSize: '14px',
            textDecoration: 'none',
            marginTop: 'auto'
          }}
        >
          {project.linkText || 'Открыть проект'} →
        </a>
      )}
    </div>
  );
};

export default ProjectCard;