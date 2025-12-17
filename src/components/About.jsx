
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Target, Award, Heart, Zap } from 'lucide-react';

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Buscamos la mejora continua en cada entrenamiento'
    },
    {
      icon: Award,
      title: 'Compromiso',
      description: 'Dedicación total al desarrollo de cada jugador'
    },
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Amor por el fútbol y la enseñanza deportiva'
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Métodos modernos adaptados a cada categoría'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una academia deportiva dedicada a la formación integral de niños y jóvenes a través del fútbol
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              alt="Entrenador enseñando técnicas de fútbol a niños"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
             src="https://images.unsplash.com/photo-1604651685068-8223d8790770" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Formamos jugadores integrales combinando técnica, táctica y valores. Nuestro objetivo es desarrollar el potencial de cada niño en un ambiente seguro, profesional y divertido.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Con más de 10 años de experiencia, hemos preparado cientos de jugadores que han continuado su carrera en clubes profesionales y selecciones juveniles.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-[#DBAA0C]/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#DBAA0C]">10+</span>
                </div>
                <span className="text-gray-700 font-medium">Años de experiencia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-[#5AA8D8]/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#5AA8D8]">500+</span>
                </div>
                <span className="text-gray-700 font-medium">Alumnos formados</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#DBAA0C] to-[#5AA8D8] rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
