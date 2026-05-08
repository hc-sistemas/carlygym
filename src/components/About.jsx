import { motion } from 'framer-motion'
import { Target, Zap, Users, TrendingUp, Award, CheckCircle } from 'lucide-react'

const values = [
  { icon: Target,     label: 'Disciplina',  desc: 'Cada repetición cuenta. Cada día importa.' },
  { icon: Zap,        label: 'Energía',     desc: 'El ambiente que te enciende y no te deja parar.' },
  { icon: Users,      label: 'Comunidad',   desc: 'Crecemos juntos. Tu éxito es nuestro éxito.' },
  { icon: TrendingUp, label: 'Resultados',  desc: 'Métricas reales. Transformaciones visibles.' },
]

const timeline = [
  { year: '2012', text: 'Fundación de Carly Gym con 200m² y una visión grande.' },
  { year: '2015', text: 'Primera expansión: zona cardio y área de clases grupales.' },
  { year: '2018', text: 'Reconocidos como el mejor gimnasio local por 3 años consecutivos.' },
  { year: '2021', text: 'Renovación total: equipamiento de última generación.' },
  { year: '2024', text: 'Superamos 1.500 miembros activos. La familia sigue creciendo.' },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function About() {
  return (
    <section id="nosotros" className="bg-gym-light py-28 relative overflow-hidden">
      {/* Decorative red slab */}
      <div className="absolute -left-20 top-0 bottom-0 w-40 bg-gym-red/5" style={{ transform: 'skewX(-6deg)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div {...fade()} className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gym-gold" />
            <span className="font-body font-700 text-gym-gold text-xs uppercase tracking-[0.3em]">Nuestra Historia</span>
            <div className="h-px w-12 bg-gym-gold" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl text-gym-black leading-none">
            MÁS QUE UN <span className="text-gym-red">GIMNASIO</span>
          </h2>
        </motion.div>

        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left — text */}
          <div>
            <motion.div {...fade(0.1)}
              className="inline-flex items-center gap-2 bg-gym-red text-white font-body font-700 text-xs px-4 py-2 uppercase tracking-widest mb-8">
              <Award size={14} />
              El Gimnasio #1 de la Ciudad
            </motion.div>

            <motion.h3 {...fade(0.2)} className="font-display text-4xl sm:text-5xl text-gym-black leading-tight mb-6">
              FORJAMOS CAMPEONES<br />DESDE 2012
            </motion.h3>

            <motion.p {...fade(0.3)} className="font-body text-gym-dark-gray text-base leading-relaxed mb-5">
              Carly Gym nació con una sola misión: crear el espacio donde los límites no
              existen. Más de una década transformando cuerpos, mentes y vidas en nuestra ciudad.
            </motion.p>
            <motion.p {...fade(0.35)} className="font-body text-gym-mid-gray text-base leading-relaxed mb-8">
              Nuestro equipo de entrenadores certificados, instalaciones de primer nivel y
              metodologías probadas te dan todo lo que necesitas para convertirte en la mejor
              versión de ti mismo.
            </motion.p>

            {/* Checkmarks */}
            <motion.ul {...fade(0.4)} className="space-y-3">
              {[
                'Entrenadores certificados internacionalmente',
                'Equipamiento de última generación',
                'Programas personalizados de nutrición',
                'Acceso a comunidad privada online',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 font-body text-gym-dark-gray font-600">
                  <CheckCircle size={18} className="text-gym-red flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — visual + timeline */}
          <div className="space-y-6">
            {/* Visual card */}
            <motion.div {...fade(0.15)}
              className="relative bg-gym-black rounded-none overflow-hidden h-64">
              <div className="absolute inset-0 diagonal-lines opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center gap-6">
                {[
                  { n: '1,500+', l: 'Miembros' },
                  { n: '45',     l: 'Clases/sem' },
                  { n: '12',     l: 'Años' },
                  { n: '98%',    l: 'Satisfacción' },
                ].map(s => (
                  <div key={s.l} className="text-center">
                    <div className="font-display text-4xl text-gym-red">{s.n}</div>
                    <div className="font-body text-white/60 text-xs uppercase tracking-wider mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gym-red" />
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-6 border-l-2 border-gym-red/30 space-y-5">
              {timeline.map((t, i) => (
                <motion.div key={t.year} {...fade(0.2 + i * 0.08)} className="relative">
                  <div className="absolute -left-[1.82rem] top-1.5 w-3 h-3 rounded-full bg-gym-red ring-4 ring-gym-red/20" />
                  <div className="font-display text-gym-red text-2xl leading-none">{t.year}</div>
                  <p className="font-body text-gym-dark-gray text-sm mt-1 leading-relaxed">{t.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div key={v.label} {...fade(i * 0.1)}
              className="group bg-white border border-gray-200 p-7 hover:border-gym-red hover:shadow-red-glow transition-all duration-300 cursor-default">
              <v.icon className="text-gym-red mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="font-display text-2xl text-gym-black mb-2">{v.label}</h4>
              <p className="font-body text-gym-mid-gray text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom cut */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gym-black"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
    </section>
  )
}
