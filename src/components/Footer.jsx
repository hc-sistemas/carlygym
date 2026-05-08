import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

function RunnerSVG() {
  return (
    <svg width="30" height="30" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="52" cy="12" r="9" fill="#E91E63"/>
      <path d="M47 21 C42 30 36 44 35 54 L44 56 C44 47 49 34 54 24 Z" fill="#E91E63"/>
      <path d="M44 56 C38 68 30 78 22 88 L28 93 C37 83 46 72 52 60 Z" fill="#E91E63"/>
      <path d="M44 56 C50 66 56 76 62 84 L68 80 C62 71 55 60 48 50 Z" fill="#E91E63"/>
      <path d="M46 28 C38 32 28 36 18 38 L19 46 C30 44 40 40 48 35 Z" fill="#E91E63"/>
      <path d="M52 26 C58 22 64 16 70 12 L67 5 C60 9 55 15 49 20 Z" fill="#E91E63"/>
    </svg>
  )
}

function GoldDots() {
  return (
    <div className="flex flex-col gap-0.5">
      {[0,1,2].map(i => (
        <div key={i} className="flex gap-0.5">
          {[0,1,2,3].map(j => (
            <div key={j} className="w-0.5 h-0.5 rounded-full bg-gym-gold opacity-60" />
          ))}
        </div>
      ))}
    </div>
  )
}

const classes = ['CrossFit', 'Spinning', 'Yoga', 'Boxeo', 'Zumba', 'Funcional', 'Pilates', 'HIIT']
const links   = [
  { label: 'Inicio',       href: '#inicio'       },
  { label: 'Nosotros',     href: '#nosotros'     },
  { label: 'Planes',       href: '#planes'       },
  { label: 'Entrenadores', href: '#entrenadores' },
  { label: 'Horarios',     href: '#horarios'     },
  { label: 'Galería',      href: '#galeria'      },
  { label: 'Contacto',     href: '#contacto'     },
]
const socials = [
  { label: 'IG', hover: 'hover:bg-pink-600',    title: 'Instagram' },
  { label: 'FB', hover: 'hover:bg-blue-600',    title: 'Facebook'  },
  { label: 'TT', hover: 'hover:bg-zinc-700',    title: 'TikTok'    },
  { label: 'WA', hover: 'hover:bg-emerald-600', title: 'WhatsApp'  },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function Footer() {
  const [email, setEmail]   = useState('')
  const [subbed, setSubbed] = useState(false)

  const handleSub = (e) => {
    e.preventDefault()
    if (email.includes('@')) setSubbed(true)
  }

  return (
    <footer className="bg-gym-black relative overflow-hidden">
      {/* Gold decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gym-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <RunnerSVG />
              <div className="flex items-center gap-1.5">
                <span className="font-display text-2xl text-white leading-none">CARLY</span>
                <div className="flex flex-col items-center gap-0.5">
                  <GoldDots />
                  <span className="font-display text-lg text-gym-red leading-none">GYM</span>
                  <GoldDots />
                </div>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
              Transformando cuerpos y vidas desde 2012. El gimnasio premium de tu ciudad con una comunidad que te impulsa cada día.
            </p>
            <div className="flex gap-2">
              {socials.map(s => (
                <button key={s.label} title={s.title}
                  className={`w-9 h-9 border border-white/15 flex items-center justify-center font-display text-xs text-white/50 hover:text-white ${s.hover} border-transparent transition-all duration-200`}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 2 — Classes */}
          <div>
            <h4 className="font-display text-xl text-white tracking-widest mb-5">CLASES</h4>
            <div className="h-0.5 w-8 bg-gym-red mb-5" />
            <ul className="space-y-2.5">
              {classes.map(c => (
                <li key={c}>
                  <button onClick={() => scrollTo('#clases')}
                    className="font-body text-white/50 text-sm hover:text-gym-red transition-colors duration-200 flex items-center gap-2 group">
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 text-gym-red" />
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Links */}
          <div>
            <h4 className="font-display text-xl text-white tracking-widest mb-5">LINKS RÁPIDOS</h4>
            <div className="h-0.5 w-8 bg-gym-red mb-5" />
            <ul className="space-y-2.5">
              {links.map(l => (
                <li key={l.href}>
                  <button onClick={() => scrollTo(l.href)}
                    className="font-body text-white/50 text-sm hover:text-gym-red transition-colors duration-200 flex items-center gap-2 group">
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0 text-gym-red" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + Newsletter */}
          <div>
            <h4 className="font-display text-xl text-white tracking-widest mb-5">CONTACTO</h4>
            <div className="h-0.5 w-8 bg-gym-red mb-5" />
            <div className="space-y-3 mb-8">
              {[
                { icon: MapPin, text: 'Av. Fitness 1234, Centro' },
                { icon: Phone,  text: '+1 (555) 000-1234'        },
                { icon: Mail,   text: 'hola@carlygym.com'        },
              ].map(i => (
                <div key={i.text} className="flex items-center gap-3 font-body text-white/50 text-sm">
                  <i.icon size={13} className="text-gym-red flex-shrink-0" />
                  {i.text}
                </div>
              ))}
            </div>

            <div className="font-display text-lg text-white mb-3 tracking-wider">NEWSLETTER</div>
            {subbed ? (
              <p className="font-body text-gym-red text-sm">¡Gracias por suscribirte!</p>
            ) : (
              <form onSubmit={handleSub} className="flex">
                <input type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)}
                  required className="flex-1 bg-white/5 border border-white/15 text-white font-body text-sm px-3 py-2.5 outline-none focus:border-gym-red placeholder:text-white/25 transition-colors" />
                <motion.button type="submit" className="bg-gym-red text-white px-4 flex items-center"
                  whileHover={{ backgroundColor: '#FF4081' }} whileTap={{ scale: 0.95 }}>
                  <ArrowRight size={16} />
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs text-center">
            © {new Date().getFullYear()} Carly Gym. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {['Política de Privacidad', 'Términos de Uso', 'Cookies'].map(l => (
              <button key={l} className="font-body text-white/30 text-xs hover:text-white/60 transition-colors">{l}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Gold line at very bottom */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gym-gold/40 to-transparent" />
    </footer>
  )
}
