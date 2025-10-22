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
    <div className="relative h-screen w-screen overflow-hidden">
      <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm shadow-lg z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 text-white font-bold text-xl">
              ECOPLAST
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {slides.map((slide, index) => (
                   <button 
                     key={slide.name} 
                     onClick={() => goToSlide(index)}
                     className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                       currentSlide === index 
                         ? 'bg-emerald-500 text-white' 
                         : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                     }`}
                   >
                     {slide.name}
                   </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      <main 
        className="slides-container" 
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
            {slide.component}
          </div>
        ))}
      </main>
      
      <div className="fixed bottom-5 left-5 text-white bg-slate-800/50 px-3 py-1 rounded-full text-sm z-40">
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
      
      <footer className="fixed bottom-0 left-0 right-0 bg-slate-950/80 text-center p-2 text-xs text-slate-400 z-40">
        <p>&copy; {new Date().getFullYear()} Ecoplast. Presentación de Seguridad e Higiene Industrial.</p>
      </footer>
    </div>
  );
};

export default App;