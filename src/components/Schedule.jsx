import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, User } from 'lucide-react'

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const catColor = {
  Fuerza:        'bg-red-900/70 border-red-500/50   text-red-200',
  Cardio:        'bg-orange-900/70 border-orange-500/50 text-orange-200',
  Flexibilidad:  'bg-teal-900/70 border-teal-500/50 text-teal-200',
  'Mente y Cuerpo': 'bg-emerald-900/70 border-emerald-500/50 text-emerald-200',
}

const schedule = {
  '07:00': {
    Lunes:     { name: 'CrossFit',  cat: 'Fuerza',        trainer: 'Carlos M.' },
    Miércoles: { name: 'CrossFit',  cat: 'Fuerza',        trainer: 'Carlos M.' },
    Viernes:   { name: 'CrossFit',  cat: 'Fuerza',        trainer: 'Carlos M.' },
    Sábado:    { name: 'HIIT',      cat: 'Cardio',        trainer: 'Carlos M.' },
  },
  '08:00': {
    Lunes:     { name: 'Yoga',      cat: 'Mente y Cuerpo', trainer: 'Ana R.' },
    Martes:    { name: 'Funcional', cat: 'Fuerza',        trainer: 'Diego R.' },
    Miércoles: { name: 'Yoga',      cat: 'Mente y Cuerpo', trainer: 'Ana R.' },
    Jueves:    { name: 'Funcional', cat: 'Fuerza',        trainer: 'Diego R.' },
    Viernes:   { name: 'Yoga',      cat: 'Mente y Cuerpo', trainer: 'Ana R.' },
    Sábado:    { name: 'Funcional', cat: 'Fuerza',        trainer: 'Diego R.' },
  },
  '09:00': {
    Martes:    { name: 'Spinning',  cat: 'Cardio',        trainer: 'Sofía V.' },
    Jueves:    { name: 'Spinning',  cat: 'Cardio',        trainer: 'Sofía V.' },
    Sábado:    { name: 'Spinning',  cat: 'Cardio',        trainer: 'Sofía V.' },
  },
  '10:00': {
    Lunes:     { name: 'Pilates',   cat: 'Flexibilidad',  trainer: 'Ana R.' },
    Miércoles: { name: 'Pilates',   cat: 'Flexibilidad',  trainer: 'Ana R.' },
    Viernes:   { name: 'Pilates',   cat: 'Flexibilidad',  trainer: 'Ana R.' },
    Domingo:   { name: 'Yoga',      cat: 'Mente y Cuerpo', trainer: 'Ana R.' },
  },
  '18:00': {
    Lunes:     { name: 'HIIT',      cat: 'Cardio',        trainer: 'Carlos M.' },
    Martes:    { name: 'Boxeo',     cat: 'Fuerza',        trainer: 'Miguel T.' },
    Miércoles: { name: 'HIIT',      cat: 'Cardio',        trainer: 'Carlos M.' },
    Jueves:    { name: 'Boxeo',     cat: 'Fuerza',        trainer: 'Miguel T.' },
    Viernes:   { name: 'HIIT',      cat: 'Cardio',        trainer: 'Carlos M.' },
  },
  '19:00': {
    Lunes:     { name: 'Zumba',     cat: 'Cardio',        trainer: 'Sofía V.' },
    Miércoles: { name: 'Zumba',     cat: 'Cardio',        trainer: 'Sofía V.' },
    Viernes:   { name: 'CrossFit',  cat: 'Fuerza',        trainer: 'Carlos M.' },
    Sábado:    { name: 'Zumba',     cat: 'Cardio',        trainer: 'Sofía V.' },
  },
}

const times = Object.keys(schedule)
const catFilters = ['Todas', 'Fuerza', 'Cardio', 'Flexibilidad', 'Mente y Cuerpo']

export default function Schedule() {
  const [filter, setFilter] = useState('Todas')

  return (
    <section id="horarios" className="bg-gym-light py-28 relative overflow-hidden">
      <div className="absolute -left-10 top-0 bottom-0 w-32 bg-gym-red/4" style={{ transform: 'skewX(-6deg)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gym-gold" />
            <span className="font-body font-700 text-gym-gold text-xs uppercase tracking-[0.3em]">Horarios</span>
            <div className="h-px w-12 bg-gym-gold" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl text-gym-black leading-none">
            CALENDARIO <span className="text-gym-red">SEMANAL</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-8">
          {catFilters.map(c => (
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

        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {Object.entries(catColor).map(([cat, cls]) => (
            <div key={cat} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-sm border ${cls}`} />
              <span className="font-body text-gym-dark-gray text-xs">{cat}</span>
            </div>
          ))}
        </div>

        {/* Table — horizontal scroll on mobile */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
          className="overflow-x-auto rounded-none shadow-xl">
          <table className="w-full min-w-[700px] border-collapse bg-gym-black text-sm">
            <thead>
              <tr>
                <th className="p-3 font-body font-700 text-gym-gold uppercase tracking-wider text-left text-xs w-20 border-b border-white/10">
                  Hora
                </th>
                {days.map(d => (
                  <th key={d} className="p-3 font-body font-700 text-white uppercase tracking-wider text-center text-xs border-b border-white/10">
                    {d.slice(0, 3)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.map((time, ti) => (
                <tr key={time} className={ti % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                  <td className="p-3 border-b border-white/5">
                    <div className="flex items-center gap-1.5 text-gym-gold font-body font-700 text-xs">
                      <Clock size={11} />{time}
                    </div>
                  </td>
                  {days.map(day => {
                    const entry = schedule[time]?.[day]
                    const visible = !entry || filter === 'Todas' || entry.cat === filter
                    return (
                      <td key={day} className="p-1.5 border-b border-white/5 text-center">
                        {entry && visible ? (
                          <div className={`border rounded-sm px-2 py-2 ${catColor[entry.cat]} cursor-pointer hover:brightness-125 transition-all duration-200 group`}>
                            <div className="font-body font-800 text-xs leading-tight">{entry.name}</div>
                            <div className="flex items-center justify-center gap-1 mt-1 opacity-70 group-hover:opacity-100">
                              <User size={9} />
                              <span className="font-body text-[9px] leading-none">{entry.trainer}</span>
                            </div>
                          </div>
                        ) : null}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10">
          <p className="font-body text-gym-mid-gray text-sm mb-5">
            ¿Listo para reservar tu lugar? Los cupos son limitados.
          </p>
          <motion.button
            className="bg-gym-red text-white font-body font-800 text-sm px-10 py-4 uppercase tracking-widest"
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(233,30,99,0.6)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { const el = document.querySelector('#contacto'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }) }}>
            Reservar Clase
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gym-black"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
    </section>
  )
}
