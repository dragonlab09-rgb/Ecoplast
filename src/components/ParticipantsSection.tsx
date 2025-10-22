import React from 'react';
import { UserCircleIcon, IconWrapper } from './icons/Icons';

const participants = [
    { name: 'Mora Rodriguez Bernal', role: 'Investigación y Documentación' },
    { name: 'Celeste Micaela Ramirez Agostell', role: 'Análisis de Riesgos' },
    { name: 'Ricardo Daniel Carrizo', role: 'Diseño de Controles' },
    { name: 'Gino Fera', role: 'Desarrollo de la Presentación' },
];

const ParticipantsSection: React.FC = () => {
  return (
    <section className="h-full w-full py-20 bg-slate-950 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white fade-in-up">Integrantes del Equipo</h2>
          <p className="mt-4 text-lg text-slate-400 fade-in-up delay-100">Responsables de la elaboración de este plan de seguridad.</p>
          <div className="mt-4 mx-auto w-24 h-1 bg-emerald-500 rounded fade-in-up delay-200"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {participants.map((participant, index) => {
            const delayClass = `delay-${(index + 1) * 100 + 200}`;
            return (
              <div key={index} className={`bg-slate-800/50 p-8 rounded-lg shadow-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-2 fade-in-up ${delayClass}`}>
                <div className="flex justify-center items-center mb-6 h-20 w-20 rounded-full bg-slate-700 text-slate-400 mx-auto">
                    <IconWrapper className="h-12 w-12">
                        <UserCircleIcon />
                    </IconWrapper>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{participant.name}</h3>
                <p className="text-emerald-400 text-center text-sm">{participant.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;