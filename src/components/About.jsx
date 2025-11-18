function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white">About Me</h2>
              <p className="mt-4 text-white/80">
                I’m a cybersecurity professional specializing in corporate security training, audits, and penetration testing. I work closely with leadership and engineering teams to build pragmatic, risk-based defenses and deliver outcomes that stand up to real-world threats.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">8+ yrs</p>
                  <p className="text-xs text-white/60">Industry experience</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">100+</p>
                  <p className="text-xs text-white/60">Teams trained</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-xs text-white/60">Assessments delivered</p>
                </div>
              </div>
            </div>
            <div className="lg:pl-6">
              <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-b from-purple-500/10 to-transparent p-6">
                <h3 className="text-white font-semibold">Core Principles</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc list-inside">
                  <li>Business-first security</li>
                  <li>Evidence-based recommendations</li>
                  <li>Clear communication</li>
                  <li>Confidentiality and integrity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
