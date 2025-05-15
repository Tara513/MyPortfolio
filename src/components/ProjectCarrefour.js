import React, { useState } from 'react';

const ProjectCarrefour = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="h-full w-full flex items-center justify-center px-8 md:px-16 lg:px-24 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-4xl">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2">
            <h3 className="text-lg text-carrefourBlue font-mono mb-2">Projet 03</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-carrefourBlue mb-6">
              Base de Données Carrefour
              <span className="text-carrefourRed ml-2">+</span>
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-xl mb-6 border-l-4 border-carrefourBlue">
              <div className="flex space-x-4 mb-4 border-b">
                <button 
                  className={`pb-2 px-3 ${activeTab === 'description' 
                    ? 'text-carrefourBlue border-b-2 border-carrefourBlue' 
                    : 'text-gray-500'}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`pb-2 px-3 ${activeTab === 'results' 
                    ? 'text-carrefourRed border-b-2 border-carrefourRed' 
                    : 'text-gray-500'}`}
                  onClick={() => setActiveTab('results')}
                >
                  Résultats
                </button>
                <button 
                  className={`pb-2 px-3 ${activeTab === 'tech' 
                    ? 'text-carrefourBlue border-b-2 border-carrefourBlue' 
                    : 'text-gray-500'}`}
                  onClick={() => setActiveTab('tech')}
                >
                  Technologies
                </button>
              </div>
              
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <p className="text-gray-800 mb-4">
                    Optimisation et restructuration de la base de données produits pour Carrefour :
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-carrefourRed mr-2">▹</span>
                      Refonte du schéma de la base de données pour améliorer les performances
                    </li>
                    <li className="flex items-start">
                      <span className="text-carrefourRed mr-2">▹</span>
                      Développement d'un système avancé de requêtes pour l'analyse de données
                    </li>
                    <li className="flex items-start">
                      <span className="text-carrefourRed mr-2">▹</span>
                      Création d'un tableau de bord interactif pour les gestionnaires de produits
                    </li>
                    <li className="flex items-start">
                      <span className="text-carrefourRed mr-2">▹</span>
                      Mise en place d'un système d'alerte automatique pour la gestion des stocks
                    </li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'results' && (
                <div className="space-y-4">
                  <p className="text-gray-800 mb-4">
                    Impact du projet sur les opérations de Carrefour :
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-carrefourRed mr-2">▹</span>
                      Réduction de 40% du temps d'exécution des requêtes de base de données
                    </li>
                    <li className="flex items-start">
                      <span className="text-carrefourRed mr-2">▹</span>
                      Diminution de 25% des ruptures de stock grâce au système d'alerte
                    </li>
                    <li className="flex items-start">
                      <span className="text-carrefourRed mr-2">▹</span>
                      Amélioration de 35% dans la précision des prévisions de vente
                    </li>
                    <li className="flex items-start">
                      <span className="text-carrefourRed mr-2">▹</span>
                      Économie estimée à 120 000€ par an grâce à l'optimisation globale
                    </li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'tech' && (
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white border border-carrefourBlue px-3 py-1 rounded-full text-sm text-carrefourBlue">SQL</span>
                  <span className="bg-white border border-carrefourBlue px-3 py-1 rounded-full text-sm text-carrefourBlue">PostgreSQL</span>
                  <span className="bg-white border border-carrefourRed px-3 py-1 rounded-full text-sm text-carrefourRed">Python</span>
                  <span className="bg-white border border-carrefourRed px-3 py-1 rounded-full text-sm text-carrefourRed">Pandas</span>
                  <span className="bg-white border border-carrefourBlue px-3 py-1 rounded-full text-sm text-carrefourBlue">Power BI</span>
                  <span className="bg-white border border-carrefourRed px-3 py-1 rounded-full text-sm text-carrefourRed">Docker</span>
                  <span className="bg-white border border-carrefourBlue px-3 py-1 rounded-full text-sm text-carrefourBlue">ETL</span>
                  <span className="bg-white border border-carrefourRed px-3 py-1 rounded-full text-sm text-carrefourRed">Data Mining</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl perspective">
              <div className={`transform duration-700 preserve-3d ${isExpanded ? 'rotate-y-180' : ''}`}>
                <div className="front absolute w-full h-full backface-hidden">
                  <div 
                    className="h-64 md:h-80 bg-white rounded-lg flex items-center justify-center p-6 cursor-pointer hover:shadow-2xl transition-shadow"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-full h-full text-carrefourBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 14l2 2 4-4"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 9h4"></path>
                        </svg>
                      </div>
                      <p className="text-carrefourBlue font-medium">
                        Dashboard Interactif
                        <br />
                        <span className="text-sm text-gray-500 mt-2 block">Cliquez pour explorer</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="back absolute w-full h-full backface-hidden rotate-y-180">
                  <div 
                    className="h-64 md:h-80 bg-gradient-to-r from-carrefourBlue to-carrefourRed rounded-lg flex items-center justify-center p-6 cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <div className="text-center text-white">
                      <div className="flex justify-center items-center mb-4">
                        <div className="w-48 h-32 bg-white p-2 rounded-lg shadow-inner">
                          <div className="bg-gray-100 h-4 w-full mb-2 rounded"></div>
                          <div className="flex space-x-1">
                            <div className="bg-carrefourBlue h-16 w-1/5 rounded"></div>
                            <div className="bg-carrefourRed h-20 w-1/5 rounded"></div>
                            <div className="bg-carrefourBlue h-14 w-1/5 rounded"></div>
                            <div className="bg-carrefourRed h-12 w-1/5 rounded"></div>
                            <div className="bg-carrefourBlue h-16 w-1/5 rounded"></div>
                          </div>
                        </div>
                      </div>
                      <p className="font-medium">
                        Visualisation des métriques de performance
                        <br />
                        <span className="text-sm mt-2 block">Cliquez pour revenir</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-md border-l-4 border-carrefourRed">
              <p className="text-gray-700">
                Ce projet a permis à Carrefour d'optimiser sa gestion de stocks et son analyse de données,
                conduisant à une réduction significative des coûts opérationnels tout en améliorant l'expérience client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarrefour; 