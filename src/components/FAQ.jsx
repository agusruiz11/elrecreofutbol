
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿A partir de qué edad pueden inscribirse?',
      answer: 'Aceptamos niños desde los 4 años en nuestra categoría Pre-Infantil. Tenemos programas específicos para cada rango de edad hasta los 16 años, adaptados al nivel de desarrollo de cada grupo.'
    },
    {
      question: '¿Qué documentación necesito para la inscripción?',
      answer: 'Para inscribir a tu hijo necesitás: DNI del niño y del padre/madre/tutor, certificado médico de aptitud física, 2 fotos carnet, y completar la ficha de inscripción que te brindamos. El seguro deportivo se gestiona con nosotros.'
    },
    {
      question: '¿Hay clases de prueba gratuitas?',
      answer: 'Sí, ofrecemos una clase de prueba gratuita para que tu hijo conozca nuestras instalaciones, metodología de trabajo y el grupo. Podés agendar tu clase de prueba contactándonos por WhatsApp o email.'
    },
    {
      question: '¿Qué pasa si mi hijo no puede asistir a un entrenamiento?',
      answer: 'Entendemos que pueden surgir imprevistos. Si avisás con anticipación, coordinamos una clase de recuperación en otro horario de la misma semana, según disponibilidad de cupos.'
    },
    {
      question: '¿Incluye el equipamiento deportivo?',
      answer: 'Depende del plan elegido. El Plan Básico incluye equipamiento básico para entrenar, el Plan Completo incluye un kit deportivo completo (camiseta, short, medias), y el Plan Elite incluye un kit premium con ropa de entrenamiento y partido.'
    },
    {
      question: '¿Hay descuentos por hermanos?',
      answer: 'Sí, ofrecemos un 15% de descuento en la segunda inscripción y 20% desde la tercera en adelante. También tenemos promociones especiales durante el año que podés consultar contactándonos.'
    },
    {
      question: '¿Participan en torneos y competencias?',
      answer: 'Sí, organizamos torneos internos mensuales y participamos en competencias regionales y nacionales. Los jugadores de Plan Completo y Elite tienen participación garantizada en estos eventos.'
    },
    {
      question: '¿Cuál es la metodología de entrenamiento?',
      answer: 'Utilizamos una metodología moderna basada en el desarrollo integral del jugador, combinando trabajo técnico individual, táctico grupal, preparación física y valores deportivos. Cada categoría tiene objetivos específicos adaptados a su edad.'
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respondemos las dudas más comunes sobre nuestra academia
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#DBAA0C] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
