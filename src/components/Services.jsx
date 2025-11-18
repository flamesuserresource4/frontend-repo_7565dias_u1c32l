function ServiceCard({ title, description, points }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 hover:border-purple-400/40 transition-colors">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-purple-400">▢</span>
      </div>
      <p className="mt-2 text-sm text-white/70">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc list-inside">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

function Services() {
  const services = [
    {
      title: 'Corporate Security Training',
      description: 'Tailored, scenario-based programs for technical and non-technical teams.',
      points: [
        'Phishing simulations and awareness',
        'Secure development (SSDLC) workshops',
        'Incident response tabletop exercises',
      ],
    },
    {
      title: 'Security Audits & Compliance',
      description: 'Independent assessments aligned to industry standards and your risk profile.',
      points: [
        'Policy and control reviews (ISO 27001, NIST)',
        'Cloud security posture assessments',
        'Configuration and access reviews',
      ],
    },
    {
      title: 'Penetration Testing',
      description: 'Adversarial testing to uncover vulnerabilities before attackers do.',
      points: [
        'Web, mobile, and API testing',
        'Network and wireless assessments',
        'Red team exercises with clear, actionable reporting',
      ],
    },
  ]

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Clear deliverables, executive-ready reports, and measurable improvements to your security posture.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} points={s.points} />)
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
    </section>
  )
}

export default Services
