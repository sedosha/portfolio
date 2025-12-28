
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pixel-styles.css';

const Home = () => {
  const contacts = [
    { platform: 'Email', value: 'M*******@yandex.ru', emoji: '📧', link: 'mailto:M*******@yandex.ru' },
    { platform: 'Телефон', value: '+7 (985) *******', emoji: '📱', link: 'tel:+7985*******' },
    { platform: 'Telegram', value: '@MariaSedova', emoji: '✈️', link: 'https://t.me/MariaSedova' },
    { platform: 'GitHub', value: 'github.com/sedosha', emoji: '💻', link: 'https://github.com/sedosha' }
  ];

  return (
    <div className="pixel-grid" style={{ 
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 20px'
    }}>
      <div className="pixel-block" style={{ 
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center',
        padding: '40px 30px',
        marginBottom: '40px'
      }}>
        <div style={{ 
          fontSize: '64px',
          marginBottom: '20px',
          filter: 'drop-shadow(3px 3px 0 var(--pixel-shadow))'
        }}>
          🌸
        </div>
        
        <h1 className="pixel-text" style={{ 
          fontSize: '32px',
          color: 'var(--dark-pink)',
          marginBottom: '30px',
          textShadow: '3px 3px 0 var(--pixel-shadow)'
        }}>
          Привет, я Мария Седова
        </h1>
        
        <h2 className="pixel-text" style={{ 
          fontSize: '22px',
          marginBottom: '25px',
          lineHeight: '1.4'
        }}>
          IT-специалист | Аналитик данных 
        </h2>
        
        <p style={{ 
          fontSize: '18px',
          lineHeight: '1.6',
          marginBottom: '30px',
          color: '#555'
        }}>
          Специализируюсь на анализе данных и процессов.
          Создаю цифровые решения на стыке бизнеса и технологий.  
          Имею опыт работы в государственных структурах 
          и участия в профессиональных конкурсах.
        </p>
        
        <div style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: '25px',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          <div style={{ 
            background: 'var(--light-pink)',
            padding: '15px',
            borderRadius: '8px',
            width: '160px',
            border: '3px solid var(--dark-pink)'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>🎯</div>
            <div style={{ fontWeight: 'bold', color: 'var(--dark-pink)' }}>Бизнес-анализ</div>
            <div style={{ fontSize: '13px' }}>BPMN, IDEF0</div>
          </div>
          
          <div style={{ 
            background: 'var(--light-pink)',
            padding: '15px',
            borderRadius: '8px',
            width: '160px',
            border: '3px solid var(--dark-pink)'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>🛡️</div>
            <div style={{ fontWeight: 'bold', color: 'var(--dark-pink)' }}>ИТ-безопасность</div>
            <div style={{ fontSize: '13px' }}>Защита данных</div>
          </div>
          
          <div style={{ 
            background: 'var(--light-pink)',
            padding: '15px',
            borderRadius: '8px',
            width: '160px',
            border: '3px solid var(--dark-pink)'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>💻</div>
            <div style={{ fontWeight: 'bold', color: 'var(--dark-pink)' }}>Разработка ИС</div>
            <div style={{ fontSize: '13px' }}>Проектирование</div>
          </div>
          
          <div style={{ 
            background: 'var(--light-pink)',
            padding: '15px',
            borderRadius: '8px',
            width: '160px',
            border: '3px solid var(--dark-pink)'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>📊</div>
            <div style={{ fontWeight: 'bold', color: 'var(--dark-pink)' }}>Анализ данных</div>
            <div style={{ fontSize: '13px' }}>SQL, Python</div>
          </div>
        </div>
      </div>

      <div className="pixel-block" style={{ 
        maxWidth: '800px',
        width: '100%',
        padding: '30px',
        marginBottom: '40px',
      }}>
        <h2 className="pixel-text" style={{ 
          textAlign: 'center',
          fontSize: '28px',
          color: 'var(--dark-pink)',
          marginBottom: '30px'
        }}>
          <span style={{ 
      fontSize: '28px',
      display: 'inline-block',
      transform: 'translateY(-3px)'
    }}>📞</span> Контакты
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '20px'
        }}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.platform === 'Email' || contact.platform === 'Телефон' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '15px',
                background: 'var(--light-pink)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--dark-pink)',
                border: '3px solid var(--dark-pink)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(255, 142, 180, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '28px' }}>{contact.emoji}</span>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{contact.platform}</div>
                <div style={{ fontSize: '14px', color: '#666' }}>{contact.value}</div>
              </div>
            </a>
          ))}
        </div>

      </div>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          <Link to="/education" className="pixel-button" style={{ 
            padding: '15px 30px',
            fontSize: '18px',
            minWidth: '180px'
          }}>
            🎓 Образование
          </Link>
          
          <Link to="/experience" className="pixel-button" style={{ 
            padding: '15px 30px',
            fontSize: '18px',
            minWidth: '180px'
          }}>
            💼 Опыт работы
          </Link>
          
          <Link to="/projects" className="pixel-button" style={{ 
            padding: '15px 30px',
            fontSize: '18px',
            minWidth: '180px'
          }}>
            🚀 Проекты
          </Link>
        </div>
    </div>
  );
};

export default Home;