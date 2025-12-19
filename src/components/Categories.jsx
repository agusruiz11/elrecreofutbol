
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Categories = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Estructura flexible por categoría:
  // - Cada categoría tiene varios "groups" (grupos por edad)
  // - Cada group puede tener varios "slots" (día/horario/dirección)
  const categories = [
    {
      name: 'Nivel Inicial',
      color: 'from-yellow-400 to-orange-500',
      groups: [
        {
          age: 'Sala de 3 y 4',
          slots: [
            {
              schedule: 'Lunes y Miércoles 17hs',
              address: 'Riglos 920',
            },
          ],
        },
        {
          age: 'Sala de 5',
          slots: [
            {
              schedule: 'Lunes y Miércoles 17hs',
              address: 'Riglos 920',
            },
          ],
        },
      ],
    },
    {
      name: 'Nivel Primario',
      color: 'from-[#DBAA0C] to-[#DBAA0C]/50',
      groups: [
        {
          age: '1° grado',
          slots: [
            {
              schedule: 'Lunes y Miércoles 17hs',
              address: 'Riglos 920',
            },
          ],
        },
        {
          age: '2° y 3° grado',
          slots: [
            {
              schedule: 'Miércoles 18hs',
              address: 'Riglos 920',
            },
            {
              schedule: 'Viernes 18hs',
              address: 'Emilio Mitre 985',
            },
          ],
        },
        {
          age: '4° y 5° grado',
          slots: [
            {
              schedule: 'Lunes 18hs',
              address: 'Riglos 920',
            },
            {
              schedule: 'Viernes 17hs',
              address: 'Emilio Mitre 985',
            },
          ],
        },
        {
          age: '6° y 7° grado',
          slots: [
            {
              schedule: 'Lunes 18hs',
              address: 'Riglos 920',
            },
            {
              schedule: 'Miércoles 19hs',
              address: 'Riglos 920',
            },
          ],
        },
      ],
    },
    {
      name: 'Femenino Nivel Primario',
      color: 'from-[#DBAA0C]/50 to-[#DBAA0C]',
      groups: [
        {
          age: '2° a 5° grado',
          slots: [
            {
              schedule: 'Lunes 19hs',
              address: 'Riglos 920',
            },
          ],
        },
        {
          age: '6° y 7° grado',
          slots: [
            {
              schedule: 'Miércoles 18hs',
              address: 'Riglos 920',
            },
            {
              schedule: 'Viernes 18hs',
              address: 'Emilio Mitre 985',
            },
          ],
        },
      ],
    },
    {
      name: 'Nivel Secundario',
      color: 'from-[#5AA8D8] to-[#5AA8D8]/50',
      groups: [
        {
          age: 'Secundario',
          slots: [
            {
              schedule: 'Lunes y Miércoles 19hs',
              address: 'Riglos 920',
            }
          ],
        },
      ],
    },
    {
      name: 'Adultos',
      color: 'from-purple-500 to-indigo-600',
      groups: [
        {
          age: 'Mixto',
          slots: [
            {
              schedule: 'Viernes 20hs',
              address: 'Riglos 920',
            }
          ],
        },
      ],
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
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-4 font-bangers tracking-wider">
            Categorías, días y Horarios 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programas adaptados a cada etapa de desarrollo para maximizar el aprendizaje
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.name}
                </h3>

                {/* Grupos por edad dentro de cada categoría */}
                <div className="space-y-4 mb-4">
                  {category.groups.map((group, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="border border-gray-100 rounded-xl p-3 bg-gray-50/60"
                    >
                      <div className="inline-block bg-gradient-to-r from-[#DBAA0C]/20 to-[#5AA8D8]/20 px-3 py-1 rounded-full mb-2">
                        <span className="text-sm font-semibold text-gray-800">
                          {group.age}
                        </span>
                      </div>

                      <div className="space-y-1">
                        {group.slots?.map((slot, slotIndex) => (
                          <div
                            key={slotIndex}
                            className="flex flex-col gap-0.5 mb-1"
                          >
                            <div className="flex items-start gap-2">
                              <Calendar className="w-4 h-4 text-[#DBAA0C] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-xs">
                                {slot.schedule}
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-[#5AA8D8] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-xs">
                                {slot.address}
                              </span>
                            </div>
                            {group.slots.length > 1 &&
                              slotIndex < group.slots.length - 1 && (
                                <hr className="my-2 border-gray-200" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

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
          Las clases se dictan de marzo a diciembre, desde el lunes 2/03 hasta el viernes 18/12.
          <br />
          Entrenamos en nuestras dos sedes de Parque Chacabuco (Complejo Chacabuco y Club San Diego), en canchas de césped sintético techadas, con vestuarios para niños y niñas.
          <br />
          Contamos con día de prueba para nuevos ingresos, matrícula anual obligatoria y la posibilidad de sumar competencia en la Liga Formativa de Fútbol (masculino).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
