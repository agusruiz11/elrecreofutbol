
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, completá todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    // Store in localStorage for demo purposes
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push({
      ...formData,
      date: new Date().toISOString(),
    });
    localStorage.setItem('contacts', JSON.stringify(contacts));

    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos a la brevedad. ¡Gracias por tu interés!",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5491112345678', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+54 9 11 1234-5678',
      action: () => window.open('tel:+5491112345678')
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@academiafutbol.com.ar',
      action: () => window.open('mailto:info@academiafutbol.com.ar')
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Av. San Martín 1234, Buenos Aires',
      action: () => window.open('https://maps.google.com')
    },
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
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
            Estamos para ayudarte. Envianos tu consulta y te responderemos a la brevedad
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
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envianos un Mensaje
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBAA0C] focus:border-transparent transition-all"
                    placeholder="Juan Pérez"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBAA0C] focus:border-transparent transition-all"
                    placeholder="juan@ejemplo.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBAA0C] focus:border-transparent transition-all"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Contanos en qué podemos ayudarte..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#DBAA0C] to-[#5AA8D8] hover:from-[#DBAA0C]/90 hover:to-[#5AA8D8]/90 text-white py-6 text-lg group"
                >
                  Enviar Mensaje
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
