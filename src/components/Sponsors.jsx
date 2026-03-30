import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

import logoBuenosFrutos from '../assets/sponsors/logo-buenos-frutos-white.svg';
import logoFinal from '../assets/sponsors/logofinal-new-white.png';

const Sponsors = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Array de sponsors - por ahora 2, fácil de expandir
  const sponsors = [
    {
      name: 'Cervi',
      logo: logoBuenosFrutos,
      url: 'https://www.cervi.com.ar/' // URL del sponsor
    },
    {
      name: 'Panizza',
      logo: logoFinal,
      url: 'http://sodapanizza.com.ar/' // URL del sponsor
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-[#E8F4F8]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-4 font-bangers tracking-wider">
            Nuestros Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agradecemos a nuestros patrocinadores por su apoyo continuo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="bg-[#5CA8D4]/80 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 md:h-24 w-auto object-contain transition-all duration-300"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
