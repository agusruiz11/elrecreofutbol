
import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import logo from '@/assets/brand/logo.png';
import posicionarteLogo from '@/assets/brand/posicionarteLogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Nosotros', id: 'about' },
    { label: 'Ubicación', id: 'location' },
    { label: 'Categorías y horarios', id: 'categories' },
    { label: 'Precios', id: 'services' },
    { label: 'Fotos', id: 'gallery' },
    { label: 'Gira 2026', id: 'gira' },
    { label: 'Preguntas frecuentes', id: 'faq' },
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
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-30 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={logo}
                  alt="El Recreo Fútbol"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">El Recreo Fútbol</span>
            </div>
            <p className="text-gray-400 mb-4">
              Escuela de fútbol femenino y masculino en Parque Chacabuco (CABA), con sedes en Complejo Chacabuco
              y Club San Diego. Formación deportiva, valores y comunidad para niñas, niños y jóvenes.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => window.open('https://instagram.com/elrecreofutbol/', '_blank')}
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-[#DBAA0C] hover:to-[#5AA8D8] rounded-full flex items-center justify-center transition-all"
                aria-label="Instagram El Recreo Fútbol"
              >
                <Instagram className="w-5 h-5" />
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
            <span className="text-lg font-bold mb-4 block">Horarios generales</span>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Clases de marzo a diciembre.</p>
              <p>Infantiles y juveniles: lunes a viernes entre 17:00 y 21:00 hs.</p>
              <p>Adultos mixto: viernes 20:00 hs.</p>
              <p>Sedes en Parque Chacabuco: horarios distribuidos entre Complejo Chacabuco y Club San Diego.</p>
            </div>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block">Sedes y contacto</span>
            <div className="space-y-3 text-sm">
              <button
                onClick={() => window.open('https://maps.app.goo.gl/z5V5SgXQyXparquechacabuco', '_blank')}
                className="flex items-start gap-2 text-gray-400 hover:text-[#DBAA0C] transition-colors text-left"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Parque Chacabuco, CABA
                  <br />
                  Complejo Chacabuco – Emilio Mitre 985
                  <br />
                  Club San Diego – Riglos 920
                </span>
              </button>
              <button
                onClick={() => window.open('tel:+5491122650481')}
                className="flex items-center gap-2 text-gray-400 hover:text-[#DBAA0C] transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+54 9 11 2265-0481</span>
              </button>
              <button
                onClick={() => window.open('mailto:info@elrecreofutbol.com')}
                className="flex items-center gap-2 text-gray-400 hover:text-[#DBAA0C] transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@elrecreofutbol.com</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center flex justify-center items-center">
          <p className="text-gray-400">
            © {currentYear} El Recreo Fútbol. Todos los derechos reservados. Powered by{" "}
            <a
              href="https://posicionarte.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-50 transition-opacity ml-1 align-middle"
            >
              <img
                src={posicionarteLogo}
                alt="Posicionarte Online Logo"
                className="h-9 w-auto inline-block"
                style={{ verticalAlign: 'middle' }}
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
