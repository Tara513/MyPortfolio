import React from 'react';

const Intro = () => {
  return (
    <div className="h-full w-full flex items-center justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-textPrimary mb-4">
          <span className="text-lg md:text-xl text-secondary font-mono block mb-2">Bonjour, je m'appelle</span>
          Laura Martin
        </h1>
        
        <h2 className="text-3xl md:text-4xl text-textSecondary font-bold mt-2 mb-6">
          Étudiante en Data Science
        </h2>
        
        <p className="text-xl md:text-2xl text-textPrimary mt-6 max-w-3xl">
          Je transforme <span className="text-secondary">des données complexes</span> en insights 
          exploitables pour résoudre des problèmes concrets.
        </p>
        
        <div className="mt-12">
          <button 
            className="border-2 border-secondary text-secondary px-6 py-3 rounded mr-4 
                       hover:bg-secondary hover:bg-opacity-10 transition-all duration-300"
            onClick={() => document.getElementById('slide-3').scrollIntoView({ behavior: 'smooth' })}
          >
            Me contacter
          </button>
          
          <button 
            className="border-2 border-secondary text-secondary px-6 py-3 rounded
                       hover:bg-secondary hover:bg-opacity-10 transition-all duration-300"
            onClick={() => document.getElementById('slide-1').scrollIntoView({ behavior: 'smooth' })}
          >
            Voir mes projets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro; 