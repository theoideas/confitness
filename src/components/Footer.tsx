import React from 'react';
import { ArrowUp, Instagram, Youtube, Mail, Dumbbell, Shield, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] text-[#FAFAFA] border-t border-neutral-900 pt-16 pb-12 px-6 sm:px-10 md:px-16 relative overflow-hidden">
      {/* Structural Accent Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-16 border-b border-neutral-900">
          
          {/* Brand Info & Tagline (5 Columns) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#hero" className="inline-flex items-center gap-2 mb-4 group">
                <span className="font-heading text-2xl md:text-3xl tracking-tighter text-white font-extrabold">
                  CONFITNESS
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] inline-block group-hover:scale-150 transition-transform duration-300" />
              </a>

              <p className="text-sm text-neutral-400 max-w-sm font-normal leading-relaxed mb-6">
                Tu cuerpo es la única máquina que necesitas. Sistema de hipertrofia, fuerza y biomecánica avanzada para entrenar desde casa sin equipamiento tradicional.
              </p>

              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#CCFF00]">
                <Shield className="w-4 h-4" />
                <span>100% PESO CORPORAL &middot; ALTO RENDIMIENTO</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (3 Columns) */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
              // NAVEGACIÓN
            </h4>
            <ul className="space-y-3 text-xs font-mono uppercase tracking-wider text-neutral-300">
              <li>
                <a href="#hero" className="hover:text-[#CCFF00] transition-colors duration-200 block py-0.5">
                  01. Inicio
                </a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-[#CCFF00] transition-colors duration-200 block py-0.5">
                  02. Filosofía
                </a>
              </li>
              <li>
                <a href="#programs-section" className="hover:text-[#CCFF00] transition-colors duration-200 block py-0.5">
                  03. Programas
                </a>
              </li>
              <li>
                <a href="#lead-capture" className="hover:text-[#CCFF00] transition-colors duration-200 block py-0.5">
                  04. Evaluación Gratuita
                </a>
              </li>
            </ul>
          </div>

          {/* Programs & Community (4 Columns) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
                // COMUNIDAD & CONTACTO
              </h4>
              
              <div className="flex flex-col gap-3 mb-6">
                <a
                  href="mailto:contacto@confitness.com"
                  className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-[#CCFF00] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#CCFF00]" />
                  <span>contacto@confitness.com</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 bg-[#141414] border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#0C0C0C] hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 bg-[#141414] border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#0C0C0C] hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all duration-300"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Calisthenics Methods"
                  className="w-9 h-9 bg-[#141414] border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#0C0C0C] hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all duration-300"
                >
                  <Dumbbell className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-neutral-500">
          <div>
            &copy; {currentYear} CONFITNESS. TODOS LOS DERECHOS RESERVADOS.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#CCFF00] transition-colors cursor-pointer"
            >
              <span>VOLVER ARRIBA</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Disclaimer / Descargo de Responsabilidad */}
        <div className="mt-8 pt-6 border-t border-neutral-900/90 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-neutral-800 text-[10px] font-mono text-[#CCFF00] uppercase tracking-widest mb-3 font-bold">
            <AlertCircle className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>DESCARGO DE RESPONSABILIDAD // SITIO DEMO</span>
          </div>
          <p className="text-[11px] font-mono text-neutral-400 max-w-3xl mx-auto leading-relaxed uppercase tracking-wider">
            Este sitio web ha sido creado exclusivamente con fines demostrativos y de portafolio. Toda la información, marcas, servicios y contenidos presentados en esta página son ficticios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
