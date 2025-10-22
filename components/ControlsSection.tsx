import React, { useState } from 'react';
import { CONTROL_MEASURES } from '../constants';
import { BeakerIcon, FireIcon, GearIcon, HardHatIcon, IconWrapper, UserCircleIcon, ChevronDownIcon } from './icons/Icons';

const iconMap: { [key: string]: React.ComponentType } = {
  GearIcon,
  FireIcon,
  BeakerIcon,
  UserCircleIcon,
  HardHatIcon
};

const AccordionItem: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}> = ({ title, icon, children, isOpen, onClick }) => (
  <div className="border border-slate-700 rounded-lg mb-2 bg-slate-800/50 shadow-lg">
    <button
      className="w-full flex justify-between items-center p-5 text-left font-semibold text-white hover:bg-slate-700/50 transition-colors rounded-t-lg"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="flex items-center">
        <IconWrapper className="h-6 w-6 mr-3 text-emerald-400">{icon}</IconWrapper>
        {title}
      </span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDownIcon />
      </span>
    </button>
    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
            <div className="p-5 text-slate-300">{children}</div>
        </div>
    </div>
  </div>
);

const ControlsSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="h-full w-full py-20 bg-slate-950 flex items-center">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white fade-in-up">Medidas de Prevención y Control</h2>
                    <p className="mt-4 text-lg text-slate-400 fade-in-up delay-100">Acciones jerarquizadas para mitigar los riesgos identificados.</p>
                    <div className="mt-4 mx-auto w-24 h-1 bg-emerald-500 rounded fade-in-up delay-200"></div>
                </div>
                <div className="max-w-4xl mx-auto">
                    {Object.entries(CONTROL_MEASURES).map(([category, data], index) => {
                        const Icon = iconMap[data.icon];
                        const delayClass = `delay-${index * 100 + 300}`;
                        return (
                            <div className={`fade-in-up ${delayClass}`} key={category}>
                                <AccordionItem
                                    title={`Control de Riesgos ${category}`}
                                    icon={Icon && <Icon />}
                                    isOpen={openIndex === index}
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className="space-y-6">
                                        {data.measures.map((measure, measureIndex) => (
                                            <div key={measureIndex} className="p-4 border-l-4 border-emerald-500 bg-slate-900/50 rounded-r-lg">
                                                <h4 className="font-bold text-emerald-400 text-lg mb-2">{measure.title}</h4>
                                                <p className="mb-1"><strong className="text-slate-100">Acción:</strong> {measure.action}</p>
                                                <p><strong className="text-slate-100">Justificación:</strong> {measure.justification}</p>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionItem>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ControlsSection;
