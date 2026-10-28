import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { MagneticButton } from './MagneticButton';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Exact data copy
  const titleWords = ['TU', 'CUERPO', 'ES', 'LA', 'ÚNICA', 'MÁQUINA', 'QUE', 'NECESITAS.'];
  const subtitle = 'Entrenamiento de fuerza y calistenia desde casa. Construye masa muscular sin pisar un gimnasio tradicional.';
  const ctaText = 'EMPEZAR AHORA';

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // [EFFECT-01] Loader Curtain Animation
      tl.to('#loader', {
        yPercent: -100,
        duration: 1,
        ease: 'expo.inOut',
        delay: 0.2,
      })
        // Reveal Hero Title words staggered from y: 100
        .from(
          '.hero-word',
          {
            y: 100,
            opacity: 0,
            duration: 1.1,
            stagger: 0.07,
            ease: 'power4.out',
          },
          '-=0.3'
        )
        // Reveal Subtitle and CTA
        .from(
          '.hero-sub-element',
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
          },
          '-=0.7'
        )
        .from(
          '.hero-decor',
          {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
          },
          '-=0.5'
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative">
      {/* EFFECT-01: Black Curtain Loader covering viewport (z-index 99) */}
      <div
        id="loader"
        className="fixed inset-0 z-[99] bg-[#0C0C0C] flex flex-col items-center justify-center p-8 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="font-heading text-4xl md:text-6xl text-white tracking-tighter">
            CONFITNESS
          </span>
          <div className="w-48 h-[2px] bg-neutral-800 overflow-hidden relative">
            <div className="w-full h-full bg-[#CCFF00] animate-[pulse_1s_ease-in-out_infinite]" />
          </div>
          <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono">
            CALISTENIA // ALTO RENDIMIENTO
          </span>
        </div>
      </div>

      {/* SECTION-01: Hero Section */}
      <section
        id="hero"
        className="min-h-screen relative flex flex-col justify-between px-6 sm:px-10 md:px-16 pt-24 md:pt-28 pb-8 overflow-hidden bg-[#0C0C0C]"
      >
        {/* Background Image using Next.js <Image> */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Hero"
            className="object-cover opacity-40 select-none grayscale contrast-125"
            fill
            priority
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop"
          />
          {/* Subtle brutalist grain & gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(#CCFF00_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl my-auto w-full">
          {/* Decorative tag */}
          <div className="hero-decor flex items-center gap-3 mb-5">
            <span className="inline-block w-2.5 h-2.5 bg-[#CCFF00]" />
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-400 font-mono">
              SISTEMA DE HIPERTROFIA Y FUERZA CORPORAL
            </span>
          </div>

          {/* Title with word-by-word overflow-hidden spans for GSAP reveal */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] leading-[0.95] tracking-tighter text-[#FAFAFA] uppercase font-black mb-6 flex flex-wrap gap-x-[0.25em] gap-y-1 max-w-full break-words">
            {titleWords.map((word, index) => (
              <span key={index} className="inline-block overflow-hidden py-1 max-w-full">
                <span
                  className={`hero-word inline-block ${
                    word === 'MÁQUINA' ? 'text-[#CCFF00]' : ''
                  }`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="hero-sub-element text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed mb-8 text-pretty">
            {subtitle}
          </p>

          {/* CTA with MagneticButton */}
          <div className="hero-sub-element flex flex-wrap items-center gap-4 sm:gap-6">
            <MagneticButton
              asAnchor
              href="#lead-capture"
              strength={0.4}
              className="px-6 py-3.5 md:px-8 md:py-4 bg-[#CCFF00] text-[#0C0C0C] font-heading font-extrabold text-xs sm:text-sm md:text-base tracking-wider hover:bg-white hover:text-black shadow-[0_0_35px_rgba(204,255,0,0.3)] transition-all duration-300"
            >
              {ctaText}
            </MagneticButton>

            <a
              href="#filosofia"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-neutral-400 hover:text-[#CCFF00] transition-colors py-2"
            >
              <span>DESCUBRIR MÉTODO</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>

        {/* Bottom Coordinates / Info Bar */}
        <div className="hero-decor relative z-10 mt-10 w-full flex items-center justify-between border-t border-neutral-800/80 pt-4 text-[11px] font-mono uppercase tracking-widest text-neutral-500">
          <div className="flex items-center gap-4">
            <span className="text-[#CCFF00]">01 // ORIGEN</span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline">SIN EQUIPAMIENTO. RESULTADOS REALES.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
            <span className="text-neutral-400">FASE ACTIVA</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
