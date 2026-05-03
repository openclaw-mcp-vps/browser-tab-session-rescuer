export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Browser Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Lose a Browser Session Again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Tab Rescuer continuously backs up your open tabs, form data, and scroll positions to the cloud. One click restores everything after a crash or restart.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Rescuing Tabs — $6/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Works with Chrome &amp; Firefox. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🗂️</div>
            <h3 className="font-semibold text-white mb-1">Tab Snapshots</h3>
            <p className="text-sm text-[#8b949e]">Every open tab is captured every 60 seconds and synced to your account.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📝</div>
            <h3 className="font-semibold text-white mb-1">Form Recovery</h3>
            <p className="text-sm text-[#8b949e]">Unsaved form inputs are preserved so you never retype a long draft again.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📍</div>
            <h3 className="font-semibold text-white mb-1">Scroll Position</h3>
            <p className="text-sm text-[#8b949e]">Return to exactly where you were on every page, every time.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$6</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited tab backups</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Form &amp; scroll recovery</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cloud sync across devices</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 30-day session history</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Chrome &amp; Firefox support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does Tab Rescuer back up my sessions?</h3>
            <p className="text-sm text-[#8b949e]">The browser extension uses Chrome and Firefox extension APIs to read your open tabs, form values, and scroll positions every 60 seconds, then securely syncs that data to your cloud account.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my browsing data private?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Only tab URLs, form text, and scroll offsets are stored — never passwords or payment fields. All data is encrypted in transit and at rest.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Tab Rescuer. All rights reserved.
      </footer>
    </main>
  )
}
