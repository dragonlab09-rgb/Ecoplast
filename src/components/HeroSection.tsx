import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat p-4" style={{backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(https://picsum.photos/1920/1080?grayscale&blur=2)'}}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight fade-in-up">
          Plan de Higiene y Seguridad Industrial
        </h1>
        <p className="text-2xl md:text-4xl font-light text-emerald-400 mb-8 fade-in-up delay-200">
          EMPRESA: ECOPLAST
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 fade-in-up delay-400">
          Procesos Clave: Trituración, Inyección (Moldeo) y Almacenamiento Logístico de Plástico PET.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
