
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Nosotros', id: 'about' },
    { label: 'Categorías', id: 'categories' },
    { label: 'Equipo', id: 'team' },
    { label: 'Servicios', id: 'services' },
    { label: 'Contacto', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#DBAA0C] to-[#5AA8D8] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚽</span>
              </div>
              <span className="text-xl font-bold">Academia Fútbol</span>
            </div>
            <p className="text-gray-400 mb-4">
              Formando campeones desde hace más de 10 años. Pasión, compromiso y excelencia en cada entrenamiento.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => window.open('https://instagram.com', '_blank')}
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-[#DBAA0C] hover:to-[#5AA8D8] rounded-full flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://facebook.com', '_blank')}
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-[#DBAA0C] hover:to-[#5AA8D8] rounded-full flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://twitter.com', '_blank')}
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-[#DBAA0C] hover:to-[#5AA8D8] rounded-full flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block">Enlaces Rápidos</span>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-[#DBAA0C] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block">Horarios</span>
            <div className="space-y-2 text-gray-400">
              <p>Lunes a Viernes: 15:00 - 21:00</p>
              <p>Sábados: 09:00 - 13:00</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block">Contacto</span>
            <div className="space-y-3">
              <button
                onClick={() => window.open('https://maps.google.com', '_blank')}
                className="flex items-start gap-2 text-gray-400 hover:text-[#DBAA0C] transition-colors text-left"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Av. San Martín 1234, Buenos Aires</span>
              </button>
              <button
                onClick={() => window.open('tel:+5491112345678')}
                className="flex items-center gap-2 text-gray-400 hover:text-[#DBAA0C] transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+54 9 11 1234-5678</span>
              </button>
              <button
                onClick={() => window.open('mailto:info@academiafutbol.com.ar')}
                className="flex items-center gap-2 text-gray-400 hover:text-[#DBAA0C] transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@academiafutbol.com.ar</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Academia Fútbol. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
