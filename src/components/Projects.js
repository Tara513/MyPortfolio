import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Analyse de données de ventes",
      description: "Analyse exploratoire des données de ventes d'une entreprise fictive pour identifier les tendances et prédire les ventes futures.",
      skills: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      image: "data-analysis.jpg"
    },
    {
      id: 2,
      title: "Classification d'images",
      description: "Projet de classification d'images utilisant des techniques d'apprentissage automatique pour distinguer différentes catégories d'objets.",
      skills: ["Python", "TensorFlow", "Scikit-learn", "CNN"],
      image: "image-classification.jpg"
    },
    {
      id: 3,
      title: "Dashboard interactif",
      description: "Création d'un tableau de bord interactif pour visualiser les données de performance d'une entreprise.",
      skills: ["Python", "Dash", "Plotly", "SQL"],
      image: "dashboard.jpg"
    },
    {
      id: 4,
      title: "Analyse de sentiments",
      description: "Analyse des sentiments sur des avis clients pour comprendre la satisfaction et identifier les points d'amélioration.",
      skills: ["Python", "NLTK", "Pandas", "NLP"],
      image: "sentiment-analysis.jpg"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <div className="image-placeholder" style={{ backgroundColor: '#3498db' }}>
                  <div className="placeholder-text">{project.title.charAt(0)}</div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-skills">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <button className="btn project-btn">Voir le projet</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 