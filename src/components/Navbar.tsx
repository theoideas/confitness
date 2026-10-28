import React from 'react';
import { MagneticButton } from './MagneticButton';

export const Navbar: React.FC = () => {
  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between pointer-events-none mix-blend-difference"
    >
      {/* Brand Logo */}
      <a
        href="#"
        className="pointer-events-auto group flex items-center gap-2 text-white no-underline shrink-0"
      >
        <span className="font-heading text-xl md:text-2xl tracking-tighter text-white">
          CONFITNESS
        </span>
        <span className="w-2 h-2 rounded-full bg-[#CCFF00] inline-block group-hover:scale-150 transition-transform duration-300" />
      </a>

      {/* Navigation Links & Status */}
      <div className="pointer-events-auto flex items-center gap-4 md:gap-8">
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-neutral-300">
          <a
            href="#filosofia"
            className="hover:text-[#CCFF00] transition-colors duration-200"
          >
            Filosofía
          </a>
          <a
            href="#programs-section"
            className="hover:text-[#CCFF00] transition-colors duration-200"
          >
            Programas
          </a>
          <a
            href="#testimonios"
            className="hover:text-[#CCFF00] transition-colors duration-200"
          >
            Resultados
          </a>
          <a
            href="#faq"
            className="hover:text-[#CCFF00] transition-colors duration-200"
          >
            FAQ
          </a>
          <a
            href="#lead-capture"
            className="hover:text-[#CCFF00] transition-colors duration-200"
          >
            Contacto
          </a>
        </nav>

        {/* CTA Magnetic Action */}
        <MagneticButton
          asAnchor
          href="#lead-capture"
          strength={0.25}
          className="pointer-events-auto px-4 py-2 md:px-5 md:py-2.5 bg-white text-black font-heading text-xs md:text-sm uppercase tracking-wider hover:bg-[#CCFF00] hover:text-black transition-colors shrink-0"
        >
          Aplicar
        </MagneticButton>
      </div>
    </header>
  );
};

export default Navbar;
