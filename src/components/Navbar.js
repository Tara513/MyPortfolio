import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <h1>DS Portfolio</h1>
        </div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="header" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Accueil</Link></li>
            <li><Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projets</Link></li>
            <li><Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>À propos</Link></li>
            <li><Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Compétences</Link></li>
            <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-burger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`burger-line ${isOpen ? 'active' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'active' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 