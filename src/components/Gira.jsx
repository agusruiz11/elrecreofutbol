import React from 'react';
import ImageGallery from '@/components/ImageGallery';

// TODO: Reemplazar estas imágenes por las fotos reales de la Gira 2026
// Podés agregar, quitar o cambiar las rutas según tus assets
import gira1 from '@/assets/photos/gira/GIRA 2026.png';
import gira2 from '@/assets/photos/gira/20251205_114623.jpg';
import gira3 from '@/assets/photos/gira/20251205_114842.jpg';
import gira4 from '@/assets/photos/gira/20251205_115020.jpg';
import gira5 from '@/assets/photos/gira/20251205_115132.jpg';
import gira6 from '@/assets/photos/gira/20251205_115712.jpg';
import gira7 from '@/assets/photos/gira/20251205_115714.jpg';
import gira8 from '@/assets/photos/gira/20251205_115855.jpg';
import gira9 from '@/assets/photos/gira/20251205_115858.jpg';
import gira10 from '@/assets/photos/gira/20251205_120402.jpg';
import gira11 from '@/assets/photos/gira/20251205_120457.jpg';

const imagesGira2026 = [
  {
    id: 1,
    src: gira1,
    alt: 'Gira deportiva 2026',
  },
  {
    id: 2,
    src: gira2,
    alt: 'Gira deportiva 2025 - equipo disfrutando del viaje',
  },
  {
    id: 3,
    src: gira3,
    alt: 'Gira deportiva 2025 - equipo disfrutando del viaje',
  },
  {
    id: 4,
    src: gira4,
    alt: 'Gira deportiva 2025 - equipo disfrutando del viaje',
  },
  {
    id: 5,
    src: gira5,
    alt: 'Gira deportiva 2025 - equipo disfrutando del viaje',
  },
  {
    id: 6,
    src: gira6,
    alt: 'Gira deportiva 2025 - equipo disfrutando del viaje',
  }, 
  {
    id: 7,
    src: gira7,
    alt: 'Gira deportiva 2025 - equipo disfrutando del viaje',
  },
  {
    id: 8,
    src: gira8,
    alt: 'Gira deportiva 2025 - equipo disfrutando del viaje',
  },
  {
    id: 9,
    src: gira9,
    alt: 'Gira deportiva 2025 - equipo disfrutando del viaje',
  },
  {
    id: 10,
    src: gira10,
    alt: 'Gira deportiva 2025 - equipo disfrutando del viaje',
  },
  {
    id: 11,
    src: gira11,
    alt: 'Gira deportiva 2025 - equipo disfrutando del viaje',
  },
  // Agregá más objetos aquí cuando tengas más fotos
];

const Gira = () => {
  return (
    <section className="bg-white py-12 md:py-16" id="gira">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Columna de texto */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-2">
              Gira deportiva
            </p>
            <h2 className="text-3xl md:text-5xl text-gray-900 mb-4 font-bangers tracking-wider">
              GIRA 2026
            </h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
              En el 2025 arrancamos con nuestra primer Gira deportiva, situándose en Pilar (Bsas).
              Este año volvemos a generar el espacio para que ellos y ellas puedan jugar contra el club
              Los Lupinos y así pasar un fin de semana todos y todas juntos.
            </p>

            <div className="space-y-2 text-sm md:text-base">
              <p className="text-gray-800">
                <span className="font-semibold">Precio final:</span> A CONFIRMAR EN ABRIL
              </p>
              <p className="text-gray-800">
                <span className="font-semibold">Fecha:</span> A CONFIRMAR EN ABRIL
              </p>
            </div>
          </div>

          {/* Columna de carrusel */}
          <div className="max-w-xl mx-auto w-full">
            <ImageGallery images={imagesGira2026} className="w-full" />
            <div className="mt-2 flex justify-end">
              <span className="text-gray-500 text-sm">Fotos de la Gira 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gira;
