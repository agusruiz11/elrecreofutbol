import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/brand/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (item) => {
    // Botón de precios: siempre va a la página /precios
    if (item.id === 'services') {
      if (location.pathname !== '/precios') {
        navigate('/precios');
        setTimeout(() => {
          scrollToSection('services');
        }, 300);
      }
      setIsMobileMenuOpen(false);
      return;
    }

    // Para el resto de secciones: si estamos en /precios, primero volvemos a la home y luego scrollear
    if (location.pathname !== '/') {
      navigate('/');
      setIsMobileMenuOpen(false);
      // pequeño delay para que el DOM de la home se monte antes de hacer scroll
      setTimeout(() => {
        scrollToSection(item.id);
      }, 300);
      return;
    }

    // Si ya estamos en la home, solo hacemos scroll
    scrollToSection(item.id);
  };

  const navItems = [
    { label: 'Nosotros', id: 'about' },
    { label: 'Ubicación', id: 'location' },
    { label: 'Categorías y Horarios', id: 'categories' },
    { label: 'Precios', id: 'services' },
    { label: 'Gira 2026', id: 'gira' },
    { label: 'Fotos', id: 'gallery' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.5 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  scrollToSection('hero');
                }, 300);
              } else {
                scrollToSection('hero');
              }
            }}
          >
            <div className="w-24 h-24 flex items-center justify-center overflow-hidden">
              <img src={logo} alt="El Recreo Fútbol Logo" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`font-bold text-xl transition-colors drop-shadow-[3px_6px_6px_rgba(0,0,0,1)] hover:drop-shadow-none hover:text-[#F9BD1A] ${
                  isScrolled ? 'text-gray-700 drop-shadow-none hover:bg-transparent hover:text-white' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    scrollToSection('contact');
                  }, 300);
                } else {
                  scrollToSection('contact');
                }
              }}
              className="font-bold text-lg bg-[#F9BD1A] text-black hover:bg-[#96E0EF]"
            >
              Contacto
            </Button>
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#DBAA0C]/10 hover:text-[#DBAA0C] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => {
                  if (location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      scrollToSection('contact');
                    }, 300);
                  } else {
                    scrollToSection('contact');
                  }
                }}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
              >
                Inscribite Ahora
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
