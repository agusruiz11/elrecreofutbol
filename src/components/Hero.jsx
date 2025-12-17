
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Trophy, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Trophy, text: 'Formación Profesional' },
    { icon: Users, text: 'Equipo Calificado' },
    { icon: Target, text: 'Metodología Moderna' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30">
      <div className="absolute inset-0 bg-gradient-to-br from-[#DBAA0C] via-[#5AA8D8] to-[#DBAA0C]">
        <div className="absolute inset-0 opacity-20">
          <img 
            alt="Niños entrenando fútbol en campo deportivo" 
            className="w-full h-full object-cover"
           src="https://images.unsplash.com/photo-1660355239524-1af9e3f8774d" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              El Recreo Fútbol
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Academia de fútbol femenino y masculino para niños y jóvenes de 4 a 18 años
              <br></br>📍 Parque Chacabuco, CABA
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-white text-[#DBAA0C] hover:bg-gray-100 text-lg px-8 py-6 group"
            >
              Inscribite Ahora
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-[#DBAA0C] text-white hover:bg-white hover:text-[#DBAA0C] border-2 border-white text-lg px-8 py-6"
            >
              Conocer Más
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
              >
                <feature.icon className="w-12 h-12 text-white mb-3 mx-auto" />
                <p className="text-white font-semibold text-lg">{feature.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
