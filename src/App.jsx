import Header       from './components/Header'
import Hero         from './components/Hero'
import About        from './components/About'
import Plans        from './components/Plans'
import Classes      from './components/Classes'
import Trainers     from './components/Trainers'
import Schedule     from './components/Schedule'
import Testimonials from './components/Testimonials'
import Gallery      from './components/Gallery'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Plans />
        <Classes />
        <Trainers />
        <Schedule />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
