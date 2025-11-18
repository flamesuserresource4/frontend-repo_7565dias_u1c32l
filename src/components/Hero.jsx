import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 py-28">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
            Enterprise Cybersecurity
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Corporate security training, audits, and penetration testing
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-lg max-w-2xl">
            I help organizations strengthen defenses with expert-led training, comprehensive security audits, and real-world offensive testing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 hover:from-purple-500 hover:to-indigo-500 transition-all">
              Contact Me
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              View Services
            </a>
          </div>
        </div>
        <div className="hidden lg:block"></div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
    </section>
  )
}

export default Hero
