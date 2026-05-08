import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react'

const plans = ['Básico', 'Pro', 'Élite', 'Solo tengo una pregunta']
const info = [
  { icon: MapPin, label: 'Dirección',  value: 'Av. Fitness 1234, Centro — Ciudad Ejemplo' },
  { icon: Phone,  label: 'Teléfono',   value: '+1 (555) 000-1234' },
  { icon: Mail,   label: 'Email',      value: 'hola@carlygym.com' },
  { icon: Clock,  label: 'Horario',    value: 'Lun-Vie 5AM-12AM · Sáb-Dom 6AM-10PM' },
]

function validate(fields) {
  const errs = {}
  if (!fields.name.trim())                        errs.name  = 'El nombre es requerido'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = 'Email inválido'
  if (!/^\+?[\d\s\-()]{7,}$/.test(fields.phone)) errs.phone = 'Teléfono inválido'
  if (!fields.plan)                               errs.plan  = 'Selecciona una opción'
  if (fields.message.length < 10)                 errs.message = 'Mensaje muy corto'
  return errs
}

function Field({ label, error, ok, children }) {
  return (
    <div>
      <label className="font-body font-700 text-white/80 text-xs uppercase tracking-wider block mb-2">{label}</label>
      {children}
      {error && <p className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle size={11} />{error}</p>}
      {ok    && <p className="flex items-center gap-1 text-emerald-400 text-xs mt-1"><CheckCircle size={11} />Perfecto</p>}
    </div>
  )
}

const inputCls = (err, ok) =>
  `w-full bg-white/5 border text-white font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-white/30 ${
    err ? 'border-red-500 focus:border-red-400'
    : ok ? 'border-emerald-500 focus:border-emerald-400'
    : 'border-white/15 focus:border-gym-red'
  }`

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay: d },
})

export default function Contact() {
  const [fields, setFields]  = useState({ name: '', email: '', phone: '', plan: '', message: '' })
  const [touched, setTouched] = useState({})
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  const errs = validate(fields)
  const set  = (k, v) => setFields(f => ({ ...f, [k]: v }))
  const blur = (k)    => setTouched(t => ({ ...t, [k]: true }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, plan: true, message: true })
    if (Object.keys(errs).length) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1500)
  }

  return (
    <section id="contacto" className="bg-gym-black py-28 relative overflow-hidden">
      <div className="absolute inset-0 diagonal-lines opacity-40" />
      <div className="absolute top-0 inset-x-0 h-16 bg-gym-light"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div {...fade()} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gym-gold" />
            <span className="font-body font-700 text-gym-gold text-xs uppercase tracking-[0.3em]">Contáctanos</span>
            <div className="h-px w-12 bg-gym-gold" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl text-white leading-none">
            EMPIEZA <span className="text-gym-red">HOY</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — info + map */}
          <motion.div {...fade(0.1)} className="space-y-8">
            <div className="space-y-5">
              {info.map(i => (
                <div key={i.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gym-red/15 border border-gym-red/30 flex items-center justify-center flex-shrink-0">
                    <i.icon size={16} className="text-gym-red" />
                  </div>
                  <div>
                    <div className="font-body font-700 text-white/50 text-xs uppercase tracking-wider">{i.label}</div>
                    <div className="font-body text-white text-sm mt-0.5">{i.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <div className="font-body font-700 text-white/50 text-xs uppercase tracking-wider mb-4">Síguenos</div>
              <div className="flex gap-3">
                {[
                  { label: 'IG',  href: '#', color: 'hover:bg-pink-600'    },
                  { label: 'FB',  href: '#', color: 'hover:bg-blue-600'    },
                  { label: 'TT',  href: '#', color: 'hover:bg-gray-800'    },
                  { label: 'WA',  href: '#', color: 'hover:bg-emerald-600' },
                ].map(s => (
                  <a key={s.label} href={s.href}
                    className={`w-10 h-10 border border-white/20 flex items-center justify-center font-display text-sm text-white/60 hover:text-white ${s.color} border-transparent transition-all duration-200`}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative overflow-hidden h-56 bg-white/5 border border-white/10">
              <iframe
                title="Ubicación Carly Gym"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71280497933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150+Park+Row%2C+New+York%2C+NY+10007!5e0!3m2!1sen!2sus!4v1510579767645"
                className="w-full h-full grayscale opacity-60"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 border-2 border-gym-red/30 pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-gym-red text-white font-body font-700 text-xs px-3 py-1.5 uppercase tracking-wider">
                Carly Gym
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div {...fade(0.2)}>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 border border-gym-red/40 p-12 text-center">
                <CheckCircle className="text-gym-red mx-auto mb-4" size={56} />
                <h3 className="font-display text-4xl text-white mb-3">¡MENSAJE ENVIADO!</h3>
                <p className="font-body text-white/60 text-base">
                  Te contactaremos en menos de 24 horas. ¡Bienvenido a la familia Carly Gym!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 space-y-5" noValidate>
                <h3 className="font-display text-3xl text-white mb-2">ENVÍANOS UN MENSAJE</h3>
                <div className="h-0.5 w-10 bg-gym-red mb-6" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Nombre completo" error={touched.name && errs.name} ok={touched.name && !errs.name}>
                    <input type="text" placeholder="Tu nombre" value={fields.name}
                      onChange={e => set('name', e.target.value)} onBlur={() => blur('name')}
                      className={inputCls(touched.name && errs.name, touched.name && !errs.name)} />
                  </Field>
                  <Field label="Teléfono" error={touched.phone && errs.phone} ok={touched.phone && !errs.phone}>
                    <input type="tel" placeholder="+1 555 000 1234" value={fields.phone}
                      onChange={e => set('phone', e.target.value)} onBlur={() => blur('phone')}
                      className={inputCls(touched.phone && errs.phone, touched.phone && !errs.phone)} />
                  </Field>
                </div>

                <Field label="Email" error={touched.email && errs.email} ok={touched.email && !errs.email}>
                  <input type="email" placeholder="tu@email.com" value={fields.email}
                    onChange={e => set('email', e.target.value)} onBlur={() => blur('email')}
                    className={inputCls(touched.email && errs.email, touched.email && !errs.email)} />
                </Field>

                <Field label="Plan de interés" error={touched.plan && errs.plan} ok={touched.plan && !errs.plan}>
                  <select value={fields.plan}
                    onChange={e => set('plan', e.target.value)} onBlur={() => blur('plan')}
                    className={`${inputCls(touched.plan && errs.plan, touched.plan && !errs.plan)} appearance-none cursor-pointer`}>
                    <option value="">Selecciona un plan...</option>
                    {plans.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </Field>

                <Field label="Mensaje" error={touched.message && errs.message} ok={touched.message && !errs.message}>
                  <textarea rows={4} placeholder="¿En qué podemos ayudarte?" value={fields.message}
                    onChange={e => set('message', e.target.value)} onBlur={() => blur('message')}
                    className={`${inputCls(touched.message && errs.message, touched.message && !errs.message)} resize-none`} />
                </Field>

                <motion.button type="submit"
                  className="w-full bg-gym-red text-white font-body font-800 text-sm py-4 uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-60"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(233,30,99,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}>
                  {loading
                    ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    : <><Send size={14} /> Enviar Mensaje</>}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
