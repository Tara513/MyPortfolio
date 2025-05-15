import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Langages de programmation",
      skills: [
        { name: "Python", level: 80 },
        { name: "R", level: 70 },
        { name: "SQL", level: 75 },
        { name: "Java", level: 50 }
      ]
    },
    {
      id: 2,
      title: "Bibliothèques Data Science",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Scikit-learn", level: 70 },
        { name: "TensorFlow", level: 60 }
      ]
    },
    {
      id: 3,
      title: "Visualisation",
      skills: [
        { name: "Matplotlib", level: 75 },
        { name: "Seaborn", level: 70 },
        { name: "Plotly", level: 65 },
        { name: "Tableau", level: 55 }
      ]
    },
    {
      id: 4,
      title: "Autres",
      skills: [
        { name: "Git", level: 65 },
        { name: "MS Excel", level: 80 },
        { name: "Statistiques", level: 75 },
        { name: "Machine Learning", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-container">
          {skillCategories.map(category => (
            <div key={category.id} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 