import React, { useState, useEffect, useRef } from 'react';

/**
 * Galería de imágenes reutilizable
 *
 * Props:
 * - images: Array<{ id: string | number, src: string, alt?: string }>
 * - className?: string
 * - showArrows?: boolean (por defecto true si hay más de 1 imagen)
 * - showDots?: boolean (por defecto true si hay más de 1 imagen)
 */
const ImageGallery = ({
  images = [],
  className = '',
  showArrows,
  showDots,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [imageOrientation, setImageOrientation] = useState('horizontal'); // 'horizontal' | 'vertical'
  const imgRef = useRef(null);

  if (!images || images.length === 0) {
    return (
      <div
        className={`relative bg-white/80 rounded-xl overflow-hidden shadow-md flex items-center justify-center aspect-video ${className}`}
      >
        <span className="text-gray-400 text-sm md:text-base font-medium text-center px-4">
          Próximamente vas a poder ver fotos acá.
        </span>
      </div>
    );
  }

  const hasMultiple = images.length > 1;
  const arrowsEnabled = showArrows ?? hasMultiple;
  const dotsEnabled = showDots ?? hasMultiple;

  // Detectar orientación de la imagen actual
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      const img = imgRef.current;
      const isVertical = img.naturalHeight > img.naturalWidth;
      setImageOrientation(isVertical ? 'vertical' : 'horizontal');
    }
  }, [currentIndex]);

  const handleImageLoad = (e) => {
    const img = e.target;
    const isVertical = img.naturalHeight > img.naturalWidth;
    setImageOrientation(isVertical ? 'vertical' : 'horizontal');
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 40; // píxeles mínimos para considerar swipe

    if (distance > minSwipeDistance) {
      // swipe hacia la izquierda → siguiente
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // swipe hacia la derecha → anterior
      handlePrev();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const currentImage = images[currentIndex];

  return (
    <div className={`relative bg-white/80 rounded-xl overflow-hidden shadow-md ${className}`}>
      <div
        className={`w-full overflow-hidden bg-black/10 flex items-center justify-center ${
          imageOrientation === 'vertical' ? 'aspect-[3/4] max-h-[600px]' : 'aspect-video'
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          ref={imgRef}
          src={currentImage.src}
          alt={currentImage.alt ?? 'Imagen de galería'}
          loading="lazy"
          onLoad={handleImageLoad}
          className="w-full h-full object-contain"
        />
      </div>

      {arrowsEnabled && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow transition"
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow transition"
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </>
      )}

      {dotsEnabled && (
        <div className="flex items-center justify-center gap-1.5 py-2 bg-white/80">
          {images.map((img, index) => (
            <button
              key={img.id ?? index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex
                  ? 'bg-[#5AA8D8]'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
