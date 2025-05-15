import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>DS Portfolio</h2>
            <p>Portfolio d'une étudiante en Data Science</p>
          </div>
          
          <div className="footer-links">
            <h3>Liens rapides</h3>
            <ul>
              <li><a href="#header">Accueil</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Réseaux sociaux</h3>
            <div className="social-icons">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-icon">GH</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="social-icon">IN</a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social-icon">TW</a>
              <a href="https://kaggle.com/" target="_blank" rel="noreferrer" className="social-icon">KG</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Portfolio Data Science | Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 