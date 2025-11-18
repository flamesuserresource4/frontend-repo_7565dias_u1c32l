import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.10),transparent_60%)]"></div>

      <Navbar />

      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} M. Roshella Security. All rights reserved.</p>
          <div className="text-white/60 text-sm">
            <a href="mailto:muyangroshella40@gmail.com" className="hover:text-white">muyangroshella40@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
