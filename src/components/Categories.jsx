
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';

const Categories = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      name: 'Pre-Infantil',
      age: '4-6 años',
      schedule: 'Lunes y Miércoles 16:00-17:00',
      capacity: '15 niños',
      focus: 'Iniciación deportiva y desarrollo motriz',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Infantil',
      age: '7-9 años',
      schedule: 'Martes y Jueves 17:00-18:30',
      capacity: '18 niños',
      focus: 'Fundamentos técnicos y trabajo en equipo',
      color: 'from-[#DBAA0C] to-[#DBAA0C]/80'
    },
    {
      name: 'Pre-Juvenil',
      age: '10-12 años',
      schedule: 'Lunes, Miércoles y Viernes 18:00-19:30',
      capacity: '20 niños',
      focus: 'Técnica avanzada y táctica básica',
      color: 'from-[#5AA8D8] to-[#5AA8D8]/80'
    },
    {
      name: 'Juvenil',
      age: '13-16 años',
      schedule: 'Martes, Jueves y Sábados 19:00-21:00',
      capacity: '22 jugadores',
      focus: 'Preparación competitiva y desarrollo táctico',
      color: 'from-purple-500 to-indigo-600'
    },
  ];

  return (
    <section id="categories" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Categorías y Horarios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programas adaptados a cada etapa de desarrollo para maximizar el aprendizaje
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
            >
              <div className={`h-3 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <div className="inline-block bg-gradient-to-r from-[#DBAA0C]/20 to-[#5AA8D8]/20 px-4 py-2 rounded-full mb-4">
                  <span className="text-lg font-semibold text-gray-800">
                    {category.age}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-[#DBAA0C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{category.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#5AA8D8] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{category.capacity}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-[#DBAA0C]/10 to-[#5AA8D8]/10 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-6 h-6 text-[#DBAA0C]" />
            <h3 className="text-2xl font-bold text-gray-900">
              Información Adicional
            </h3>
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Todos los entrenamientos se realizan en nuestras instalaciones con canchas de césped sintético de última generación. Las clases incluyen trabajo técnico, táctico y físico adaptado a cada edad.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
