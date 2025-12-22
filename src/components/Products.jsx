import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Shirt } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const PHONE_NUMBER = '5491122650481';
  const handleComprar = (productName) => {
    const message = `Hola, quiero comprar la ${productName}.`;
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    {
      id: 1,
      name: 'Camiseta 2026',
      description: 'Camiseta oficial de entrenamiento de El Recreo Fútbol. Diseño exclusivo para la temporada 2026.',
      price: 'Consultar precio',
    },
  ];

  return (
    <section id="products" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-4 font-bangers tracking-wider">
            Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubrí nuestros productos oficiales de El Recreo Fútbol
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#DBAA0C] to-[#5AA8D8] rounded-full flex items-center justify-center mb-4">
                  <Shirt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-[#DBAA0C]">
                    {product.price}
                  </span>
                </div>
                <Button
                  onClick={() => handleComprar(product.name)}
                  className="w-full bg-gradient-to-r from-[#DBAA0C] to-[#5AA8D8] hover:from-[#DBAA0C]/90 hover:to-[#5AA8D8]/90 text-white font-semibold py-3 px-6 text-base"
                >
                  Comprar ahora
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

