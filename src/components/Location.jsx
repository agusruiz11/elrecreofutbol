import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';
import chacabuco1 from '@/assets/photos/sedes/chacabuco/IMG-20251217-WA0002.jpg';
import chacabuco2 from '@/assets/photos/sedes/chacabuco/IMG-20251217-WA0003.jpg';
import chacabuco3 from '@/assets/photos/sedes/chacabuco/IMG-20251217-WA0004.jpg';
import chacabuco4 from '@/assets/photos/sedes/chacabuco/IMG-20251217-WA0005.jpg';
import chacabuco5 from '@/assets/photos/sedes/chacabuco/IMG-20251217-WA0006.jpg';
import sanDiego1 from '@/assets/photos/sedes/san diego/IMG-20251217-WA0023.jpg';

const locations = [
  {
    name: 'Complejo Chacabuco',
    address: 'Emilio Mitre 985',
    description:
      'Complejo techado con múltiples canchas de fútbol 5 y espacios pensados para familias.',
    features: [
      '3 canchas de fútbol 5 techadas',
      'Césped sintético de alta calidad',
      'Vestuarios para niños y niñas',
      'Quiosco y espacio de espera para familias',
    ],
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.89152241691!2d-58.4413345!3d-34.6321815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3575b8d151%3A0x1a9b83512693ef1!2sEmilio%20Mitre%20985%2C%20C1424AYS%20C1424AYS%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1766011527793!5m2!1ses!2sar',
    images: [
      { id: 1, src: chacabuco1, alt: 'Cancha de fútbol en Complejo Chacabuco' },
      { id: 2, src: chacabuco2, alt: 'Vista del complejo Complejo Chacabuco' },
      { id: 3, src: chacabuco3, alt: 'Entrenamiento en Complejo Chacabuco' },
      { id: 4, src: chacabuco4, alt: 'Instalaciones de Complejo Chacabuco' },
      { id: 5, src: chacabuco5, alt: 'Familias y jugadores en Complejo Chacabuco' },
    ],
  },
  {
    name: 'Club San Diego',
    address: 'Riglos 920',
    description:
      'Club deportivo con canchas de fútbol y pádel, ideal para entrenar y compartir en familia.',
    features: [
      '2 canchas de fútbol 5 techadas de sintético',
      'Vestuarios para niños y niñas',
      '2 canchas de pádel',
      'Quiosco y espacios de recreación',
    ],
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.454663961084!2d-58.448!3d-34.592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sParque%20Chacabuco!5e0!3m2!1ses-419!2sar!4v1700000000001',
    images: [
      { id: 1, src: sanDiego1, alt: 'Cancha de fútbol en Club San Diego' },
    ],
  },
];

const Location = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    () =>
      locations.reduce((acc, loc) => {
        acc[loc.name] = 0;
        return acc;
      }, {})
  );

  const handlePrev = (name, imagesLength) => {
    setCurrentIndexes((prev) => {
      const current = prev[name] ?? 0;
      const nextIndex = current === 0 ? imagesLength - 1 : current - 1;
      return { ...prev, [name]: nextIndex };
    });
  };

  const handleNext = (name, imagesLength) => {
    setCurrentIndexes((prev) => {
      const current = prev[name] ?? 0;
      const nextIndex = current === imagesLength - 1 ? 0 : current + 1;
      return { ...prev, [name]: nextIndex };
    });
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ubicación
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos situados en Parque Chacabuco, actualmente con dos sedes a 5 cuadras de distancia entre una y la otra.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#96E0EF]/30 text-[#5AA8D8]">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {loc.name}
                  </h3>
                </div>
                <p className="text-gray-700 font-semibold">
                  Dirección: {loc.address}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {loc.description}
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2 md:items-stretch">
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-2">
                      Características del lugar
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      {loc.features?.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full h-56 md:h-full rounded-xl overflow-hidden border border-gray-200 bg-white">
                    <iframe
                      src={loc.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={loc.name}
                    ></iframe>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Galería de fotos
                  </h4>
                  <ImageGallery images={loc.images} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Location;
