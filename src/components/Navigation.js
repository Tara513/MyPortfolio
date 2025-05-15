import React from 'react';

const Navigation = ({ currentSlide, totalSlides, handleNavigation }) => {
  const slideNames = ['Intro', 'HTP', 'ColocMatch', 'Carrefour', 'Contact'];
  
  return (
    <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div key={index} className="flex items-center group">
            <div 
              className={`mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium ${
                currentSlide === index ? 'text-secondary' : 'text-textSecondary'
              }`}
            >
              {slideNames[index]}
            </div>
            <button
              onClick={() => handleNavigation(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 ${
                currentSlide === index 
                  ? 'bg-secondary scale-125 w-4 h-4' 
                  : 'bg-textSecondary opacity-50 hover:opacity-75'
              }`}
              aria-label={`Navigate to ${slideNames[index]}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation; 