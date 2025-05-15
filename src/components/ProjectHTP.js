import React, { useState } from 'react';

const ProjectHTP = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleAnimate = () => {
    setIsAnimated(true);
    setTimeout(() => setIsAnimated(false), 2000);
  };

  return (
    <div className="h-full w-full flex items-center justify-center px-8 md:px-16 lg:px-24 bg-gradient-to-br from-htpBordeaux to-gray-900">
      <div className="max-w-4xl">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2">
            <h3 className="text-lg text-htpWhite font-mono mb-2">Projet 01</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-htpWhite mb-6">HTP - Automatisation d'emails</h2>
            
            <div className="bg-black bg-opacity-40 p-6 rounded-lg shadow-xl mb-6 border-l-4 border-htpWhite">
              <p className="text-htpWhite mb-4">
                Développement d'un système d'automatisation pour une startup permettant de :
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-htpWhite mr-2">▹</span>
                  Envoyer des emails personnalisés basés sur des déclencheurs spécifiques
                </li>
                <li className="flex items-start">
                  <span className="text-htpWhite mr-2">▹</span>
                  Collecter des données via des questionnaires interactifs
                </li>
                <li className="flex items-start">
                  <span className="text-htpWhite mr-2">▹</span>
                  Analyser les résultats pour obtenir des insights clients
                </li>
                <li className="flex items-start">
                  <span className="text-htpWhite mr-2">▹</span>
                  Générer des rapports automatiques pour l'équipe commerciale
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-black bg-opacity-40 px-3 py-1 rounded-full text-sm text-htpWhite">Python</span>
              <span className="bg-black bg-opacity-40 px-3 py-1 rounded-full text-sm text-htpWhite">Machine Learning</span>
              <span className="bg-black bg-opacity-40 px-3 py-1 rounded-full text-sm text-htpWhite">NLP</span>
              <span className="bg-black bg-opacity-40 px-3 py-1 rounded-full text-sm text-htpWhite">Pandas</span>
              <span className="bg-black bg-opacity-40 px-3 py-1 rounded-full text-sm text-htpWhite">SQL</span>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden relative">
              <div className="h-64 md:h-80 bg-black bg-opacity-40 rounded-lg p-5">
                <div 
                  className={`bg-gray-900 rounded-lg h-full w-full flex flex-col items-center justify-center p-4 transition-all duration-500 
                    ${isAnimated ? 'animate-pulse' : ''}`}
                  onClick={handleAnimate}
                >
                  <div className="text-center mb-4">
                    <svg className="w-16 h-16 mx-auto text-htpWhite mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <p className="text-htpWhite font-medium mb-2">Système d'automatisation d'emails</p>
                    <span className="text-sm text-gray-400 block">Cliquez pour simuler un envoi</span>
                  </div>
                  <div className={`${isAnimated ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 relative`}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg className="w-10 h-10 text-htpWhite" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-black bg-opacity-40 p-4 rounded-lg border-l-4 border-htpWhite">
              <p className="text-gray-300">
                Ce projet a permis à la startup d'augmenter son taux de réponse client de 37% et d'économiser en moyenne 
                15 heures de travail manuel par semaine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHTP; 