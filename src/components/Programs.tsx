import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MagneticButton } from './MagneticButton';
import { ArrowUpRight, Flame, Layers, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProgramItem {
  number: string;
  title: string;
  description: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  image: string;
  specs: string[];
}

const programsData: ProgramItem[] = [
  {
    number: '01',
    title: 'FUNDAMENTOS',
    description:
      'Domina los patrones básicos en casa. Flexiones, dominadas y control postural.',
    tag: 'NIVEL I // BASE',
    icon: Layers,
    accentColor: '#FAFAFA',
    image: '/program_fundamentos.jpg',
    specs: ['Core & Estabilidad', 'Flexiones Progresivas', 'Dominadas & Remos'],
  },
  {
    number: '02',
    title: 'HIPERTROFIA',
    description:
      'Técnicas de tiempo bajo tensión (TUT) y apalancamiento para forzar el crecimiento muscular.',
    tag: 'NIVEL II // MASA',
    icon: Flame,
    accentColor: '#CCFF00',
    image: '/program_hipertrofia.jpg',
    specs: ['Sobrecarga Mecánica', 'Drop-sets Corporales', 'Aislamiento Relativo'],
  },
  {
    number: '03',
    title: 'ESTÁTICOS',
    description:
      'Progresiones avanzadas: Front Lever, Planche y Muscle-Ups.',
    tag: 'NIVEL III // ELITE',
    icon: Activity,
    accentColor: '#CCFF00',
    image: '/program_estaticos.jpg',
    specs: ['Fuerza Tendinosa', 'Palancas de 1ª Clase', 'Control Neuro-Muscular'],
  },
];

export const Programs: React.FC = () => {
  return (
    <section
      id="programs-section"
      className="relative bg-[#0C0C0C] text-[#FAFAFA] border-t border-neutral-900 px-6 sm:px-10 md:px-16 py-20 md:py-28 overflow-hidden"
    >
      {/* Section Header Tag & Title */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 bg-[#CCFF00]" />
          <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono">
            03 // PROGRAMAS DE ALTO RENDIMIENTO
          </span>
        </div>
        <h2 className="text-xl sm:text-3xl md:text-[2.5rem] lg:text-[2.75rem] xl:text-5xl font-heading text-[#FAFAFA] uppercase leading-tight tracking-tight sm:tracking-tighter max-w-3xl">
          SISTEMAS DE ENTRENAMIENTO ESPECIALIZADO
        </h2>
      </div>

      {/* Grid of 3 Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {programsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="program-card relative bg-[#141414] border border-neutral-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-[#CCFF00]/50 transition-all duration-300 group overflow-hidden"
            >
              {/* Card Watermark Number */}
              <span
                className="absolute top-4 right-6 text-6xl lg:text-7xl font-heading font-black opacity-10 text-stroke-subtle select-none pointer-events-none z-10"
                aria-hidden="true"
              >
                {item.number}
              </span>

              {/* Card Content Top */}
              <div>
                {/* Header Tag & Module Index */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800/60 relative z-20">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#CCFF00]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#CCFF00]">
                      {item.tag}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-neutral-500">
                    MÓDULO {item.number}
                  </span>
                </div>

                {/* High-Impact Program Image Preview */}
                <div className="relative w-full h-48 mb-5 overflow-hidden border border-neutral-800 group-hover:border-[#CCFF00]/40 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-heading text-[#FAFAFA] uppercase leading-tight tracking-tight mb-3 group-hover:text-[#CCFF00] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Technical Specifications List */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.specs.map((spec, specIdx) => (
                    <span
                      key={specIdx}
                      className="px-3 py-1.5 bg-[#1A1A1A] border border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card CTA Action at bottom */}
              <div className="pt-4 border-t border-neutral-800/60 mt-auto">
                <MagneticButton
                  asAnchor
                  href="#lead-capture"
                  strength={0.25}
                  className="w-full justify-between px-5 py-3 bg-[#1A1A1A] border border-neutral-700 text-[#FAFAFA] text-xs font-heading uppercase tracking-wider hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-[#0C0C0C] transition-all duration-300"
                >
                  <span>SELECCIONAR PROGRAMA</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </MagneticButton>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
