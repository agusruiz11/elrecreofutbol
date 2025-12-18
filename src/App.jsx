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
import Location from '@/components/Location';
import HomeGallery from '@/components/HomeGallery';
import Gira from '@/components/Gira';

function App() {
  return (
    <>
      <Helmet>
        <title>El Recreo Fútbol</title>
        <meta
          name="description"
          content="Escuela de fútbol infantil en Argentina. Entrenamiento formativo para niños y adultos. Categorías por edad, equipo técnico calificado y metodología moderna."
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Location />
          <Gira />
          <HomeGallery />
          <Categories />
          {/* <Team /> */}
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
