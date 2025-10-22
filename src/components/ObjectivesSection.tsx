import React from 'react';
import { OBJECTIVES } from '../constants';
import { TargetIcon, ShieldCheckIcon, BookOpenIcon, UsersIcon, IconWrapper } from './icons/Icons';

const iconMap: { [key: string]: React.ComponentType } = {
  TargetIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  UsersIcon,
};

const ObjectivesSection: React.FC = () => {
  return (
    <section className="h-full w-full py-20 bg-slate-950 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white fade-in-up">Objetivos Estratégicos del Plan</h2>
          <p className="mt-4 text-lg text-slate-400 fade-in-up delay-100">Cuatro pilares para un entorno de trabajo seguro y sostenible.</p>
          <div className="mt-4 mx-auto w-24 h-1 bg-emerald-500 rounded fade-in-up delay-200"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OBJECTIVES.map((objective, index) => {
            const Icon = iconMap[objective.icon];
            const delayClass = `delay-${(index + 1) * 100 + 200}`;
            return (
              <div key={index} className={`bg-slate-800/50 p-8 rounded-lg shadow-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-2 fade-in-up ${delayClass}`}>
                <div className="flex justify-center items-center mb-6 h-16 w-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto">
                    <IconWrapper className="h-8 w-8">{Icon && <Icon />}</IconWrapper>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">{objective.title}</h3>
                <p className="text-slate-400 text-center">{objective.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
