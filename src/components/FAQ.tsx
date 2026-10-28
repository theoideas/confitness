import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: '¿Realmente puedo ganar masa muscular sin pesas ni máquinas de gimnasio?',
    answer:
      'Absolutamente. El músculo responde a la tensión mecánica, no al objeto que genera esa tensión. Aplicando principios biomecánicos como Tiempo Bajo Tensión (TUT), progresiones de palancas y volumen estructurado, generas sobrecarga progresiva real utilizando únicamente tu peso corporal.',
  },
  {
    question: '¿Cuánto tiempo por sesión necesito para seguir los programas?',
    answer:
      'Los programas están optimizados para sesiones de 45 a 60 minutos, de 3 a 5 días por semana según tu nivel. No necesitas pasar horas infinitas entrenando; la clave es la intensidad y la calidad del trabajo muscular.',
  },
  {
    question: '¿Qué ocurre si nunca he practicado calistenia o soy totalmente principiante?',
    answer:
      'El programa "NIVEL I // BASE (Fundamentos)" está diseñado específicamente para principiantes. Empezamos desde patrones básicos adaptados (flexiones elevadas, remos invertidos) y avanzamos paulatinamente sin riesgo de lesión.',
  },
  {
    question: '¿Necesito algún equipo especial para empezar en mi casa?',
    answer:
      'Únicamente necesitas tu propio cuerpo y un espacio libre en el suelo. Para progresar a niveles intermedios y avanzados, recomendamos una barra de dominadas o calistenia (que puedes colocar en el marco de una puerta o parque).',
  },
  {
    question: '¿Cómo recibo mi plan después de enviar la solicitud gratuita?',
    answer:
      'Una vez completado el formulario de evaluación, nuestro equipo analiza tu nivel de experiencia y te contacta en menos de 24 horas por correo electrónico o WhatsApp para entregarte tu diagnóstico inicial y hoja de ruta personalizada.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#080808] text-[#FAFAFA] border-t border-neutral-900 px-6 sm:px-10 md:px-16 py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-neutral-800 text-xs font-mono uppercase tracking-widest text-[#CCFF00] mb-4 font-bold">
            <HelpCircle className="w-4 h-4 text-[#CCFF00]" />
            <span>RESPUESTAS CLAVE // OBJECIONES</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-[2.5rem] lg:text-[2.75rem] xl:text-5xl font-heading text-[#FAFAFA] uppercase leading-tight tracking-tight sm:tracking-tighter mb-4">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto font-normal">
            Resuelve todas tus dudas sobre el método, los programas y la metodología de entrenamiento en casa.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#141414] border border-neutral-800/80 transition-colors duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#1A1A1A] border border-neutral-700 flex items-center justify-center text-[#CCFF00] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#CCFF00] text-[#0C0C0C]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/50 pt-4 animate-in fade-in duration-300">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
