import React, { useState } from 'react';
import { MagneticButton } from './MagneticButton';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const LeadCapture: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('principiante');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Title and button text from DATA specifications
  const title = 'EMPIEZA TU TRANSFORMACIÓN.';
  const buttonText = 'ENVIAR SOLICITUD';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !email.trim()) {
      setErrorMessage('Por favor completa todos los campos requeridos.');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Connect to Supabase or send webhook to n8n/ManyChat here
      
      // Simulate real-time submission response
      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSuccess(true);
      setName('');
      setEmail('');
      setExperienceLevel('principiante');
    } catch (err) {
      setErrorMessage('Ocurrió un error al enviar tu solicitud. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="lead-capture"
      className="min-h-[80vh] flex flex-col items-center justify-center bg-[#CCFF00] text-[#0C0C0C] p-6 sm:p-10 md:p-16 text-center relative overflow-hidden"
    >
      {/* Background brutalist typography watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10 overflow-hidden"
        aria-hidden="true"
      >
        <span className="text-[12vw] font-heading font-black tracking-tighter leading-none text-[#0C0C0C] max-w-full">
          CONFITNESS
        </span>
      </div>

      <div className="relative z-10 max-w-xl w-full flex flex-col items-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0C0C0C] text-[#FAFAFA] text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-5 font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
          <span>EVALUACIÓN INICIAL GRATUITA</span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-3xl md:text-[2.2rem] lg:text-4xl font-heading font-black tracking-tight sm:tracking-tighter uppercase leading-tight mb-4 text-[#0C0C0C] text-center max-w-full">
          {title}
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-medium text-neutral-800 max-w-md mb-8 leading-snug">
          Recibe tu plan biomecánico personalizado y la hoja de ruta para ganar fuerza y músculo desde casa.
        </p>

        {isSuccess ? (
          <div className="w-full bg-[#0C0C0C] text-[#FAFAFA] p-6 sm:p-8 md:p-10 border-2 border-black flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
            <CheckCircle2 className="w-12 h-12 text-[#CCFF00] mb-4" />
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2 uppercase tracking-tight">
              SOLICITUD RECIBIDA
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm max-w-md mb-6">
              Hemos registrado tus datos. Te contactaremos en menos de 24 horas para agendar tu diagnóstico y estructurar tu plan.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-5 py-2 bg-[#CCFF00] text-[#0C0C0C] font-heading text-xs uppercase tracking-wider font-bold hover:bg-white transition-colors"
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4 text-left"
          >
            {errorMessage && (
              <div className="p-3 bg-red-600 text-white text-xs font-mono uppercase tracking-wider text-center font-bold">
                {errorMessage}
              </div>
            )}

            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lead-name"
                className="text-xs font-mono uppercase tracking-wider text-[#0C0C0C] font-bold"
              >
                Nombre Completo *
              </label>
              <input
                id="lead-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Alex Rivera"
                className="w-full px-4 py-3 bg-white/90 focus:bg-white text-[#0C0C0C] placeholder-neutral-500 font-sans text-sm md:text-base border-2 border-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] transition-all"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lead-email"
                className="text-xs font-mono uppercase tracking-wider text-[#0C0C0C] font-bold"
              >
                Correo Electrónico *
              </label>
              <input
                id="lead-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-white/90 focus:bg-white text-[#0C0C0C] placeholder-neutral-500 font-sans text-sm md:text-base border-2 border-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] transition-all"
              />
            </div>

            {/* Experience Level Select */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lead-experience"
                className="text-xs font-mono uppercase tracking-wider text-[#0C0C0C] font-bold"
              >
                Nivel de Experiencia *
              </label>
              <select
                id="lead-experience"
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="w-full max-w-full px-4 py-3 bg-white/90 focus:bg-white text-[#0C0C0C] font-sans text-sm md:text-base border-2 border-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] transition-all cursor-pointer truncate"
              >
                <option value="principiante">
                  Principiante (Menos de 6 meses de experiencia)
                </option>
                <option value="intermedio">
                  Intermedio (6 meses a 2 años de experiencia)
                </option>
                <option value="avanzado">
                  Avanzado (+2 años / Buscando estáticos y sobrecarga)
                </option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="mt-4 flex justify-center">
              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                strength={0.3}
                className="w-full py-5 px-8 bg-[#0C0C0C] text-[#FAFAFA] font-heading font-black text-base uppercase tracking-widest hover:bg-neutral-900 shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-75 cursor-pointer"
              >
                <span>{isSubmitting ? 'PROCESANDO...' : buttonText}</span>
                <ArrowRight className="w-5 h-5 text-[#CCFF00]" />
              </MagneticButton>
            </div>

            <p className="text-[11px] font-mono text-center text-neutral-800 uppercase tracking-widest mt-2">
              Privacidad garantizada &middot; Sin spam &middot; Respuesta en 24h
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default LeadCapture;
