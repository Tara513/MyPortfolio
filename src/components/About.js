import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">À Propos</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-placeholder">
              {/* Placeholder pour une photo de profil */}
            </div>
          </div>
          <div className="about-text">
            <h3>Nom Prénom</h3>
            <p className="about-subtitle">Étudiante en 1ère année en Data Science</p>
            
            <p>
              Je suis passionnée par l'analyse de données et l'intelligence artificielle. 
              Actuellement en première année d'études en Data Science, je développe mes compétences 
              en programmation, statistiques et visualisation de données.
            </p>
            
            <p>
              Mon objectif est de résoudre des problèmes complexes grâce à l'analyse des données 
              et de créer des modèles prédictifs performants. J'aime explorer les données pour 
              en extraire des insights pertinents.
            </p>
            
            <div className="about-info">
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">email@example.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Formation:</span>
                <span className="info-value">Licence en Data Science</span>
              </div>
              <div className="info-item">
                <span className="info-title">Université:</span>
                <span className="info-value">Université XYZ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 