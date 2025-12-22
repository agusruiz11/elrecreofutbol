
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Check,
  ExternalLink,
  Info,
  Trophy,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import kids1 from '@/assets/brand/Frase-2026.png';
import kids2 from '@/assets/brand/Inscripciones-Abiertas-2026.png';


const Services = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const menoresPlans = [
    {
      name: 'Individual 1 vez por semana',
      price: '$58.000',
      subtitle: '/ mes',
      features: [
        '1 entrenamiento semanal',
        'Entrenamientos recreativos y formativos',
        'Ideal para quienes recién empiezan',
      ],
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=efb613090fd642978122767ddbd76121',
    },
    {
      name: 'Individual LIBRE',
      price: '$65.000',
      subtitle: '/ mes',
      features: [
        'Hasta 2 entrenamientos por semana',
        'Mayor continuidad y progreso deportivo',
        'Recomendado para quienes ya vienen entrenando',
      ],
      highlighted: true,
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=1f861297e8354f7598ab985cb911d53e',
    },
    {
      name: 'Extra: Competencia',
      price: '$15.000',
      subtitle: '/ mes',
      features: [
        'Valor torneto apertura total p/ niño/a: $75.000 / mes',
        'Extra competencia: $15.000 por niño/a de marzo a julio, con mínimo 6 y máximo 7 partidos. Se juega sábado de por medio y se reprograma por lluvia.',
        'Incluye matrícula del torneo, pagos docentes, árbitros y seguros.',
      ],
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=4ad55bcc927a485d92f0b5d500de6da9',
    },
  ];

  const pack2Plans = [
    {
      name: 'Pack familiar 1 v/s',
      price: '$104.400',
      subtitle: '/ mes',
      features: [
        'Pack familiar x2 (10% descuento)',
        '1 vez por semana para dos hermanos/as',
        'Entrenamientos recreativos y formativos',
      ],
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=ca0cb0a567394d5693d3fd199c50819d',
    },
    {
      name: 'Pack familiar LIBRE',
      price: '$117.000',
      subtitle: '/ mes',
      features: [
        'Pack familiar x2 (10% descuento)',
        'Hasta 2 veces por semana para dos hermanos/as',
        'Mayor continuidad y progreso deportivo',
      ],
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=92e3e2e0a7314e38861084d19726a293',
    },
    {
      name: 'Pack familiar 1/2',
      price: '$110.700',
      subtitle: '/ mes',
      features: [
        'Pack familiar x2 (10% descuento)',
        'Un hermano/a 1 vez por semana, otro/a LIBRE',
        'Flexibilidad para diferentes necesidades',
      ],
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=8036c910a5aa4a74b245e3766db77eac',
    },
  ];

  const pack3Plans = [
    {
      name: 'Pack familiar 1 v/s',
      price: '$147.900',
      subtitle: '/ mes',
      features: [
        'Pack familiar x3 (15% descuento)',
        '1 vez por semana para tres hermanos/as',
        'Entrenamientos recreativos y formativos',
      ],
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=837cf04787744433b08dc816be5d9e45',
    },
    {
      name: 'Pack familiar LIBRE',
      price: '$165.750',
      subtitle: '/ mes',
      features: [
        'Pack familiar x3 (15% descuento)',
        'Hasta 2 veces por semana para tres hermanos/as',
        'Mayor continuidad y progreso deportivo',
      ],
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=0613a5abad974a86a2a47fb3f726c35e',
    },
    {
      name: 'Pack familiar 1/3 (uno libre)',
      price: '$153.850',
      subtitle: '/ mes',
      features: [
        'Pack familiar x3 (15% descuento)',
        'Dos hermanos/as 1 vez por semana, uno/a LIBRE',
        'Flexibilidad para diferentes necesidades',
      ],
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=f524a4e0042a4188974266813a1cc39a',
    },
    {
      name: 'Pack familiar 2/3 (dos libres)',
      price: '$159.800',
      subtitle: '/ mes',
      features: [
        'Pack familiar x3 (15% descuento)',
        'Un hermano/a 1 vez por semana, dos LIBRE',
        'Máxima flexibilidad para la familia',
      ],
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=51bb731cdaf1413b83aa6fffaf247341',
    },
  ];

  const adultosPlans = [
    {
      name: 'Adultos Mixtos - Con niños',
      price: '$49.300',
      subtitle: '/ mes',
      features: [
        '1 vez por semana',
        'Para adultos con hijos/as en El Recreo Fútbol',
        'Entrenamientos recreativos y mixtos',
      ],
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=319df342bc9c4e4ab7a1408df4bff303',
    },
    {
      name: 'Adultos Mixtos - Sin niños',
      price: '$58.000',
      subtitle: '/ mes',
      features: [
        '1 vez por semana',
        'Para adultos sin hijos/as en El Recreo Fútbol',
        'Entrenamientos recreativos y mixtos',
      ],
      paymentLink: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=1b9c5ceb6c4847939460836f4d07654f',
    },
  ];

  const externalPlaceholder = 'https://wa.me/5491122650481?text=Hola, quiero solicitar un día de prueba / pagar la matrícula 2026.'; // Reemplazá luego por tu link de WhatsApp o Mercado Pago

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Encabezado de sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-bangers tracking-wider">
            Planes, inscripciones y competencias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elegí cómo sumarte a El Recreo Fútbol y conocé todos los detalles de matrícula, cuotas y torneos.
          </p>
        </motion.div>

        {/* Paso 1 – Día de prueba */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DBAA0C]/20 to-[#5AA8D8]/20 flex items-center justify-center">
                <span className="text-2xl font-semibold text-[#DBAA0C]">1</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Día de prueba
                </h3>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Si nunca viniste a El Recreo Fútbol, podés probar una clase antes de inscribirte. El día de prueba no
              genera cupo oficial, pero te da prioridad en la lista de espera en caso de que no haya lugares
              disponibles.
            </p>
            <p className="text-sm text-gray-600 italic mb-6">
              - El día de prueba está pensado únicamente para quienes nunca participaron de El Recreo Fútbol.
            </p>
            <Button
              asChild
              className="w-full md:w-auto bg-gradient-to-r from-[#DBAA0C] to-[#5AA8D8] hover:from-[#DBAA0C]/90 hover:to-[#5AA8D8]/90 text-white font-semibold py-3 px-6 text-base md:text-lg"
            >
              <a href={externalPlaceholder} target="_blank" rel="noopener noreferrer">
                Solicitar día de prueba
                <ExternalLink className="inline-block ml-2 w-4 h-4 align-middle" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Paso 2 – Matrícula anual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5AA8D8]/20 to-[#DBAA0C]/20 flex items-center justify-center">
                <span className="text-2xl font-semibold text-[#5AA8D8]">2</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Matrícula anual 2026 + camiseta
                </h3>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              La matrícula anual es obligatoria para todos los alumnos y alumnas. Incluye la camiseta oficial de
              entrenamiento (excepto en noviembre y diciembre). El pago de la matrícula se realiza por transferencia
              bancaria para evitar comisiones y mantener un contacto directo con cada familia.
            </p>

            {/* Lista de precios de matrícula */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                <p className="text-sm font-semibold text-[#DBAA0C] mb-1">
                  Febrero (20% de descuento)
                </p>
                <p className="text-2xl font-bold text-gray-900">$53.000</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                <p className="text-sm font-semibold text-[#DBAA0C] mb-1">
                  Marzo a octubre
                </p>
                <p className="text-2xl font-bold text-gray-900">$63.000</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                <p className="text-sm font-semibold text-[#DBAA0C] mb-1">
                  Noviembre y diciembre
                </p>
                <p className="text-2xl font-bold text-gray-900">$40.000</p>
                <p className="text-xs text-gray-600 mt-1">(sin camiseta)</p>
              </div>
            </div>

            {/* Recuadro importante */}
            <div className="bg-gradient-to-r from-[#DBAA0C]/5 to-[#5AA8D8]/5 border border-[#DBAA0C]/30 rounded-2xl p-4 md:p-5 mb-6">
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                Importante:
              </h4>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
                <li>
                  Si la familia se da de baja, debe avisar con anticipación. Si el mes ya comenzó, se cobra el mes
                  completo sin devolución.
                </li>
                <li>
                  Dejar de asistir NO implica la baja automática: siempre hay que avisar.
                </li>
                <li>
                  Al darse de baja, se libera el cupo y la matrícula anual. Si quieren volver a ingresar más adelante,
                  abonan el 50% de la matrícula (según disponibilidad de cupos).
                </li>
              </ul>
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full md:w-auto border-2 border-[#5AA8D8] text-[#5AA8D8] hover:bg-[#5AA8D8] hover:text-white font-semibold py-3 px-6 text-base md:text-lg"
            >
              <a href={externalPlaceholder} target="_blank" rel="noopener noreferrer">
                Pagar matrícula
                <ExternalLink className="inline-block ml-2 w-4 h-4 align-middle" />
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="flex justify-center mb-12">
          <img
            src={kids2}
          alt="Inscripciones abiertas 2026"
            className="rounded-xl shadow-lg max-w-full h-auto max-h-[400px]"
          />
        </div>

        {/* Planes mensuales – Menores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Planes mensuales – Menores
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Precios vigentes de marzo a julio 2026 (actualización en agosto).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {menoresPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + index * 0.05 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col ${
                  plan.highlighted ? 'ring-2 ring-[#DBAA0C]' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#DBAA0C] to-[#5AA8D8] text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                    RECOMENDADO
                  </div>
                )}
                <div className="h-1.5 bg-gradient-to-r from-[#DBAA0C] to-[#5AA8D8]" />
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {plan.name}
                  </h4>
                  <div className="mb-5">
                    <span className="text-3xl md:text-4xl font-extrabold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.subtitle}</span>
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm md:text-base">
                        <div className="w-5 h-5 rounded-full bg-[#DBAA0C]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#DBAA0C]" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full mt-auto bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 text-base md:text-lg"
                  >
                    <a href={plan.paymentLink} target="_blank" rel="noopener noreferrer">
                      Pagar con Mercado Pago
                      <ExternalLink className="inline-block ml-2 w-4 h-4 align-middle" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Descuentos para familias - Tarjetas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-6 h-6 text-[#5AA8D8]" />
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Descuentos para familias
              </h3>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beneficios especiales para familias que suman a más de un niño o niña a El Recreo Fútbol.
            </p>
          </div>

          {/* Pack x2 */}
          <div className="mb-12">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              Pack familiar x2 – 10% de descuento
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pack2Plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 + index * 0.05 }}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
                >
                  <div className="h-1.5 bg-gradient-to-r from-[#5AA8D8] to-[#DBAA0C]" />
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <h5 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {plan.name}
                    </h5>
                    <div className="mb-5">
                      <span className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">{plan.subtitle}</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm md:text-base">
                          <div className="w-5 h-5 rounded-full bg-[#5AA8D8]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#5AA8D8]" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full mt-auto bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 text-base md:text-lg"
                    >
                      <a href={plan.paymentLink} target="_blank" rel="noopener noreferrer">
                        Pagar con Mercado Pago
                        <ExternalLink className="inline-block ml-2 w-4 h-4 align-middle" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pack x3 */}
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              Pack familiar x3 – 15% de descuento
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pack3Plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
                >
                  <div className="h-1.5 bg-gradient-to-r from-[#5AA8D8] to-[#DBAA0C]" />
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <h5 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {plan.name}
                    </h5>
                    <div className="mb-5">
                      <span className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">{plan.subtitle}</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm md:text-base">
                          <div className="w-5 h-5 rounded-full bg-[#5AA8D8]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#5AA8D8]" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full mt-auto bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 text-base md:text-lg"
                    >
                      <a href={plan.paymentLink} target="_blank" rel="noopener noreferrer">
                        Pagar con Mercado Pago
                        <ExternalLink className="inline-block ml-2 w-4 h-4 align-middle" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fútbol Adultos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-[#5AA8D8]" />
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Fútbol Adultos Mixtos
              </h3>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              También contamos con grupos de fútbol para adultos, con entrenamientos recreativos y mixtos,
              pensados para disfrutar del juego y mantenerse activos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {adultosPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.75 + index * 0.05 }}
                className="relative bg-gradient-to-br from-[#5AA8D8]/5 to-[#DBAA0C]/5 rounded-2xl shadow-lg overflow-hidden border border-[#5AA8D8]/30 flex flex-col"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#5AA8D8] to-[#DBAA0C]" />
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {plan.name}
                  </h4>
                  <div className="mb-5">
                    <span className="text-3xl md:text-4xl font-extrabold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.subtitle}</span>
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm md:text-base">
                        <div className="w-5 h-5 rounded-full bg-[#5AA8D8]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#5AA8D8]" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full mt-auto bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 text-base md:text-lg"
                  >
                    <a href={plan.paymentLink} target="_blank" rel="noopener noreferrer">
                      Pagar con Mercado Pago
                      <ExternalLink className="inline-block ml-2 w-4 h-4 align-middle" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Información sobre matrícula adultos */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-white/80 rounded-xl border border-gray-100 p-4 text-center">
              <p className="text-sm font-semibold text-[#DBAA0C] mb-1">
                Matrícula anual
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                $40.000
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                Incluye remera oficial de entrenamiento.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Competencias – Liga Formativa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-l-[#DBAA0C] border border-gray-100 p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#DBAA0C]/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-[#DBAA0C]" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Competencias – Liga Formativa de Fútbol
                </h3>
              </div>
            </div>
            <ul className="space-y-1 text-gray-700 text-sm md:text-base mb-3">
              <li>• Liga Formativa Masculina: sábados de por medio. Se reprograma por lluvia.</li>
              <li>• Desde Sala de 5 años en adelante.</li>
              <li>• Apertura: abril 2026 (5 cuotas de $15.000).</li>
              <li>• Clausura: agosto 2026 (5 cuotas, valor a confirmar).</li>
              <li>• Sede del torneo: Galicia 1973.</li>
              <li>
                • Las cuotas incluyen matrícula del torneo, pagos docentes, partidos, árbitros y seguros.
              </li>
            </ul>
            <p className="text-xs md:text-sm text-gray-600 italic">
              Nota: Por el momento el femenino no compite en liga, pero estamos evaluando opciones para el futuro.
            </p>
          </div>
        </motion.div>

        {/* Información importante */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="bg-[#0F172A] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Info className="w-6 h-6 text-[#DBAA0C]" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Información importante
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-100">
                <li>
                  • Para darse de baja de la actividad es obligatorio avisar al coordinador. Si el mes ya comenzó, se
                  abona el mes completo sin devolución.
                </li>
                <li>
                  • El hecho de dejar de asistir NO implica la baja automática: siempre hay que avisar.
                </li>
                <li>• Las inasistencias no se recuperan.</li>
                <li>
                  • Diciembre se abona completo, incluyendo competencia para quienes participan.
                </li>
                <li>
                  • Ante cualquier emergencia se llama a la ambulancia del establecimiento o del torneo. Si la familia
                  decide retirar al niño o niña por sus propios medios, debe firmar el libro de actas.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      <div className="flex justify-center my-12">
        <img
          src={kids1}
          alt="Imagen de referencia"
          className="rounded-xl shadow-lg max-w-full h-auto"
        />
      </div>
      </div>
    </section>
  );
};

export default Services;
