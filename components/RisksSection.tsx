import React, { useState, useMemo } from 'react';
import { RISKS_DATA } from '../constants';

const severityStyles: { [key: string]: string } = {
  'Crítico': 'bg-red-500/80 text-white border-red-700',
  'Grave': 'bg-orange-500/80 text-white border-orange-700',
  'Moderado a Grave': 'bg-yellow-500/80 text-slate-900 border-yellow-700',
  'Moderado': 'bg-yellow-400/80 text-slate-900 border-yellow-600',
  'Leve a Moderado': 'bg-green-400/80 text-slate-900 border-green-600'
};

const RisksSection: React.FC = () => {
  const categories = useMemo(() => Array.from(new Set(RISKS_DATA.map(r => r.category))), []);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredRisks = useMemo(() => RISKS_DATA.filter(risk => risk.category === activeCategory), [activeCategory]);

  return (
    <section className="h-full w-full py-20 bg-slate-900 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white fade-in-up">Principales Riesgos Laborales</h2>
          <p className="mt-4 text-lg text-slate-400 fade-in-up delay-100">Un análisis detallado de los peligros en Ecoplast.</p>
          <div className="mt-4 mx-auto w-24 h-1 bg-emerald-500 rounded fade-in-up delay-200"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 fade-in-up delay-300">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Riesgos {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRisks.map((risk, index) => (
            <div key={`${activeCategory}-${index}`} className={`bg-slate-800/50 rounded-lg shadow-xl border border-slate-700 overflow-hidden flex flex-col transition-all duration-500 animate-fade-in`}>
              <div className="p-6 flex-grow">
                <h3 className="text-lg font-bold text-emerald-400 mb-2">{risk.specificRisk}</h3>
                <div className="space-y-3 text-slate-300">
                    <p><strong className="font-semibold text-slate-100">Proceso Afectado:</strong> {risk.affectedProcess}</p>
                    <p><strong className="font-semibold text-slate-100">Consecuencia Potencial:</strong> {risk.potentialConsequence}</p>
                </div>
              </div>
              <div className={`px-6 py-2 text-sm font-bold text-center ${severityStyles[risk.severity] || 'bg-gray-500 text-white'}`}>
                Nivel de Gravedad: {risk.severity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RisksSection;
