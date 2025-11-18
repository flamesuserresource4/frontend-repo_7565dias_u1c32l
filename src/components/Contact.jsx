import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')

    try {
      const mailto = `mailto:muyangroshella40@gmail.com?subject=${encodeURIComponent('New inquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
      window.location.href = mailto
      setStatus('Your email client should open shortly. If it does not, please email me directly.')
    } catch (err) {
      setStatus('Unable to open email client. Please email me directly at: muyangroshella40@gmail.com')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-8 sm:p-12">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s talk</h2>
            <p className="mt-2 text-white/70">Tell me about your goals. I’ll respond promptly with next steps.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">Name</label>
                <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Email</label>
                <input type="email" name="email" required placeholder="you@company.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Message</label>
              <textarea name="message" required rows="5" placeholder="What do you need help with?" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button type="submit" className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all">
                Send Email
              </button>
              <p className="text-xs text-white/60">Or email directly: <a href="mailto:muyangroshella40@gmail.com" className="text-purple-300 hover:text-purple-200 underline">muyangroshella40@gmail.com</a></p>
            </div>
            {status && <p className="text-sm text-white/70">{status}</p>}
          </form>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
    </section>
  )
}

export default Contact
