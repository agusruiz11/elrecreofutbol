import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
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
      <div className="min-h-screen bg-white">
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
