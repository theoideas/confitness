import React from 'react';
import { Users, Dumbbell, ShieldCheck, Star } from 'lucide-react';

export const Stats: React.FC = () => {
  const statsData = [
    {
      icon: Users,
      value: '+1,200',
      label: 'ALUMNOS TRANSFORMADOS',
      sublabel: 'En más de 15 países',
    },
    {
      icon: Dumbbell,
      value: '100%',
      label: 'PESO CORPORAL',
      sublabel: 'Sin equipamiento ni gimnasio',
    },
    {
      icon: ShieldCheck,
      value: '0',
      label: 'LESIONES ARTICULARES',
      sublabel: 'Biomecánica y tensión segura',
    },
    {
      icon: Star,
      value: '4.9 / 5',
      label: 'VALORACIÓN MEDIA',
      sublabel: 'Basado en +450 reseñas',
    },
  ];

  return (
    <section className="bg-[#141414] border-y border-neutral-900 py-12 px-6 sm:px-10 md:px-16 relative overflow-hidden">
      {/* Background Accent Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#CCFF00_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
        {statsData.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-start p-3 sm:p-4 border-l-2 border-[#CCFF00]/40 pl-3.5 sm:pl-5 bg-gradient-to-r from-white/[0.02] to-transparent overflow-hidden"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 text-[#CCFF00]">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400">
                  MÉTRICA 0{idx + 1}
                </span>
              </div>

              <div className="font-heading text-2xl sm:text-4xl md:text-5xl font-black text-[#FAFAFA] tracking-tighter leading-none mb-2">
                {stat.value}
              </div>

              <div className="font-mono text-[10px] sm:text-xs md:text-sm text-[#FAFAFA] font-bold uppercase tracking-tight leading-snug mb-1">
                {stat.label}
              </div>

              <div className="text-[10px] sm:text-[11px] font-sans text-neutral-400 leading-tight">
                {stat.sublabel}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
