import React, { useState } from 'react';

const ProjectColocMatch = () => {
  const [activeTab, setActiveTab] = useState('presentation');

  return (
    <div className="h-full w-full flex items-center justify-center px-8 md:px-16 lg:px-24 bg-colocPink">
      <div className="max-w-4xl">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2">
            <h3 className="text-lg text-colocPink font-mono mb-2">Projet 02</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">ColocMatch - App de Matching</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-xl mb-6 border-l-4 border-colocPink">
              <div className="flex space-x-4 mb-4 border-b">
                <button 
                  className={`pb-2 px-3 ${activeTab === 'presentation' 
                    ? 'text-colocPink border-b-2 border-colocPink font-medium' 
                    : 'text-gray-500'}`}
                  onClick={() => setActiveTab('presentation')}
                >
                  Présentation
                </button>
                <button 
                  className={`pb-2 px-3 ${activeTab === 'achievements' 
                    ? 'text-colocPink border-b-2 border-colocPink font-medium' 
                    : 'text-gray-500'}`}
                  onClick={() => setActiveTab('achievements')}
                >
                  Réalisations
                </button>
                <button 
                  className={`pb-2 px-3 ${activeTab === 'skills' 
                    ? 'text-colocPink border-b-2 border-colocPink font-medium' 
                    : 'text-gray-500'}`}
                  onClick={() => setActiveTab('skills')}
                >
                  Compétences
                </button>
              </div>
              
              {activeTab === 'presentation' && (
                <div className="space-y-4">
                  <p className="text-gray-800 mb-4">
                    Conception et développement d'une application de matching pour colocataires avec :
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      Un algorithme de compatibilité basé sur les préférences et habitudes de vie
                    </li>
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      Un système de sondage pour recueillir les données utilisateurs
                    </li>
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      Une interface intuitive pour explorer les correspondances potentielles
                    </li>
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      Un système de messagerie intégré pour faciliter la communication
                    </li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'achievements' && (
                <div className="space-y-4">
                  <p className="text-gray-800 mb-4">
                    Impact et résultats du projet ColocMatch :
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      L'algorithme de correspondance a été testé avec succès sur un groupe de 200 étudiants
                    </li>
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      Taux de satisfaction de 85% concernant les colocataires suggérés
                    </li>
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      Réduction de 30% du temps nécessaire pour trouver un colocataire compatible
                    </li>
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      Interface utilisateur notée 4.7/5 par les testeurs pour sa facilité d'utilisation
                    </li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'skills' && (
                <div className="space-y-4">
                  <p className="text-gray-800 mb-4">
                    Compétences et technologies utilisées :
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      Développement frontend avec React et TailwindCSS
                    </li>
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      Implémentation d'algorithmes de matching avec Python et Scikit-learn
                    </li>
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      Conception et gestion de base de données avec MongoDB
                    </li>
                    <li className="flex items-start">
                      <span className="text-colocPink mr-2">▹</span>
                      Développement d'API RESTful avec Flask pour intégrer frontend et backend
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-xl mb-6 border-l-4 border-colocPink">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Outils utilisés</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white border-2 border-colocPink px-3 py-1 rounded-full text-sm text-colocPink font-medium shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 flex items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png" alt="Google Sheets" className="w-4 h-4 mr-1.5" />
                  Google Sheets
                </span>
                <span className="bg-white border-2 border-colocPink px-3 py-1 rounded-full text-sm text-colocPink font-medium shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 flex items-center">
                  <svg viewBox="0 0 16 16" className="w-4 h-4 mr-1.5" style={{ backgroundColor: 'black', borderRadius: '2px' }}>
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11px" style={{ fontFamily: 'Arial' }}>*</text>
                  </svg>
                  Tally
                </span>
                <span className="bg-white border-2 border-colocPink px-3 py-1 rounded-full text-sm text-colocPink font-medium shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 flex items-center">
                  <img src="https://cursor.sh/apple-touch-icon.png" alt="Cursor" className="w-4 h-4 mr-1.5" />
                  Cursor
                </span>
                <span className="bg-white border-2 border-colocPink px-3 py-1 rounded-full text-sm text-colocPink font-medium shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 flex items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="w-4 h-4 mr-1.5" />
                  Notion
                </span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2 flex flex-col items-center justify-center">
            <div className="w-full space-y-6 mb-6">
              <button className="w-full bg-white hover:bg-gray-50 text-colocPink border-2 border-colocPink p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group">
                <div className="mr-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Landing Page</h3>
                  <p className="text-gray-600 group-hover:text-colocPink transition-colors">Explorer l'interface utilisateur</p>
                </div>
              </button>
              
              <button className="w-full bg-colocPink hover:bg-pink-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group">
                <div className="mr-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Démonstration</h3>
                  <p className="text-pink-100 group-hover:text-white transition-colors">Voir l'application en action</p>
                </div>
              </button>
            </div>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-md border-l-4 border-colocPink w-full">
              <p className="text-gray-700">
                L'algorithme de correspondance a été testé avec succès sur un groupe de 200 étudiants, 
                avec un taux de satisfaction de 85% concernant les colocataires suggérés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectColocMatch; 