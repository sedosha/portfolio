// src/pages/Education.js
import React, { useState, useEffect } from 'react';
import { fetchEducationData } from '../data/portfolioData';
import '../styles/pixel-styles.css';

const Education = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  const openCertificate = (certName) => {
  window.open(`/certificates/${certName}.pdf`, '_blank');
};

  useEffect(() => {
    fetchEducationData().then(data => {
      setEducation(data);
      setLoading(false);
    });
  }, []);


  if (loading) {
    return (
      <div className="pixel-grid" style={{ textAlign: 'center', padding: '50px' }}>
        <div className="pixel-text">Загружаем данные об образовании...</div>
      </div>
    );
  }

  return (
    <>
      <div className="pixel-grid" style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
        <h1 className="pixel-text" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '36px', color: 'var(--dark-pink)' }}>
           Образование и достижения
        </h1>


<div style={{ marginBottom: '60px' }}>
  <h2 className="pixel-text" style={{ marginBottom: '30px', textAlign: 'center', fontSize: '28px' }}>
    📖 Основное образование
  </h2>
  
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
    gap: '30px',
    justifyContent: 'center',
    maxWidth: '1200px', 
    margin: '0 auto' 
  }}>
    {education.filter(item => item.category === 'education').map((item, index) => (
      <div key={index} className="pixel-block edu-card" style={{ 
        minHeight: '300px', 
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
          <span style={{ fontSize: '36px' }}>{item.emoji}</span> 
          <div style={{ flex: 1 }}>
            <h3 className="pixel-text" style={{ color: 'var(--dark-pink)', margin: '0', fontSize: '22px' }}>
              {item.title}
            </h3>
            <p style={{ margin: '10px 0', color: '#666', fontSize: '15px' }}>{item.period}</p>
          </div>
        </div>
        
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ fontSize: '15px' }}>Направление:</strong>
            <p style={{ margin: '8px 0', fontSize: '15px', lineHeight: '1.5' }}>{item.specialization}</p>
          </div>
          
          {item.department && (
            <div style={{ marginBottom: '15px' }}>
              <strong style={{ fontSize: '15px' }}>Подразделение:</strong>
              <p style={{ margin: '8px 0', fontSize: '14px', lineHeight: '1.5' }}>{item.department}</p>
            </div>
          )}
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
          {item.tags.map((tag, idx) => (
            <span key={idx} style={{
              background: 'var(--light-pink)',
              color: 'var(--dark-pink)',
              padding: '5px 12px',
              borderRadius: '15px',
              fontSize: '12px',
              border: '2px solid var(--dark-pink)'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>


        <div style={{ marginBottom: '60px' }}>
          <h2 className="pixel-text" style={{ marginBottom: '30px', textAlign: 'center', fontSize: '28px' }}>
            🚀 Дополнительное образование
          </h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
            {education.filter(item => item.category === 'courses').map((item, index) => (
              <div key={index} className="pixel-block" style={{ 
                width: '100%',
                maxWidth: '1000px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <span style={{ fontSize: '28px' }}>{item.emoji}</span>
                <div style={{ flex: 1 }}>
                    <h3 className="pixel-text" style={{ color: 'var(--dark-pink)', margin: '0 0 10px 0' }}>
                    {item.title}
                    </h3>
                    
                    {item.period && (
                    <p style={{ 
                        color: '#666', 
                        fontSize: '14px', 
                        marginBottom: '10px', 
                    }}>
                        {item.period}
                    </p>
                    )}
                    
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                    {item.description}
                    </p>
                      
                            {item.hasCertificate && (
                            <button 
                            onClick={() => openCertificate(item.certificateName)}
                            className="pixel-button"
                            style={{ 
                                padding: '6px 15px',
                                fontSize: '13px',
                                background: 'var(--light-pink)',
                                color: 'var(--dark-pink)'
                            }}
                            >
                            📄 Сертификат
                            </button>
                        )}
                    </div>
                    
                    
                  </div>
                </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 className="pixel-text" style={{ marginBottom: '30px', textAlign: 'center', fontSize: '28px' }}>
            🏆 Участие в мероприятиях
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            justifyContent: 'center'
          }}>
            {education.filter(item => item.category === 'competitions').map((item, index) => (
              <div key={index} className="pixel-block" style={{ 
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                  <span style={{ fontSize: '32px' }}>{item.emoji}</span>
                  <h3 className="pixel-text" style={{ color: 'var(--dark-pink)', margin: '10px 0' }}>
                    {item.title}
                  </h3>
                  {item.period && (
                    <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                      {item.period}
                    </p>
                  )}
                </div>
                
                <div style={{ flex: 1, textAlign: 'center', marginBottom: '15px' }}>
                  <p style={{ lineHeight: '1.5', fontSize: '14px' }}>
                    {item.description}
                  </p>
                </div>
                
                
                {item.hasCertificate && (
                <div style={{ textAlign: 'center', marginTop: 'auto' }}>
                <button 
                    onClick={() => openCertificate(item.certificateName)}
                    className="pixel-button"
                    style={{ 
                    padding: '8px 20px',
                    fontSize: '14px',
                    background: 'var(--light-pink)',
                    color: 'var(--dark-pink)'
                    }}
                >
                    📄 Показать сертификат
                </button>
                </div>
            )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Education;