import React, { useState } from 'react';
import { MONITORING_PLAN, EXPECTED_BENEFITS } from '../constants';
import { ChevronDownIcon } from './icons/Icons';

const MonitoringBenefitsSection: React.FC = () => {
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);

  const handleBenefitToggle = (index: number) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  return (
    <section className="h-full w-full py-20 bg-slate-900 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="fade-in-up delay-100">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-extrabold text-white">Seguimiento del Plan</h2>
              <p className="mt-3 text-lg text-slate-400">Garantizando la efectividad continua de nuestras medidas de seguridad.</p>
              <div className="mt-4 w-20 h-1 bg-emerald-500 rounded"></div>
            </div>
            <div className="space-y-8">
              {MONITORING_PLAN.map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in-up delay-300">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-extrabold text-white">Beneficios Esperados</h2>
              <p className="mt-3 text-lg text-slate-400">Un entorno seguro es un entorno productivo y responsable.</p>
              <div className="mt-4 w-20 h-1 bg-emerald-500 rounded"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {EXPECTED_BENEFITS.map((item, index) => {
                const isExpanded = expandedBenefit === index;
                return (
                  <div key={index} className="bg-slate-800/50 rounded-lg shadow-lg border border-slate-700 transition-all duration-300 hover:border-emerald-500">
                    <button
                      className="w-full flex justify-between items-center p-6 text-left"
                      onClick={() => handleBenefitToggle(index)}
                      aria-expanded={isExpanded}
                    >
                      <h3 className="text-xl font-bold text-emerald-400">{item.title}</h3>
                      <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDownIcon />
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isExpanded ? 'max-h-40' : 'max-h-0'}`}>
                      <div className="px-6 pb-6">
                         <p className="text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MonitoringBenefitsSection;