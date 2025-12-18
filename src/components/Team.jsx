
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Award, Trophy, GraduationCap } from 'lucide-react';

const Team = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: 'Diego Martínez',
      role: 'Director Técnico',
      credentials: 'Licencia UEFA Pro, Ex-jugador profesional',
      experience: '15 años de experiencia',
      icon: Trophy
    },
    {
      name: 'Lucas Fernández',
      role: 'Entrenador Categorías Infantiles',
      credentials: 'Licencia CONMEBOL A, Especialista en formación',
      experience: '10 años en fútbol infantil',
      icon: GraduationCap
    },
    {
      name: 'Martín Gómez',
      role: 'Preparador Físico',
      credentials: 'Lic. en Educación Física, Master en Alto Rendimiento',
      experience: '8 años en desarrollo físico',
      icon: Award
    },
    {
      name: 'Sebastián Torres',
      role: 'Entrenador Categorías Juveniles',
      credentials: 'Licencia CONMEBOL B, Ex-seleccionado juvenil',
      experience: '12 años formando jugadores',
      icon: Trophy
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro Equipo Técnico
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales altamente capacitados y con experiencia comprobada en formación deportiva
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                 src="https://images.unsplash.com/photo-1604651685068-8223d8790770" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-white/90">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#DBAA0C] to-[#5AA8D8] rounded-full flex items-center justify-center">
                    <member.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#DBAA0C]">{member.experience}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {member.credentials}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-[#DBAA0C] to-[#5AA8D8] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Staff Comprometido con la Excelencia
            </h3>
            <p className="text-lg max-w-3xl mx-auto">
              Nuestro equipo técnico se actualiza constantemente en las últimas metodologías de entrenamiento y desarrollo deportivo para ofrecer la mejor formación a nuestros jugadores.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
