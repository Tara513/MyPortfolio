import React, { useState, useEffect, useRef } from 'react';
import './styles/index.css';
import Intro from './components/Intro';
import ProjectHTP from './components/ProjectHTP';
import ProjectColocMatch from './components/ProjectColocMatch';
import ProjectCarrefour from './components/ProjectCarrefour';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const containerRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const handleNavigation = (index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
      document.getElementById(`slide-${index}`).scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Masquer l'indicateur de défilement après un certain temps
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    let lastScrollTime = 0;
    let scrollAccumulator = 0;
    
    const handleWheel = (e) => {
      // Empêcher le comportement par défaut du défilement
      e.preventDefault();
      
      // Masquer l'indicateur de défilement lors de l'interaction
      setShowScrollIndicator(false);
      
      const now = Date.now();
      
      // Réinitialiser l'accumulateur si le dernier défilement était il y a plus de 200ms
      if (now - lastScrollTime > 200) {
        scrollAccumulator = 0;
      }
      
      lastScrollTime = now;
      
      // Accumuler le défilement vertical
      scrollAccumulator += e.deltaY;
      
      // Appliquer une sensibilité ajustable - plus petite valeur pour plus de sensibilité
      const sensitivity = 200;
      
      // Utiliser deltaY pour faire défiler horizontalement
      container.scrollLeft += e.deltaY * 0.5; // Rendre le défilement plus doux
      
      // Changer de slide si l'accumulation dépasse le seuil
      if (Math.abs(scrollAccumulator) > sensitivity) {
        if (scrollAccumulator > 0 && currentSlide < totalSlides - 1) {
          // Scroll vers le bas ou la droite - slide suivant
          handleNavigation(currentSlide + 1);
        } else if (scrollAccumulator < 0 && currentSlide > 0) {
          // Scroll vers le haut ou la gauche - slide précédent
          handleNavigation(currentSlide - 1);
        }
        scrollAccumulator = 0;
      }
    };

    // Ajouter l'écouteur d'événements pour la souris
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    // Gérer la navigation avec les flèches du clavier
    const handleKeyDown = (e) => {
      setShowScrollIndicator(false);
      if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        handleNavigation(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        handleNavigation(currentSlide - 1);
      }
    };

    // Ajouter l'écouteur d'événements pour le clavier
    window.addEventListener('keydown', handleKeyDown);

    // Nettoyer les écouteurs d'événements
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, totalSlides]);

  // Fonction pour gérer le défilement tactile
  useEffect(() => {
    const container = containerRef.current;
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      setShowScrollIndicator(false);
    };
    
    const handleTouchMove = (e) => {
      e.preventDefault(); // Empêcher le défilement de la page
    };
    
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX;
      
      // Calculer la distance de glissement
      const touchDiff = touchStartX - touchEndX;
      
      // Seuil minimum pour considérer un swipe
      if (Math.abs(touchDiff) > 50) {
        if (touchDiff > 0 && currentSlide < totalSlides - 1) {
          // Swipe vers la gauche (suivant)
          handleNavigation(currentSlide + 1);
        } else if (touchDiff < 0 && currentSlide > 0) {
          // Swipe vers la droite (précédent)
          handleNavigation(currentSlide - 1);
        }
      }
    };
    
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentSlide, totalSlides]);

  return (
    <div className="relative h-screen w-screen bg-primary overflow-hidden">
      <Navigation currentSlide={currentSlide} totalSlides={totalSlides} handleNavigation={handleNavigation} />
      
      {showScrollIndicator && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center animate-pulse">
          <p className="text-secondary font-mono text-sm mb-2">Scroll pour naviguer</p>
          <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(270deg)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      )}
      
      {/* Flèche de navigation gauche */}
      {currentSlide > 0 && (
        <button 
          onClick={() => handleNavigation(currentSlide - 1)}
          className="fixed top-1/2 left-4 transform -translate-y-1/2 z-40 text-textSecondary hover:text-secondary transition-colors duration-300 focus:outline-none"
          aria-label="Slide précédent"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      {/* Flèche de navigation droite */}
      {currentSlide < totalSlides - 1 && (
        <button 
          onClick={() => handleNavigation(currentSlide + 1)}
          className="fixed top-1/2 right-16 transform -translate-y-1/2 z-40 text-textSecondary hover:text-secondary transition-colors duration-300 focus:outline-none"
          aria-label="Slide suivant"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      
      <div ref={containerRef} className="flex h-screen snap-x snap-mandatory overflow-x-auto scrollbar-hide">
        <div id="slide-0" className="snap-start w-screen h-screen flex-shrink-0">
          <Intro />
        </div>
        <div id="slide-1" className="snap-start w-screen h-screen flex-shrink-0">
          <ProjectHTP />
        </div>
        <div id="slide-2" className="snap-start w-screen h-screen flex-shrink-0">
          <ProjectColocMatch />
        </div>
        <div id="slide-3" className="snap-start w-screen h-screen flex-shrink-0">
          <ProjectCarrefour />
        </div>
        <div id="slide-4" className="snap-start w-screen h-screen flex-shrink-0">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App; 