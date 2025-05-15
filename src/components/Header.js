import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

function Header() {
  return (
    <header id="header" className="header">
      <div className="container header-container">
        <div className="header-content">
          <h1>Bonjour, je suis <span>Nom Prénom</span></h1>
          <h2>Étudiante en 1ère année en Data Science</h2>
          <p>Bienvenue sur mon portfolio où je présente mes projets et compétences en science des données.</p>
          <div className="header-buttons">
            <Link to="projects" smooth={true} duration={500} className="btn">Voir mes projets</Link>
            <Link to="contact" smooth={true} duration={500} className="btn btn-outline">Me contacter</Link>
          </div>
        </div>
        <div className="header-image">
          <div className="header-image-placeholder">
            <div className="illustration">
              <div className="circle"></div>
              <div className="dots"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 