import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dumbbell, Users, Bike, Layers, Shield, Leaf, Coffee, X } from 'lucide-react'

const categories = ['Todo', 'Pesas', 'Clases', 'Cardio', 'Otros']

const items = [
  {
    id: 1, cat: 'Pesas', label: 'Sala de Pesas',
    sub: 'Equipamiento olímpico de primera línea',
    icon: Dumbbell, gradient: 'from-red-900 via-red-800 to-gym-black',
    size: 'col-span-2 row-span-2',
  },
  {
    id: 2, cat: 'Clases', label: 'Clases Grupales',
    sub: 'Espacio amplio con sonido premium',
    icon: Users, gradient: 'from-purple-900 via-purple-800 to-gym-black',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 3, cat: 'Cardio', label: 'Zona Cardio',
    sub: 'Cardio con vistas panorámicas',
    icon: Bike, gradient: 'from-orange-900 via-orange-800 to-gym-black',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 4, cat: 'Clases', label: 'Sala de Yoga',
    sub: 'Ambiente sereno y lumínico',
    icon: Leaf, gradient: 'from-emerald-900 via-emerald-800 to-gym-black',
    size: 'col-span-1 row-span-2',
  },
  {
    id: 5, cat: 'Pesas', label: 'Zona Funcional',
    sub: 'Poleas, racks y battle ropes',
    icon: Layers, gradient: 'from-blue-900 via-blue-800 to-gym-black',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 6, cat: 'Clases', label: 'Ring de Boxeo',
    sub: 'Reglamentario con equipo completo',
    icon: Shield, gradient: 'from-slate-700 via-slate-800 to-gym-black',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 7, cat: 'Otros', label: 'Área de Descanso',
    sub: 'Zona de recuperación y nutrición',
    icon: Coffee, gradient: 'from-amber-900 via-amber-800 to-gym-black',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 8, cat: 'Cardio', label: 'Spinning Studio',
    sub: '40 bicicletas con sistema de sonido envolvente',
    icon: Bike, gradient: 'from-pink-900 via-pink-800 to-gym-black',
    size: 'col-span-1 row-span-1',
  },
]

const fade = (d = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay: d },
})

export default function Gallery() {
  const [filter, setFilter]   = useState('Todo')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'Todo' ? items : items.filter(it => it.cat === filter)

  return (
    <section id="galeria" className="bg-gym-light py-28 relative overflow-hidden">
      <div className="absolute -right-10 bottom-0 top-0 w-40 bg-gym-red/4" style={{ transform: 'skewX(-6deg)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div {...fade()} className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gym-gold" />
            <span className="font-body font-700 text-gym-gold text-xs uppercase tracking-[0.3em]">Instalaciones</span>
            <div className="h-px w-12 bg-gym-gold" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl text-gym-black leading-none">
            NUESTRO <span className="text-gym-red">ESPACIO</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div {...fade(0.1)} className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`font-body font-700 text-xs px-5 py-2 uppercase tracking-wider border-2 transition-all duration-200 ${
                filter === c
                  ? 'bg-gym-red border-gym-red text-white'
                  : 'border-gym-dark-gray/30 text-gym-dark-gray hover:border-gym-red hover:text-gym-red'
              }`}>
              {c}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <AnimatePresence mode="wait">
          <motion.div key={filter}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4">
            {filtered.map((item, i) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`${item.size} relative overflow-hidden cursor-pointer group`}
                onClick={() => setLightbox(item)}>
                <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <item.icon className="text-white/20 mb-3" size={48} />
                  <h3 className="font-display text-2xl text-white text-center px-4">{item.label}</h3>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gym-red/90 flex flex-col items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-all duration-350 translate-y-3 group-hover:translate-y-0">
                  <item.icon className="text-white mb-3" size={40} />
                  <h3 className="font-display text-2xl text-white text-center px-4 mb-2">{item.label}</h3>
                  <p className="font-body text-white/80 text-sm text-center px-6">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}>
            <motion.div className="relative max-w-xl w-full"
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              onClick={e => e.stopPropagation()}>
              <div className={`h-80 bg-gradient-to-b ${lightbox.gradient} flex flex-col items-center justify-center`}>
                <lightbox.icon className="text-white/30 mb-4" size={80} />
                <h2 className="font-display text-5xl text-white">{lightbox.label}</h2>
              </div>
              <div className="bg-gym-black p-6">
                <p className="font-body text-white/70 text-base">{lightbox.sub}</p>
              </div>
              <button className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                onClick={() => setLightbox(null)}>
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gym-black"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
    </section>
  )
}
