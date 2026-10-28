import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import Image from 'next/image';

interface TestimonialItem {
  name: string;
  role: string;
  image: string;
  stat: string;
  quote: string;
  rating: number;
}

const testimonialsData: TestimonialItem[] = [
  {
    name: 'Carlos Mendoza',
    role: 'Alumno Nivel II // 8 Meses',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    stat: '+6.2 kg Músculo Magro',
    quote:
      'Pensaba que sin pesas rusas o barras de gimnasio no crecería. El método de tensión biomecánica de Confitness me cambió el cuerpo entrenando en el salón de mi casa.',
    rating: 5,
  },
  {
    name: 'Javier Peralta',
    role: 'Alumno Nivel III // 12 Meses',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    stat: 'De 0 a 14 Dominadas Estrictas',
    quote:
      'Tenía dolores constantes en los hombros por levantar pesas sin técnica. Al pasar al control corporal y calistenia estructurada, los dolores desaparecieron y gané fuerza de verdad.',
    rating: 5,
  },
  {
    name: 'Marcos Rivas',
    role: 'Alumno Nivel I // 4 Meses',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    stat: '-8 kg Grasa Corporativa',
    quote:
      'La hoja de ruta es súper clara. No pierdes tiempo adivinando qué rutina hacer hoy. Cada semana ves progresiones reales en el espejo y en tu energía.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="bg-[#0C0C0C] text-[#FAFAFA] border-t border-neutral-900 px-6 sm:px-10 md:px-16 py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-18 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 bg-[#CCFF00]" />
              <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono">
                PRUEBA SOCIAL // CASOS DE ÉXITO
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-[2.5rem] lg:text-[2.75rem] xl:text-5xl font-heading text-[#FAFAFA] uppercase leading-tight tracking-tight sm:tracking-tighter max-w-2xl">
              RESULTADOS REALES EN ATLETAS REALES
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-[#141414] border border-neutral-800 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-neutral-300 self-start md:self-auto">
            <Award className="w-4 h-4 text-[#CCFF00]" />
            <span>RESULTADOS VERIFICADOS</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-neutral-800/80 p-6 sm:p-8 flex flex-col justify-between hover:border-[#CCFF00]/50 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-neutral-800 group-hover:text-[#CCFF00]/20 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00]" />
                  ))}
                </div>

                {/* Progress Metric Badge */}
                <div className="inline-block px-3 py-1 bg-[#1A1A1A] border border-neutral-800 text-xs font-mono font-bold text-[#CCFF00] uppercase tracking-wider mb-6">
                  {item.stat}
                </div>

                {/* Quote Body */}
                <p className="text-sm text-neutral-300 leading-relaxed font-normal mb-8 text-pretty">
                  "{item.quote}"
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/60 mt-auto">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-700 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover grayscale contrast-125"
                  />
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-white uppercase tracking-tight">
                    {item.name}
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
