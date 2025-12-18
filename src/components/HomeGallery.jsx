import React from 'react';
import ImageGallery from '@/components/ImageGallery';

// Galería general de momentos
const momentosImports = import.meta.glob('../assets/photos/kids/*.{jpg,JPG}', {
  eager: true,
  import: 'default',
});

const imagesMomentos = Object.values(momentosImports).map((src, index) => ({
  id: index + 1,
  src,
  alt: 'Momentos en El Recreo',
}));

// Galería específica de premios 2025
// Cargamos automáticamente todas las imágenes dentro de assets/photos/premios
const premiosImports = import.meta.glob('../assets/photos/premios/*.{jpg,JPG}', {
  eager: true,
  import: 'default',
});

const imagesPremios2025 = Object.values(premiosImports).map((src, index) => ({
  id: index + 1,
  src,
  alt: 'Entrega de premios en El Recreo 2025',
}));

const HomeGallery = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16" id="gallery">
      {/* Sección 1: Momentos en El Recreo */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Momentos en El Recreo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Un vistazo a los entrenamientos, partidos y experiencias que viven
            los chicos en nuestra escuela de fútbol.
          </p>
        </div>

        <ImageGallery images={imagesMomentos} className="max-w-4xl mx-auto" />
      </div>

      {/* Sección 2: Premios 2025 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Premios 2025
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Los reconocimientos al esfuerzo, compromiso y superación de nuestros jugadores.
          </p>
        </div>

        <ImageGallery images={imagesPremios2025} className="max-w-4xl mx-auto" />
      </div>
    </section>
  );
};

export default HomeGallery;
