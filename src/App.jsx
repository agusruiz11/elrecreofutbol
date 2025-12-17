
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Categories from '@/components/Categories';
import Team from '@/components/Team';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <>
      <Helmet>
        <title>Escuela de Fútbol Infantil - Academia Deportiva para Niños en Argentina</title>
        <meta name="description" content="Escuela de fútbol infantil en Argentina. Entrenamiento profesional para niños de 4 a 16 años. Categorías por edad, equipo técnico calificado y metodología moderna." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Categories />
          <Team />
          <Services />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <Toaster />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
