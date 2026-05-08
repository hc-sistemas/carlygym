import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'

const plans = [
  {
    id: 'basico',
    name: 'BÁSICO',
    monthly: 29, annual: 290,
    badge: null,
    featured: false,
    color: 'border-white/10',
    features: [
      'Acceso a sala de pesas',
      'Horario estándar (6AM – 10PM)',
      'Vestuarios y duchas',
      'Locker incluido',
      'App de seguimiento',
    ],
    missing: ['Clases grupales', 'Entrenador personal', 'Nutricionista', 'Acceso 24/7'],
  },
  {
    id: 'pro',
    name: 'PRO',
    monthly: 49, annual: 490,
    badge: 'Más Popular',
    featured: true,
    color: 'border-gym-red',
    features: [
      'Todo del plan Básico',
      'Acceso a todas las clases grupales',
      'Acceso extendido (5AM – 12AM)',
      'Seguimiento nutricional básico',
      'Evaluación física mensual',
      'Descuentos en tienda',
    ],
    missing: ['Entrenador personal', 'Nutricionista 1:1', 'Acceso 24/7'],
  },
  {
    id: 'elite',
    name: 'ÉLITE',
    monthly: 89, annual: 890,
    badge: 'Todo Incluido',
    featured: false,
    color: 'border-gym-gold',
    features: [
      'Todo del plan Pro',
      'Entrenador personal (4 sesiones/mes)',
      'Nutricionista 1:1',
      'Acceso 24/7 los 365 días',
      'Zona VIP y spa',
      'Invitados gratis (2/mes)',
      'Prioridad en reservas',
    ],
    missing: [],
  },
]

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
})

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function Plans() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="planes" className="bg-gym-black py-28 relative overflow-hidden">
      <div className="absolute inset-0 diagonal-lines opacity-60" />
      <div className="absolute top-0 inset-x-0 h-16 bg-gym-light"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div {...fade()} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gym-gold" />
            <span className="font-body font-700 text-gym-gold text-xs uppercase tracking-[0.3em]">Membresías</span>
            <div className="h-px w-12 bg-gym-gold" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl text-white leading-none mb-10">
            ELIGE TU <span className="text-gym-red">PLAN</span>
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`font-body font-700 text-sm uppercase tracking-wider transition-colors ${!annual ? 'text-white' : 'text-white/40'}`}>Mensual</span>
            <button onClick={() => setAnnual(v => !v)}
              className="relative w-14 h-7 rounded-full bg-gym-red/30 border border-gym-red/50 transition-all duration-300">
              <motion.div className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-gym-red"
                animate={{ x: annual ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }} />
            </button>
            <span className={`font-body font-700 text-sm uppercase tracking-wider transition-colors ${annual ? 'text-white' : 'text-white/40'}`}>
              Anual <span className="text-gym-gold text-xs">-20%</span>
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div key={plan.id} {...fade(i * 0.12)}
              className={`relative border-2 ${plan.color} ${plan.featured ? 'bg-gym-red/10 shadow-red-lg scale-[1.03]' : 'bg-white/5'}
                flex flex-col p-8 hover:-translate-y-2 transition-transform duration-300`}>

              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-5 py-1.5 text-xs font-body font-800 uppercase tracking-widest ${
                  plan.featured ? 'bg-gym-red text-white' : 'bg-gym-gold text-gym-black'
                }`}>
                  <Star size={11} fill="currentColor" />
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-display text-3xl text-white tracking-widest mb-1">{plan.name}</h3>
                <div className="h-0.5 w-10 bg-gym-red mb-6" />

                {/* Price */}
                <div className="flex items-end gap-2">
                  <AnimatePresence mode="wait">
                    <motion.div key={annual ? 'ann' : 'mon'}
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.25 }}
                      className="font-display text-6xl text-white leading-none">
                      ${annual ? plan.annual : plan.monthly}
                    </motion.div>
                  </AnimatePresence>
                  <div className="font-body text-white/50 text-sm mb-2">
                    /{annual ? 'año' : 'mes'}
                  </div>
                </div>
                {annual && (
                  <div className="font-body text-gym-gold text-xs mt-1">
                    Equivale a ${Math.round(plan.annual / 12)}/mes — ahorras ${plan.monthly * 12 - plan.annual}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 font-body text-white/80 text-sm">
                    <Check size={16} className="text-gym-red mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
                {plan.missing.map(f => (
                  <li key={f} className="flex items-start gap-3 font-body text-white/25 text-sm line-through">
                    <span className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center text-white/25 text-lg leading-none">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button onClick={() => scrollTo('#contacto')}
                className={`w-full font-body font-800 text-sm py-4 uppercase tracking-widest transition-all duration-200 ${
                  plan.featured
                    ? 'bg-gym-red text-white hover:bg-gym-red-accent'
                    : 'border-2 border-white/30 text-white hover:border-gym-red hover:text-gym-red'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}>
                <span className="flex items-center justify-center gap-2">
                  {plan.featured && <Zap size={14} />}
                  Elegir {plan.name}
                </span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.p {...fade(0.4)} className="text-center font-body text-white/40 text-sm mt-10">
          Todos los planes incluyen período de prueba de 7 días sin compromiso.
        </motion.p>
      </div>

      {/* Bottom cut */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gym-light"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
    </section>
  )
}
