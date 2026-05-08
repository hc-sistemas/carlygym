import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio',        href: '#inicio' },
  { label: 'Nosotros',      href: '#nosotros' },
  { label: 'Planes',        href: '#planes' },
  { label: 'Clases',        href: '#clases' },
  { label: 'Entrenadores',  href: '#entrenadores' },
  { label: 'Contacto',      href: '#contacto' },
]

function RunnerSVG({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <div key={j} className="w-0.5 h-0.5 rounded-full bg-gym-gold opacity-80" />
          ))}
        </div>
      ))}
    </div>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <RunnerSVG size={38} />
      <div className="flex items-center gap-1.5">
        <span className="font-display text-[2rem] leading-none text-white tracking-wider">CARLY</span>
        <div className="flex flex-col items-center gap-1">
          <GoldDots />
          <span className="font-display text-[1.4rem] leading-none text-gym-red tracking-widest">GYM</span>
          <GoldDots />
        </div>
      </div>
    </div>
  )
}

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => { setOpen(false); scrollTo(href) }

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled ? 'bg-gym-black/96 backdrop-blur-md shadow-xl' : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <button onClick={() => handleNav('#inicio')} className="focus:outline-none">
            <Logo />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(l => (
              <button key={l.href} onClick={() => handleNav(l.href)}
                className="font-body font-700 text-sm text-white/75 hover:text-gym-red-accent uppercase tracking-wider transition-colors duration-200">
                {l.label}
              </button>
            ))}
            <motion.button
              onClick={() => handleNav('#planes')}
              className="ml-2 bg-gym-red text-white font-body font-800 text-sm px-7 py-2.5 uppercase tracking-widest transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(233,30,99,0.6)' }}
              whileTap={{ scale: 0.95 }}>
              Únete Ahora
            </motion.button>
          </nav>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-white p-2 z-50 relative" onClick={() => setOpen(v => !v)}>
            <AnimatePresence mode="wait" initial={false}>
              {open
                ? <motion.span key="x"   initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={26} /></motion.span>
                : <motion.span key="men" initial={{ rotate: 90,  opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={26} /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-gym-black flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}>
            {navLinks.map((l, i) => (
              <motion.button key={l.href} onClick={() => handleNav(l.href)}
                className="font-display text-5xl text-white hover:text-gym-red transition-colors tracking-widest"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}>
                {l.label}
              </motion.button>
            ))}
            <motion.div className="mt-4 w-16 h-0.5 bg-gym-gold" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4 }} />
            <motion.button
              onClick={() => handleNav('#planes')}
              className="mt-2 bg-gym-red text-white font-body font-800 text-lg px-12 py-4 uppercase tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              whileTap={{ scale: 0.95 }}>
              Únete Ahora
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
