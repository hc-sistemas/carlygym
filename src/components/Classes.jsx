import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dumbbell, Bike, Leaf, Shield, Music, Activity, Layers, Zap, Clock, BarChart2, User } from 'lucide-react'

const categories = ['Todos', 'Fuerza', 'Cardio', 'Flexibilidad', 'Mente y Cuerpo']

const classes = [
  {
    name: 'CrossFit', icon: Dumbbell, cat: 'Fuerza',
    duration: '60 min', level: 'Avanzado',
    schedule: 'Lun·Mié·Vie 7:00AM',
    instructor: 'Carlos Méndez',
    desc: 'Entrenamiento funcional de alta intensidad que combina levantamiento olímpico, gimnasia y cardio.',
    color: 'from-red-900/40 to-gym-black',
  },
  {
    name: 'Spinning', icon: Bike, cat: 'Cardio',
    duration: '45 min', level: 'Todos',
    schedule: 'Mar·Jue·Sáb 9:00AM',
    instructor: 'Sofía Vargas',
    desc: 'Ciclismo indoor intenso con música motivadora. Quema calorías y mejora tu resistencia cardiovascular.',
    color: 'from-orange-900/40 to-gym-black',
  },
  {
    name: 'Yoga', icon: Leaf, cat: 'Mente y Cuerpo',
    duration: '60 min', level: 'Principiante',
    schedule: 'Lun·Mié·Vie 8:00AM',
    instructor: 'Ana Rodríguez',
    desc: 'Equilibra cuerpo y mente con posturas que mejoran la flexibilidad, postura y bienestar mental.',
    color: 'from-emerald-900/40 to-gym-black',
  },
  {
    name: 'Boxeo', icon: Shield, cat: 'Fuerza',
    duration: '50 min', level: 'Intermedio',
    schedule: 'Mar·Jue 6:00PM',
    instructor: 'Miguel Torres',
    desc: 'Técnica de boxeo real. Mejora coordinación, velocidad de reacción y quema calorías de forma explosiva.',
    color: 'from-red-800/40 to-gym-black',
  },
  {
    name: 'Zumba', icon: Music, cat: 'Cardio',
    duration: '55 min', level: 'Todos',
    schedule: 'Lun·Mié·Sáb 7:00PM',
    instructor: 'Sofía Vargas',
    desc: 'Cardio bailando. Rutinas de baile latinas que convierten el ejercicio en una fiesta energizante.',
    color: 'from-purple-900/40 to-gym-black',
  },
  {
    name: 'Funcional', icon: Activity, cat: 'Fuerza',
    duration: '50 min', level: 'Intermedio',
    schedule: 'Mar·Jue·Sáb 8:00AM',
    instructor: 'Diego Ramírez',
    desc: 'Ejercicios que imitan movimientos cotidianos. Fortalece el core y mejora la movilidad funcional.',
    color: 'from-blue-900/40 to-gym-black',
  },
  {
    name: 'Pilates', icon: Layers, cat: 'Flexibilidad',
    duration: '60 min', level: 'Todos',
    schedule: 'Lun·Mié·Vie 10:00AM',
    instructor: 'Ana Rodríguez',
    desc: 'Control muscular profundo que tonifica, mejora la postura y alivia dolores de espalda.',
    color: 'from-teal-900/40 to-gym-black',
  },
  {
    name: 'HIIT', icon: Zap, cat: 'Cardio',
    duration: '40 min', level: 'Avanzado',
    schedule: 'Lun·Mié·Vie 6:00PM',
    instructor: 'Carlos Méndez',
    desc: 'Intervalos de alta intensidad. Maximiza la quema calórica en tiempo mínimo con efecto afterburn.',
    color: 'from-yellow-900/40 to-gym-black',
  },
]

const levelColor = { Principiante: 'text-emerald-400', Intermedio: 'text-yellow-400', Avanzado: 'text-gym-red', Todos: 'text-gym-gold' }

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }
const card = {
  hidden:   { opacity: 0, scale: 0.94, y: 20 },
  visible:  { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  exit:     { opacity: 0, scale: 0.94, transition: { duration: 0.3 } },
}

export default function Classes() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? classes : classes.filter(c => c.cat === active)

  return (
    <section id="clases" className="bg-gym-light py-28 relative overflow-hidden">
      <div className="absolute -right-20 top-0 bottom-0 w-40 bg-gym-red/4" style={{ transform: 'skewX(-6deg)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gym-gold" />
            <span className="font-body font-700 text-gym-gold text-xs uppercase tracking-[0.3em]">Nuestras Clases</span>
            <div className="h-px w-12 bg-gym-gold" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl text-gym-black leading-none">
            ENCUENTRA TU <span className="text-gym-red">PASIÓN</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`font-body font-700 text-sm px-6 py-2.5 uppercase tracking-wider border-2 transition-all duration-200 ${
                active === cat
                  ? 'bg-gym-red border-gym-red text-white shadow-red-glow'
                  : 'border-gym-dark-gray/30 text-gym-dark-gray hover:border-gym-red hover:text-gym-red'
              }`}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={active} variants={container} initial="hidden" animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map(cls => (
              <motion.div key={cls.name} variants={card} layout
                className="group relative overflow-hidden bg-gym-black cursor-pointer">
                {/* Bg gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${cls.color} opacity-80 group-hover:opacity-40 transition-opacity duration-400`} />

                {/* Normal state */}
                <div className="relative z-10 p-6 transition-opacity duration-300 group-hover:opacity-0">
                  <cls.icon className="text-gym-red mb-4" size={36} />
                  <h3 className="font-display text-3xl text-white mb-3">{cls.name}</h3>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-white/60 text-xs font-body">
                      <Clock size={11} />{cls.duration}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-body">
                      <BarChart2 size={11} className="text-white/60" />
                      <span className={levelColor[cls.level]}>{cls.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-xs font-body">
                      <User size={11} />{cls.instructor}
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 z-20 bg-gym-red/95 flex flex-col justify-between p-6
                  opacity-0 group-hover:opacity-100 transition-all duration-350 translate-y-4 group-hover:translate-y-0">
                  <div>
                    <cls.icon className="text-white/80 mb-3" size={28} />
                    <h3 className="font-display text-3xl text-white mb-2">{cls.name}</h3>
                    <p className="font-body text-white/85 text-sm leading-relaxed">{cls.desc}</p>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs font-body mb-4">{cls.schedule}</div>
                    <button className="w-full border-2 border-white text-white font-body font-800 text-xs py-3 uppercase tracking-widest hover:bg-white hover:text-gym-red transition-colors duration-200">
                      Reservar Clase
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom cut */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gym-black"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
    </section>
  )
}
