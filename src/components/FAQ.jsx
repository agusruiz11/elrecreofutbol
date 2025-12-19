
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
      question: "¿Qué sucede si llueve?",
      answer: "La actividad no se suspende, todas las canchas son techadas y de césped sintético."
    },
    {
      question: "¿Se tiene que abonar la totalidad de la matrícula si ingresé en los últimos meses?",
      answer: "Sí, siempre se abona la matrícula completa para habilitar el cupo, sin excepción."
    },
    {
      question: "¿Cómo hago para darme de baja de la actividad?",
      answer: "Podés darte de baja en cualquier momento avisando al coordinador general. Una vez generada la baja se libera tu cupo, por lo que no podemos asegurar lugar si querés volver. En caso de regresar, deberás abonar nuevamente la matrícula (según disponibilidad de cupos)."
    },
    {
      question: "¿Hasta cuándo son las clases?",
      answer: "Las clases se dictan desde marzo hasta mediados de diciembre de 2025. Ese mes, a diferencia de otros años, se abona solo la mitad de la cuota. No frenamos durante las vacaciones de invierno."
    },
    {
      question: "¿Es necesario tener la camiseta de El Recreo Fútbol?",
      answer: "No es obligatoria para entrenar durante la semana, pero sí es requerida para jugar en la Liga de los Sábados. Los adultos también pueden pedir su camiseta, hay talles para todos/as."
    },
    {
      question: "Si mi niño/a no pudo asistir durante un período largo del mes, ¿es necesario abonar el mes entero?",
      answer: "Sí. A menos que se haya realizado la baja con anticipación, es necesario abonar el mes completo para no perder el cupo."
    },
    {
      question: "¿Qué sucede si hay un mes en el que no podemos asistir, hay que abonar igual?",
      answer: "Para mantener el cupo es necesario abonar el mes aunque no puedan asistir. Si un mes no se abona, se pierde el cupo y la matrícula habilitante, debiendo pagar nuevamente la matrícula en caso de querer retomar."
    },
    {
      question: "¿Cómo funciona el día de prueba?",
      answer: "El día de prueba está pensado para chicos y chicas que nunca participaron de El Recreo Fútbol. Deben completar un formulario con sus datos y reglas de convivencia. El día de prueba no genera un cupo oficial, pero en caso de lista de espera otorga prioridad cuando se libera un lugar."
    },
    {
      question: "¿Cómo se abona la matrícula anual?",
      answer: "La matrícula anual se abona por transferencia bancaria. De esta manera evitamos comisiones adicionales y podemos mantener un contacto directo con cada familia para coordinar cupos y horarios."
    },
    {
      question: "¿Qué incluye el costo por competencia?",
      answer: "El extra por competencia cubre la participación en la Liga Formativa: matrícula del torneo, pagos a docentes, organización de partidos, árbitros y seguros. Los partidos se juegan sábado de por medio, con un mínimo de 6 y un máximo de 7 fechas; si llueve, se reprograman."
    },
    {
      question: "¿Qué pasa en caso de una emergencia durante la actividad?",
      answer: "Ante una emergencia se llama a la ambulancia del establecimiento o del torneo. Si la familia prefiere retirar al niño o niña por sus propios medios, deberá firmar el libro de actas correspondiente."
    }
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
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-4 font-bangers tracking-wider">
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
