import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin } from 'lucide-react'

const trainers = [
  {
    name: 'Carlos Méndez',
    role: 'CrossFit & HIIT',
    exp: '8 años de experiencia',
    certs: ['CrossFit Level 3', 'NSCA-CSCS', 'Nutrición Deportiva'],
    bio: 'Ex-atleta profesional convertido en entrenador de élite. Especialista en rendimiento explosivo y transformaciones físicas extremas. Ha trabajado con más de 400 atletas competitivos.',
    initials: 'CM',
    gradient: 'from-red-800 to-red-950',
  },
  {
    name: 'Ana Rodríguez',
    role: 'Yoga & Pilates',
    exp: '10 años de experiencia',
    certs: ['RYT-500 Yoga Alliance', 'STOTT Pilates', 'Anatomía Funcional'],
    bio: 'Maestra certificada internacionalmente. Fusiona la sabiduría del yoga tradicional con técnicas modernas de movimiento consciente para resultados integrales cuerpo-mente.',
    initials: 'AR',
    gradient: 'from-emerald-800 to-emerald-950',
  },
  {
    name: 'Miguel Torres',
    role: 'Boxeo & Artes Marciales',
    exp: '12 años de experiencia',
    certs: ['Federación Nacional de Boxeo', 'Defensa Personal', 'Acondicionamiento Físico'],
    bio: 'Campeón regional de boxeo amateur. Combina técnica depurada con acondicionamiento funcional. Sus clases son intensas, precisas y adictivas.',
    initials: 'MT',
    gradient: 'from-blue-800 to-blue-950',
  },
  {
    name: 'Sofía Vargas',
    role: 'Spinning & Zumba',
    exp: '6 años de experiencia',
    certs: ['AFAA Group Fitness', 'Zumba Instructor', 'Cycling Certified'],
    bio: 'La energía que necesitas en cada clase. Sofía convierte el ejercicio en una experiencia que quieres repetir todos los días. Especialista en motivación y adherencia al entrenamiento.',
    initials: 'SV',
    gradient: 'from-purple-800 to-purple-950',
  },
  {
    name: 'Diego Ramírez',
    role: 'Fuerza & Funcional',
    exp: '9 años de experiencia',
    certs: ['NASM-CPT', 'FMS Specialist', 'Powerlifting Coach'],
    bio: 'Experto en periodización y desarrollo de fuerza. Sus programas personalizados han ayudado a cientos de miembros a superar mesetas y alcanzar nuevos máximos personales.',
    initials: 'DR',
    gradient: 'from-orange-800 to-orange-950',
  },
]

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
})

export default function Trainers() {
  return (
    <section id="entrenadores" className="bg-gym-black py-28 relative overflow-hidden">
      <div className="absolute inset-0 diagonal-lines opacity-50" />
      <div className="absolute top-0 inset-x-0 h-16 bg-gym-light"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div {...fade()} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gym-gold" />
            <span className="font-body font-700 text-gym-gold text-xs uppercase tracking-[0.3em]">El Equipo</span>
            <div className="h-px w-12 bg-gym-gold" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl text-white leading-none">
            NUESTROS <span className="text-gym-red">EXPERTOS</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trainers.map((t, i) => (
            <motion.div key={t.name} {...fade(i * 0.1)} className="flip-card h-96">
              <div className="flip-inner h-full">

                {/* Front */}
                <div className="flip-front h-full bg-white/5 border border-white/10 flex flex-col overflow-hidden">
                  <div className={`flex-1 bg-gradient-to-b ${t.gradient} flex items-center justify-center`}>
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full border-4 border-gym-red flex items-center justify-center bg-gym-black/60 mb-4">
                        <span className="font-display text-4xl text-white">{t.initials}</span>
                      </div>
                      <div className="w-8 h-0.5 bg-gym-red mx-auto" />
                    </div>
                  </div>
                  <div className="p-5 bg-gym-black/80">
                    <h3 className="font-display text-2xl text-white leading-none">{t.name}</h3>
                    <p className="font-body text-gym-red text-sm font-700 uppercase tracking-wide mt-1">{t.role}</p>
                    <p className="font-body text-white/40 text-xs mt-1">{t.exp}</p>
                    <p className="font-body text-white/50 text-xs mt-3 italic">Pasa el cursor para ver más</p>
                  </div>
                </div>

                {/* Back */}
                <div className="flip-back h-full bg-gym-red flex flex-col p-6 justify-between">
                  <div>
                    <div className="w-12 h-0.5 bg-white/50 mb-4" />
                    <h3 className="font-display text-2xl text-white mb-1">{t.name}</h3>
                    <p className="font-body text-white/70 text-xs uppercase tracking-wider mb-4">{t.role}</p>
                    <p className="font-body text-white/90 text-sm leading-relaxed mb-5">{t.bio}</p>
                    <div className="space-y-1.5">
                      {t.certs.map(c => (
                        <div key={c} className="flex items-center gap-2 font-body text-white/80 text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-white/20">
                    {[Instagram, Twitter, Linkedin].map((Icon, j) => (
                      <button key={j} className="w-8 h-8 border border-white/40 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors">
                        <Icon size={14} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gym-light"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
    </section>
  )
}
