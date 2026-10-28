import React from 'react';
import { Target, Cpu, TrendingUp, CheckCircle } from 'lucide-react';

export const MethodologySteps: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Target,
      phase: 'FASE 01',
      title: 'DIAGNÓSTICO BIOMECÁNICO',
      description:
        'Evaluamos tu fuerza base, movilidad y patrones de movimiento mediante una plantilla de control postural para asignar tu punto de partida exacto.',
      highlight: 'CERO ADIVINANZAS',
    },
    {
      step: '02',
      icon: Cpu,
      phase: 'FASE 02',
      title: 'SOBRECARGA CORPORAL',
      description:
        'Aplicamos técnicas avanzadas de Tiempo Bajo Tensión (TUT), ángulos de apalancamiento y pausas isométricas para forzar hipertrofia muscular sin pesas.',
      highlight: 'TENSIÓN CONTINUA',
    },
    {
      step: '03',
      icon: TrendingUp,
      phase: 'FASE 03',
      title: 'PROGRESIÓN & RESULTADOS',
      description:
        'Ajustamos semanalmente el volumen y la dificultad de los ejercicios para garantizar sobrecarga progresiva constante sin estancamientos.',
      highlight: 'RESULTADOS MEDIBLES',
    },
  ];

  return (
    <section className="bg-[#090909] text-[#FAFAFA] border-t border-neutral-900 px-6 sm:px-10 md:px-16 py-20 md:py-28 relative overflow-hidden">
      {/* Background Linear Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 bg-[#CCFF00]" />
              <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono font-bold">
                PROCESO DE ENTRENAMIENTO // PIPELINE
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-[2.5rem] lg:text-[2.75rem] xl:text-5xl font-heading text-[#FAFAFA] uppercase leading-tight tracking-tight sm:tracking-tighter max-w-3xl">
              LA RUTA DE TRANSFORMACIÓN EN 3 FASES
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest bg-[#141414] border border-neutral-800 px-4 py-2">
            <span>SISTEMA CONTINUO</span>
            <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
          </div>
        </div>

        {/* Timeline Pipeline Track Container */}
        <div className="relative">
          {/* Steps Grid Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex flex-col relative group">
                  {/* Step Timeline Node Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-[#090909] border-2 border-[#CCFF00] text-[#CCFF00] flex items-center justify-center font-heading font-black text-xl shadow-[0_0_25px_rgba(204,255,0,0.25)] shrink-0 z-10">
                      {item.step}
                    </div>

                    <span className="px-3 py-1 bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] text-[10px] font-mono uppercase tracking-widest font-bold">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Phase Content Box */}
                  <div className="bg-[#111111] border border-neutral-800 p-6 sm:p-7 flex-1 flex flex-col justify-between hover:border-[#CCFF00]/60 transition-all duration-300 relative">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-4 h-4 text-[#CCFF00]" />
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                          {item.phase} // 03
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg md:text-xl font-heading text-[#FAFAFA] uppercase leading-tight tracking-tight mb-4 group-hover:text-[#CCFF00] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySteps;
