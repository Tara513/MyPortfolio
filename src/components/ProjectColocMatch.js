import React, { useState } from 'react';

const ProjectColocMatch = () => {
  const [activePerson, setActivePerson] = useState(0);
  
  const profiles = [
    { name: 'Marie', age: 23, city: 'Paris', hobby: 'Photographie' },
    { name: 'Thomas', age: 25, city: 'Lyon', hobby: 'Musique' },
    { name: 'Julie', age: 22, city: 'Marseille', hobby: 'Cuisine' },
    { name: 'Lucas', age: 24, city: 'Bordeaux', hobby: 'Sport' },
  ];
  
  const handleNext = () => {
    setActivePerson((prev) => (prev + 1) % profiles.length);
  };
  
  const handlePrev = () => {
    setActivePerson((prev) => (prev - 1 + profiles.length) % profiles.length);
  };
  
  return (
    <div className="h-full w-full flex items-center justify-center px-8 md:px-16 lg:px-24 bg-gradient-to-br from-colocPink to-colocWhite">
      <div className="max-w-4xl">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2 order-2 md:order-1 relative">
            <div className="rounded-lg overflow-hidden relative">
              <div className="h-64 md:h-80 bg-white shadow-xl rounded-2xl p-4">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-gray-800 font-bold">ColocMatch</h4>
                    <div className="flex space-x-1">
                      <span className="h-3 w-3 rounded-full bg-colocPink"></span>
                      <span className="h-3 w-3 rounded-full bg-gray-200"></span>
                      <span className="h-3 w-3 rounded-full bg-gray-200"></span>
                    </div>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center relative overflow-hidden rounded-xl bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6 bg-white rounded-xl shadow-md w-5/6 relative">
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-colocPink flex items-center justify-center text-white text-2xl font-bold">
                          {profiles[activePerson].name[0]}
                        </div>
                        <div className="mt-10">
                          <h3 className="text-xl font-bold text-gray-800">{profiles[activePerson].name}, {profiles[activePerson].age}</h3>
                          <p className="text-gray-600">{profiles[activePerson].city}</p>
                          <p className="text-colocPink font-medium mt-2">❤️ {profiles[activePerson].hobby}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <button 
                      onClick={handlePrev}
                      className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-colocPink"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-colocPink p-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-md border-l-4 border-colocPink">
              <p className="text-gray-700">
                L'algorithme de correspondance a été testé avec succès sur un groupe de 200 étudiants, 
                avec un taux de satisfaction de 85% concernant les colocataires suggérés.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-lg text-colocPink font-mono mb-2">Projet 02</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">ColocMatch - App de Matching</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-xl mb-6 border-l-4 border-colocPink">
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
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white border border-colocPink px-3 py-1 rounded-full text-sm text-colocPink">Python</span>
              <span className="bg-white border border-colocPink px-3 py-1 rounded-full text-sm text-colocPink">Scikit-learn</span>
              <span className="bg-white border border-colocPink px-3 py-1 rounded-full text-sm text-colocPink">Flask</span>
              <span className="bg-white border border-colocPink px-3 py-1 rounded-full text-sm text-colocPink">React</span>
              <span className="bg-white border border-colocPink px-3 py-1 rounded-full text-sm text-colocPink">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectColocMatch; 