import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { Target, Zap, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  // Exact data copy
  const title = 'CERO EXCUSAS. PURO RENDIMIENTO.';
  const body =
    'La gravedad nunca cierra. Mi metodología se basa en la tensión mecánica y el control absoluto de tu peso corporal. No necesitas máquinas costosas, solo biomecánica perfecta, consistencia y un suelo donde entrenar. Así se construye músculo real.';

  useGSAP(
    () => {
      // ScrollTrigger animation for text & image
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(imageWrapperRef.current, {
        scale: 0.94,
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          '.philo-title',
          {
            y: 50,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.7'
        )
        .from(
          '.philo-body',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from(
          '.philo-pill',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.4'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="filosofia"
      ref={containerRef}
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-6 sm:px-10 md:px-16 py-16 md:py-24 items-center bg-[#0C0C0C] relative border-t border-neutral-900 overflow-hidden"
    >
      {/* Left Column: Image with brutalist badge */}
      <div ref={imageWrapperRef} className="relative w-full aspect-[4/5] md:aspect-[3/4] max-h-[550px] overflow-hidden rounded-none group">
        <Image
          alt="Confitness Calisthenics Philosophy"
          src="https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=1200&auto=format&fit=crop"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Accent border frame */}
        <div className="absolute inset-0 border border-neutral-800 pointer-events-none" />
        
        {/* Brutalist badge overlay */}
        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto bg-[#0C0C0C]/90 backdrop-blur-md border border-neutral-800 p-3 sm:p-4 text-xs font-mono uppercase tracking-wider text-neutral-300 max-w-full">
          <div className="text-[#CCFF00] font-bold mb-1">METODOLOGÍA // 100% PESO CORPORAL</div>
          <div className="text-neutral-400">Biomecánica &middot; Tensión Continua</div>
        </div>
      </div>

      {/* Right Column: Title, Body, and Core Pillars */}
      <div ref={textContainerRef} className="flex flex-col justify-center max-w-xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#CCFF00]" />
          <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono">
            02 // FILOSOFÍA DE TRABAJO
          </span>
        </div>

        <h2 className="philo-title text-xl sm:text-3xl lg:text-[2.75rem] xl:text-5xl font-heading mb-6 text-[#FAFAFA] leading-[1.05] tracking-tight sm:tracking-tighter">
          {title}
        </h2>

        <p className="philo-body text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mb-8 text-pretty">
          {body}
        </p>

        {/* Tactical Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-neutral-800/80 w-full">
          <div className="philo-pill p-3 sm:p-3.5 bg-[#1A1A1A] border border-neutral-800/60 overflow-hidden">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCFF00] mb-2 shrink-0" />
            <div className="font-mono text-xs font-bold text-[#FAFAFA] mb-1 tracking-wider uppercase">TENSIÓN</div>
            <div className="text-[11px] text-neutral-400 font-sans leading-tight">Apalancamiento biomecánico</div>
          </div>
          
          <div className="philo-pill p-3 sm:p-3.5 bg-[#1A1A1A] border border-neutral-800/60 overflow-hidden">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCFF00] mb-2 shrink-0" />
            <div className="font-mono text-xs font-bold text-[#FAFAFA] mb-1 tracking-wider uppercase">ADAPTABILIDAD</div>
            <div className="text-[11px] text-neutral-400 font-sans leading-tight">Entrena en cualquier lugar</div>
          </div>

          <div className="philo-pill p-3 sm:p-3.5 bg-[#1A1A1A] border border-neutral-800/60 overflow-hidden">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCFF00] mb-2 shrink-0" />
            <div className="font-mono text-xs font-bold text-[#FAFAFA] mb-1 tracking-wider uppercase">CONTROL</div>
            <div className="text-[11px] text-neutral-400 font-sans leading-tight">Sin lesiones articulares</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
