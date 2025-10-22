import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import ParticipantsSection from './components/ParticipantsSection';
import ObjectivesSection from './components/ObjectivesSection';
import RisksSection from './components/RisksSection';
import ControlsSection from './components/ControlsSection';
import MonitoringBenefitsSection from './components/MonitoringBenefitsSection';
import AIAssistant from './components/AIAssistant';
import { BotIcon } from './components/icons/Icons';

const App: React.FC = () => {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const slides = [
    { name: 'Inicio', component: <HeroSection /> },
    { name: 'Integrantes', component: <ParticipantsSection /> },
    { name: 'Objetivos', component: <ObjectivesSection /> },
    { name: 'Riesgos', component: <RisksSection /> },
    { name: 'Controles', component: <ControlsSection /> },
    { name: 'Seguimiento', component: <MonitoringBenefitsSection /> },
  ];
  
  const totalSlides = slides.length;

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(Math.max(0, Math.min(slideIndex, totalSlides - 1)));
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isAIOpen) return; 

      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isAIOpen, totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAIOpen) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || isAIOpen) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    const swipeThreshold = 50; 

    if (deltaX > swipeThreshold) {
      prevSlide();
    } else if (deltaX < -swipeThreshold) {
      nextSlide();
    }

    touchStartX.current = null;
  };

  return (
    <div className="flex h-screen w-screen bg-slate-950">
      <aside className="w-64 flex-shrink-0 bg-slate-900 shadow-lg z-20 flex flex-col">
        <div className="p-6 flex-shrink-0 border-b border-slate-700/50">
          <div className="text-white font-bold text-2xl text-center">
            ECOPLAST
          </div>
        </div>
        <nav className="flex-grow p-4">
          <div className="space-y-2">
            {slides.map((slide, index) => (
              <button
                key={slide.name}
                onClick={() => goToSlide(index)}
                className={`w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 flex items-center ${
                  currentSlide === index
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="w-6 h-6 mr-3 text-center rounded-full bg-slate-700/50 flex items-center justify-center text-xs">{index + 1}</span>
                {slide.name}
              </button>
            ))}
          </div>
        </nav>
        <footer className="p-4 border-t border-slate-700/50 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Ecoplast. Presentación de Seguridad e Higiene Industrial.</p>
        </footer>
      </aside>
      
      <div className="flex-1 relative flex flex-col overflow-hidden">
        <main
          className="slides-container flex-grow"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
              {slide.component}
            </div>
          ))}
        </main>
      </div>

      <div className="fixed bottom-5 left-[calc(16rem+1.25rem)] text-white bg-slate-800/50 px-3 py-1 rounded-full text-sm z-40">
        <span>{currentSlide + 1} / {totalSlides}</span>
      </div>

      <button
        onClick={() => setIsAIOpen(true)}
        className="fixed bottom-5 right-5 sm:right-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110 focus:outline-none z-50 animate-pulse"
        aria-label="Open AI Assistant"
      >
        <BotIcon />
      </button>

      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
    </div>
  );
};

export default App;