import React from 'react';

const Contact = () => {
  return (
    <div className="h-full w-full flex items-center justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl text-center">
        <h3 className="text-lg text-secondary font-mono mb-2">Et ensuite ?</h3>
        <h2 className="text-3xl md:text-5xl font-bold text-textPrimary mb-8">Travaillons ensemble</h2>
        
        <p className="text-xl text-textSecondary mb-12 mx-auto max-w-2xl">
          Je suis actuellement à la recherche d'opportunités de stage et de collaboration 
          sur des projets de data science. N'hésitez pas à me contacter pour discuter de 
          potentielles collaborations ou simplement échanger sur la data science !
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-transparent border-2 border-secondary text-secondary 
                       px-8 py-4 rounded font-medium hover:bg-secondary hover:bg-opacity-10 
                       transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          
          <a 
            href="mailto:laura.martin@example.com" 
            className="flex items-center justify-center bg-secondary text-primary 
                      px-8 py-4 rounded font-medium hover:bg-opacity-90 
                      transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Envoyer un email
          </a>
        </div>
        
        <p className="text-textSecondary mt-16 text-sm font-mono">
          Conçu & développé avec passion | 2023
        </p>
      </div>
    </div>
  );
};

export default Contact; 