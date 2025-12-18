
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import contactImage from '@/assets/photos/kids/DSC_0210.jpg';

const Contact = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsApp = () => {
    window.open('https://wa.me/5491122650481', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+54 9 11 2265-0481',
      action: () => window.open('tel:+5491122650481')
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@elrecreofutbol.com',
      action: () => window.open('mailto:info@elrecreofutbol.com')
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: '📍 Parque Chacabuco ',
      action: () => window.open('https://share.google/RQdwMgslHCNRQC5ot')
    },
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/elrecreofutbol/', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro canal principal de contacto es WhatsApp. También podés escribirnos o visitarnos cuando quieras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <button
                  key={index}
                  onClick={info.action}
                  className="flex items-start gap-4 w-full text-left hover:bg-gray-50 p-4 rounded-lg transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#DBAA0C] to-[#5AA8D8] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#DBAA0C] to-[#5AA8D8] rounded-xl p-6 text-white mb-6">
              <h4 className="text-xl font-bold mb-3">¿Preferís WhatsApp?</h4>
              <p className="mb-4">Chateá con nosotros directamente y resolvé tus dudas al instante</p>
              <Button
                onClick={handleWhatsApp}
                className="bg-white text-[#DBAA0C] hover:bg-gray-100 w-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Abrir WhatsApp
              </Button>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Seguinos en Redes</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(social.url, '_blank')}
                    className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-[#DBAA0C] hover:to-[#5AA8D8] rounded-full flex items-center justify-center group transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gray-50 rounded-xl p-2 shadow-lg h-full flex items-center justify-center">
              <img
                src={contactImage}
                className="w-full h-full max-h-[680px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
