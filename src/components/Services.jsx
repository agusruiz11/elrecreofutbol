
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const plans = [
    {
      name: 'Plan Básico',
      price: '$15.000',
      period: 'mensual',
      features: [
        '2 entrenamientos semanales',
        'Duración: 1.5 horas',
        'Equipamiento básico incluido',
        'Acceso a instalaciones',
        'Seguimiento de progreso',
      ],
      popular: false,
      paymentUrl: 'https://www.mercadopago.com.ar' // Placeholder URL
    },
    {
      name: 'Plan Completo',
      price: '$22.000',
      period: 'mensual',
      features: [
        '3 entrenamientos semanales',
        'Duración: 1.5-2 horas',
        'Kit deportivo completo',
        'Acceso a instalaciones',
        'Seguimiento personalizado',
        'Participación en torneos',
        'Seguro deportivo incluido',
      ],
      popular: true,
      paymentUrl: 'https://www.mercadopago.com.ar' // Placeholder URL
    },
    {
      name: 'Plan Elite',
      price: '$35.000',
      period: 'mensual',
      features: [
        '4 entrenamientos semanales',
        'Duración: 2 horas',
        'Kit deportivo premium',
        'Acceso prioritario a instalaciones',
        'Entrenamiento personalizado',
        'Preparación física especializada',
        'Análisis de video',
        'Participación en torneos nacionales',
        'Seguro deportivo premium',
      ],
      popular: false,
      paymentUrl: 'https://www.mercadopago.com.ar' // Placeholder URL
    },
  ];

  const handlePayment = (planName, url) => {
    // In production, this would redirect to the actual Mercado Pago payment link
    toast({
      title: "Redirigiendo a Mercado Pago",
      description: `Procesando pago para ${planName}. Esta funcionalidad estará disponible próximamente.`,
      duration: 3000,
    });
  };

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Planes y Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elegí el plan que mejor se adapte a las necesidades de tu hijo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-4 ring-[#DBAA0C] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#DBAA0C] to-[#5AA8D8] text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MÁS ELEGIDO
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#DBAA0C]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#DBAA0C]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePayment(plan.name, plan.paymentUrl)}
                  className={`w-full py-6 text-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#DBAA0C] to-[#5AA8D8] hover:from-[#DBAA0C]/90 hover:to-[#5AA8D8]/90'
                      : 'bg-gray-900 hover:bg-gray-800'
                  } text-white group`}
                >
                  Pagar con Mercado Pago
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center bg-gradient-to-r from-[#DBAA0C]/10 to-[#5AA8D8]/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            ¿Necesitás más información?
          </h3>
          <p className="text-gray-700 mb-4">
            Contactanos para conocer descuentos por hermanos, promociones especiales y opciones de pago.
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline"
            className="border-2 border-[#DBAA0C] text-[#DBAA0C] hover:bg-[#DBAA0C] hover:text-white"
          >
            Contactar Ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
