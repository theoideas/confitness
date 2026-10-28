import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const forYouPoints = [
    'Quieres construir masa muscular real y fuerza funcional desde tu hogar.',
    'Valoras la biomecánica, la técnica limpia y el control de tu propio cuerpo.',
    'Estás dispuesto a entrenar con constancia siguiendo una progresión científica.',
    'Deseas independizarte de las cuotas de gimnasio y las máquinas voluminosas.',
    'Buscas resultados duraderos sin poner en riesgo la salud de tus articulaciones.',
  ];

  const notForYouPoints = [
    'Buscas "pastillas mágicas" o transformaciones de 3 días sin sudar.',
    'Prefieres poner excusas antes que dedicar 45 minutos a tu cuerpo.',
    'No estás dispuesto a cuidar tu nutrición ni tu descanso básico.',
    'Esperas obtener hipertrofia sin aplicar tensión mecánica ni esfuerzo.',
  ];

  return (
    <section className="bg-[#080808] text-[#FAFAFA] border-t border-neutral-900 px-6 sm:px-10 md:px-16 py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-neutral-800 text-xs font-mono uppercase tracking-widest text-[#CCFF00] mb-4 font-bold">
            <span>FILTRO DE AUDIENCIA // ALTO RENDIMIENTO</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-[2.5rem] lg:text-[2.75rem] xl:text-5xl font-heading text-[#FAFAFA] uppercase leading-tight tracking-tight sm:tracking-tighter mb-4">
            ¿ES EL MÉTODO CONFITNESS PARA TI?
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal">
            Buscamos atletas comprometidos. Revisa los criterios antes de solicitar tu evaluación.
          </p>
        </div>

        {/* 3-Column Grid on Desktop: YES, NO, and Visual Athlete Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* YES Column */}
          <div className="bg-[#141414] border-2 border-[#CCFF00]/60 p-6 sm:p-8 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
                <CheckCircle2 className="w-6 h-6 text-[#CCFF00] shrink-0" />
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                  ESTO ES PARA TI SI...
                </h3>
              </div>

              <ul className="space-y-4">
                {forYouPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#CCFF00] mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* NO Column */}
          <div className="bg-[#141414] border border-neutral-800/80 p-6 sm:p-8 relative flex flex-col justify-between opacity-90">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-neutral-300">
                  ESTO NO ES PARA TI SI...
                </h3>
              </div>

              <ul className="space-y-4">
                {notForYouPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-400">
                    <span className="w-2 h-2 rounded-full bg-red-500/60 mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Athlete Visual Card */}
          <div className="relative min-h-[320px] bg-[#141414] border border-neutral-800 overflow-hidden group">
            <img
              src="/target_audience_athlete.jpg"
              alt="Atleta Confitness"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0C0C0C]/85 backdrop-blur-md border border-neutral-800">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCFF00] block mb-1">
                DISCIPLINA // SOBERANÍA
              </span>
              <p className="text-xs text-neutral-300 font-sans font-medium">
                Construye fuerza real y control corporal total sin depender de máquinas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
