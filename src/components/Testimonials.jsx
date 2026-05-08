import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Martina López',
    time: '2 años en Carly Gym',
    plan: 'Plan Élite',
    initials: 'ML',
    gradient: 'from-rose-600 to-red-800',
    stars: 5,
    result: 'Perdí 18kg en 6 meses',
    text: 'Carly Gym cambió mi vida completamente. No solo bajé de peso — descubrí una versión de mí que no sabía que existía. Los entrenadores te tratan como si fueras el único miembro del gym.',
  },
  {
    name: 'Roberto Sánchez',
    time: '3 años en Carly Gym',
    plan: 'Plan Pro',
    initials: 'RS',
    gradient: 'from-blue-600 to-blue-900',
    stars: 5,
    result: 'Aumenté 8kg de músculo',
    text: 'Vine buscando ganar músculo y encontré mucho más. La comunidad aquí es increíble. Es como una familia que te exige y celebra contigo. Las clases de CrossFit con Carlos son brutales en el mejor sentido.',
  },
  {
    name: 'Valentina Cruz',
    time: '1 año en Carly Gym',
    plan: 'Plan Pro',
    initials: 'VC',
    gradient: 'from-purple-600 to-purple-900',
    stars: 5,
    result: 'Completé mi primera carrera 5K',
    text: 'Empecé sin poder correr 5 minutos seguidos. Hoy completé mi primera carrera de 5K gracias a las clases de HIIT y Funcional. El programa de seguimiento nutricional fue clave para mis resultados.',
  },
  {
    name: 'Andrés Morales',
    time: '4 años en Carly Gym',
    plan: 'Plan Élite',
    initials: 'AM',
    gradient: 'from-emerald-600 to-emerald-900',
    stars: 5,
    result: 'Campeonato regional de boxeo',
    text: 'Miguel me llevó de cero a competidor en dos años. Las instalaciones son de primer nivel y el ambiente te motiva a dar siempre el 100%. No cambiaría este lugar por ningún otro.',
  },
  {
    name: 'Carmen Jiménez',
    time: '18 meses en Carly Gym',
    plan: 'Plan Básico',
    initials: 'CJ',
    gradient: 'from-amber-600 to-orange-900',
    stars: 5,
    result: 'Alivié dolor crónico de espalda',
    text: 'Vine con dolor crónico de espalda y los médicos me habían dicho que no podía hacer ejercicio. Las clases de Pilates y Yoga con Ana transformaron mi calidad de vida. Es un milagro lo que logramos juntas.',
  },
]

export default function Testimonials() {
  const [idx, setIdx]     = useState(0)
  const [dir, setDir]     = useState(1)

  const go = useCallback((direction) => {
    setDir(direction)
    setIdx(i => (i + direction + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const id = setInterval(() => go(1), 5500)
    return () => clearInterval(id)
  }, [go])

  const t = testimonials[idx]

  const variants = {
    enter:   (d) => ({ opacity: 0, x: d > 0 ? 80  : -80 }),
    center:  { opacity: 1, x: 0 },
    exit:    (d) => ({ opacity: 0, x: d > 0 ? -80 : 80  }),
  }

  return (
    <section className="bg-gym-black py-28 relative overflow-hidden">
      <div className="absolute inset-0 diagonal-lines opacity-40" />
      <div className="absolute top-0 inset-x-0 h-16 bg-gym-light"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
      {/* Red radial glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #E91E63 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gym-gold" />
            <span className="font-body font-700 text-gym-gold text-xs uppercase tracking-[0.3em]">Testimonios</span>
            <div className="h-px w-12 bg-gym-gold" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl text-white leading-none">
            ELLOS YA <span className="text-gym-red">LO LOGRARON</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div key={idx} custom={dir}
              variants={variants}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 border border-white/10 p-8 sm:p-12">

              {/* Quote icon */}
              <Quote className="text-gym-red/40 mb-6" size={48} />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={18} className="text-gym-gold" fill="#D4A017" />
                ))}
              </div>

              {/* Result badge */}
              <div className="inline-block bg-gym-red text-white font-body font-800 text-xs px-4 py-1.5 uppercase tracking-widest mb-6">
                {t.result}
              </div>

              {/* Quote text */}
              <p className="font-body text-white/85 text-xl sm:text-2xl leading-relaxed mb-10 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-b ${t.gradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="font-display text-2xl text-white">{t.initials}</span>
                </div>
                <div>
                  <div className="font-body font-800 text-white text-base">{t.name}</div>
                  <div className="font-body text-white/50 text-sm">{t.time}</div>
                  <div className="font-body text-gym-red text-xs font-700 uppercase tracking-wider mt-0.5">{t.plan}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                  className={`h-1 rounded-full transition-all duration-300 ${i === idx ? 'w-8 bg-gym-red' : 'w-3 bg-white/20 hover:bg-white/40'}`} />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-3">
              <motion.button onClick={() => go(-1)}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-gym-red hover:text-gym-red transition-colors"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button onClick={() => go(1)}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-gym-red hover:text-gym-red transition-colors"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gym-light"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
    </section>
  )
}
