// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Education from './pages/Education';
import Experience from './pages/Experience';
import './styles/App.css';
import './styles/pixel-styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{ position: 'relative' }}>
        {/* Header с z-index: 1000 */}
        <Header style={{ position: 'relative', zIndex: 1000 }} />
        
        <main className="main-content" style={{ position: 'relative', zIndex: 100 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />     
            <Route path="/experience" element={<Experience />} />   
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* Footer с z-index: 1000 */}
        <Footer style={{ position: 'relative', zIndex: 1000 }} />
      </div>
    </BrowserRouter>
  );
}

export default App;