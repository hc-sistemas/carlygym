import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Dumbbell, ChevronRight, Play } from 'lucide-react'

function Counter({ target, suffix }) {
  const [n, setN]           = useState(0)
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!active) return
    let cur = 0
    const step = target / 60
    const id = setInterval(() => {
      cur += step
      if (cur >= target) { setN(target); clearInterval(id) } else setN(Math.floor(cur))
    }, 24)
    return () => clearInterval(id)
  }, [active, target])

  return <span ref={ref}>{n}{suffix}</span>
}

const stats = [
  { value: 1500, suffix: '+', label: 'Miembros Activos'    },
  { value: 45,   suffix: '',  label: 'Clases Semanales'    },
  { value: 12,   suffix: '',  label: 'Años de Experiencia' },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }
const fadeLeft = {
  hidden:  { opacity: 0, x: -35 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-[#1a1a1a] overflow-hidden flex flex-col"
      style={{ minHeight: '100svh' }}>

      {/* ── Arcos circulares decorativos (fondo izquierdo) ── */}
      <div className="absolute left-[-120px] bottom-[-80px] pointer-events-none">
        {[320, 440, 560, 680, 800].map((r) => (
          <div key={r}
            className="absolute rounded-full border border-white/[0.04]"
            style={{
              width: r, height: r,
              left: -r / 2, bottom: -r / 2,
            }} />
        ))}
      </div>

      {/* ── Dot grid decorativo (esquina inferior izquierda) ── */}
      <div className="absolute bottom-20 left-12 pointer-events-none">
        {[...Array(4)].map((_, row) => (
          <div key={row} className="flex gap-3 mb-3">
            {[...Array(6)].map((_, col) => (
              <div key={col} className="w-1 h-1 rounded-full bg-white/15" />
            ))}
          </div>
        ))}
      </div>

      {/* ── Dot grid decorativo (esquina inferior derecha) ── */}
      <div className="absolute bottom-24 right-6 lg:right-[calc(42%+24px)] pointer-events-none">
        {[...Array(4)].map((_, row) => (
          <div key={row} className="flex gap-3 mb-3">
            {[...Array(5)].map((_, col) => (
              <div key={col} className="w-1 h-1 rounded-full bg-white/12" />
            ))}
          </div>
        ))}
      </div>

      {/* ══════════════════════════════
          GRID PRINCIPAL
      ══════════════════════════════ */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-24 pb-8">
          <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-10 xl:gap-16 items-center">

            {/* ── COLUMNA IZQUIERDA: texto ── */}
            <motion.div variants={stagger} initial="hidden" animate="visible">

              {/* Badge */}
              <motion.div variants={fadeLeft} className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2.5 bg-gym-red/12 border border-gym-red/30 px-4 py-2 w-fit">
                  <Dumbbell size={13} className="text-gym-red" />
                  <span className="font-body font-700 text-gym-red text-[11px] uppercase tracking-[0.28em]">
                    Carly Gym · Est. 2012
                  </span>
                </div>
              </motion.div>

              {/* H1 */}
              <motion.h1 variants={fadeLeft} className="font-display leading-[0.9] mb-6">
                <span className="block text-[3.8rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] text-gym-red italic">
                  CARLY GYM
                </span>
                <span className="block text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] text-white tracking-wide">
                  TRANSFORMA TU CUERPO
                </span>
              </motion.h1>

              {/* Descripción */}
              <motion.p variants={fadeLeft}
                className="font-body text-white/55 text-base sm:text-lg leading-relaxed mb-10 max-w-[420px]">
                Entrenamiento de élite, instalaciones de última generación y una
                comunidad que te impulsa a superar cada barrera todos los días.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeLeft} className="flex flex-wrap items-center gap-5 mb-14">
                <motion.button
                  onClick={() => scrollTo('#planes')}
                  className="bg-gym-red text-white font-body font-800 text-sm px-9 py-3.5 uppercase tracking-widest"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(233,30,99,0.6)' }}
                  whileTap={{ scale: 0.96 }}>
                  ÚNETE AHORA
                </motion.button>

                <button onClick={() => scrollTo('#clases')}
                  className="group flex items-center gap-2.5 font-body font-700 text-white/50 hover:text-white text-sm uppercase tracking-wider transition-colors">
                  <span className="flex gap-0.5 text-gym-red">
                    <ChevronRight size={12} />
                    <ChevronRight size={12} />
                    <ChevronRight size={12} />
                  </span>
                  Ver Clases
                </button>
              </motion.div>

              {/* Navegación play */}
              <motion.div variants={fadeLeft} className="flex items-center gap-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`flex items-center gap-1 ${i === 0 ? 'text-gym-red' : 'text-white/25'}`}>
                    <Play size={10} fill="currentColor" />
                  </div>
                ))}
                <span className="font-body text-white/30 text-xs ml-2">www.carlygym.com</span>
              </motion.div>
            </motion.div>

            {/* ── COLUMNA DERECHA: imagen ── */}
            <motion.div
              className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>

              {/* Marco rojo superior */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gym-red z-10" />

              {/* Imagen */}
              <img
                src="/hero-bg.png"
                alt="Carly Gym"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />

              {/* Overlay sutil en bordes */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#1a1a1a]/20" />

              {/* Línea roja lateral izquierda */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gym-red" />
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── BARRA DE STATS ── */}
      <motion.div
        className="relative z-10 bg-[#111]/90 backdrop-blur-md border-t border-white/[0.06]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-5 grid grid-cols-3 divide-x divide-white/[0.08]">
          {stats.map(s => (
            <div key={s.label} className="text-center px-4">
              <div className="font-display text-3xl sm:text-4xl text-gym-red leading-none">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="font-body text-white/40 text-[9px] sm:text-[11px] uppercase tracking-wider mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Corte diagonal */}
      <div className="absolute bottom-0 inset-x-0 h-14 bg-gym-light pointer-events-none"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
    </section>
  )
}
