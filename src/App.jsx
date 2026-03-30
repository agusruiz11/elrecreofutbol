import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Categories from '@/components/Categories';
import Team from '@/components/Team';
import Services from '@/components/Services';
import Socios from '@/components/Socios';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import Location from '@/components/Location';
import HomeGallery from '@/components/HomeGallery';
import Gira from '@/components/Gira';
import Products from '@/components/Products';

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
      <div className="min-h-screen bg-[#E8F4F8]">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Location />
                  <Categories />
                  <Gira />
                  <Products />
                  <HomeGallery />
                  {/* <Team /> */}
                  <FAQ />
                  <Contact />
                  <Sponsors />
                </>
              }
            />

            <Route
              path="/precios"
              element={
                <>
                  <Hero />
                  <Services />
                  <FAQ />
                  <Contact />
                  <Sponsors />
                </>
              }
            />

            <Route
              path="/socios"
              element={
                <>
                  <Hero />
                  <Socios />
                  <FAQ />
                  <Contact />
                  <Sponsors />
                </>
              }
            />
          </Routes>
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
