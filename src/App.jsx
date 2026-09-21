import { useState } from 'react'

const categories = [
  { name: 'Real Estate', icon: '🏠', desc: 'Apartments, houses, rooms, offices, parking spots and event venues.' },
  { name: 'Vehicles', icon: '🚗', desc: 'Cars, motorcycles, scooters, boats, RVs and construction vehicles.' },
  { name: 'Electronics', icon: '📷', desc: 'Laptops, cameras, drones, smartphones, gaming consoles and VR headsets.' },
  { name: 'Tools & Equipment', icon: '🔧', desc: 'Power tools, generators, ladders, welding machines and construction gear.' },
  { name: 'Home & Lifestyle', icon: '🛋️', desc: 'Furniture, appliances, kitchenware, party supplies and décor.' },
  { name: 'Sports & Outdoor', icon: '⛺', desc: 'Bikes, camping equipment, fitness gear, surfing boards and tents.' },
  { name: 'Fashion', icon: '👗', desc: 'Designer clothing, formal wear, jewelry, watches and handbags.' },
  { name: 'Events', icon: '🎉', desc: 'Sound systems, lighting, marquees, photo booths and party equipment.' },
]

function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false)
  const [regOpen, setRegOpen] = useState(false)

  const navLink = (id, label) => (
    <button
      onClick={() => { setPage(id); setOpen(false); setRegOpen(false) }}
      className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
        page === id
          ? 'bg-teal-50 text-teal-700'
          : 'text-slate-600 hover:text-teal-700 hover:bg-teal-50/60'
      }`}
    >
      {label}
    </button>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <button onClick={() => setPage('home')} className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Kodisha"
              className="h-11 w-11 object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <div className="text-left hidden sm:block">
              <span className="block font-bold text-[17px] text-slate-900 leading-none tracking-tight">
                Kodisha
              </span>
              <span className="block text-[11px] text-teal-600 font-medium mt-0.5">
                Rent anything. Anytime.
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLink('home', 'Home')}
            {navLink('services', 'Services')}
            {navLink('about', 'About')}
            {navLink('contact', 'Contact')}

            <div className="relative ml-3">
              <button
                onClick={() => setRegOpen(!regOpen)}
                className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition shadow-md shadow-teal-600/20"
              >
                Get started
                <svg className={`w-4 h-4 transition ${regOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {regOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 animate-fadeIn overflow-hidden">
                  <button
                    onClick={() => { setPage('register-renter'); setRegOpen(false) }}
                    className="w-full text-left px-4 py-3.5 text-sm hover:bg-teal-50 flex items-center gap-3 transition"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-lg">🔑</span>
                    <div>
                      <p className="font-semibold text-slate-900">Register as Renter</p>
                      <p className="text-xs text-slate-500">Find and book items</p>
                    </div>
                  </button>
                  <button
                    onClick={() => { setPage('register-owner'); setRegOpen(false) }}
                    className="w-full text-left px-4 py-3.5 text-sm hover:bg-teal-50 flex items-center gap-3 transition"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-lg">📦</span>
                    <div>
                      <p className="font-semibold text-slate-900">Register as Owner</p>
                      <p className="text-xs text-slate-500">List and earn</p>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden p-2.5 rounded-xl hover:bg-slate-100 transition" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-slate-100 space-y-1 pb-5 animate-fadeIn">
            {navLink('home', 'Home')}
            {navLink('services', 'Services')}
            {navLink('about', 'About')}
            {navLink('contact', 'Contact')}
            <div className="pt-3 space-y-2">
              <button
                onClick={() => { setPage('register-renter'); setOpen(false) }}
                className="w-full py-3 text-sm font-semibold text-teal-700 bg-teal-50 rounded-xl"
              >
                Register as Renter
              </button>
              <button
                onClick={() => { setPage('register-owner'); setOpen(false) }}
                className="w-full py-3 text-sm font-semibold text-white bg-teal-600 rounded-xl"
              >
                Register as Owner
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Home({ setPage }) {
  return (
    <>
      {/* Hero — inspired by Jirani clean light style */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-teal-50/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_70%_0%,rgba(20,184,166,0.12),transparent)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-white/80 px-3.5 py-1.5 shadow-sm mb-6">
              <span className="text-sm">🇹🇿</span>
              <span className="text-xs font-semibold text-teal-800">Made in Tanzania · Rent anything, anytime</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Rent anything.
              <br />
              <span className="text-teal-600">Anytime.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-9 leading-relaxed max-w-xl">
              Kodisha is the trusted marketplace where owners list apartments, cars, cameras, tools and more — and renters book, pay and return safely.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setPage('register-renter')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition shadow-lg shadow-teal-600/25 text-sm sm:text-base"
              >
                Start renting
              </button>
              <button
                onClick={() => setPage('register-owner')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-slate-200 text-slate-800 font-semibold rounded-full hover:border-teal-300 hover:bg-teal-50/50 transition text-sm sm:text-base"
              >
                List your items →
              </button>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {['bg-teal-500', 'bg-emerald-500', 'bg-cyan-500', 'bg-sky-500'].map((c, i) => (
                  <div key={i} className={`h-8 w-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-[10px] font-bold text-white`}>
                    {['AJ', 'MK', 'FN', '+'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-xs">★★★★★</div>
                <p className="text-xs text-slate-500">Trusted by early renters & owners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-teal-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '8+', label: 'Categories' },
            { value: '100%', label: 'Secure payments' },
            { value: '24/7', label: 'Support for active rentals' },
            { value: 'TZ', label: 'Built for Tanzania' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight">{s.value}</p>
              <p className="text-teal-100 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-2">Discover</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What can you rent?</h2>
            <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
              Almost any tangible asset — for a few hours or a whole month.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((c) => (
              <div
                key={c.name}
                className="group p-5 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:shadow-lg hover:border-teal-100 transition-all duration-200 text-center"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">{c.icon}</div>
                <h3 className="font-semibold text-sm text-slate-900">{c.name}</h3>
                <p className="text-[11px] text-slate-500 mt-1.5 leading-snug line-clamp-2">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => setPage('services')}
              className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:underline"
            >
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-2">Simple flow</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How Kodisha works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'List or search', desc: 'Owners list items with photos and pricing. Renters browse by category, location and dates.' },
              { step: '02', title: 'Book & pay', desc: 'Request or instant-book. Secure payment with optional deposit protection.' },
              { step: '03', title: 'Use & return', desc: 'Pick up or receive the item, enjoy it, then return safely. Rate the experience.' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <span className="font-mono text-sm font-bold text-teal-600">{s.step}</span>
                <h3 className="mt-3 font-bold text-lg text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Turn idle assets into income</h2>
          <p className="text-teal-100 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            List your apartment, car, camera or tools and start earning with Kodisha — the trusted way to rent almost anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setPage('register-owner')}
              className="px-7 py-3.5 bg-white text-teal-800 font-semibold rounded-full hover:bg-teal-50 transition shadow-lg"
            >
              Become an owner
            </button>
            <button
              onClick={() => setPage('register-renter')}
              className="px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition"
            >
              Start renting
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-2">Marketplace</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Services & Products</h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
          Kodisha is a full rental marketplace supporting short-term and long-term rentals with secure payments, messaging and trust tools.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-14">
        <div className="p-7 rounded-2xl bg-teal-50 border border-teal-100">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 text-white text-lg mb-4">🔑</div>
          <h3 className="text-lg font-bold text-teal-900 mb-3">For Renters</h3>
          <ul className="space-y-2.5 text-sm text-slate-700">
            <li className="flex gap-2"><span className="text-teal-600">✓</span> Search by location, dates, price and category</li>
            <li className="flex gap-2"><span className="text-teal-600">✓</span> Instant book or send a request</li>
            <li className="flex gap-2"><span className="text-teal-600">✓</span> Secure payments with deposit protection</li>
            <li className="flex gap-2"><span className="text-teal-600">✓</span> In-app chat with owners</li>
            <li className="flex gap-2"><span className="text-teal-600">✓</span> Leave and read reviews</li>
          </ul>
        </div>
        <div className="p-7 rounded-2xl bg-amber-50 border border-amber-100">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white text-lg mb-4">📦</div>
          <h3 className="text-lg font-bold text-amber-900 mb-3">For Owners</h3>
          <ul className="space-y-2.5 text-sm text-slate-700">
            <li className="flex gap-2"><span className="text-amber-600">✓</span> Create listings with photos, pricing and calendar</li>
            <li className="flex gap-2"><span className="text-amber-600">✓</span> Accept or auto-accept bookings</li>
            <li className="flex gap-2"><span className="text-amber-600">✓</span> Automated payouts after successful returns</li>
            <li className="flex gap-2"><span className="text-amber-600">✓</span> Track earnings and performance</li>
            <li className="flex gap-2"><span className="text-amber-600">✓</span> Optional insurance partnerships</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-bold text-slate-900 mb-6">What you can rent</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((c) => (
          <div key={c.name} className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">{c.icon}</div>
            <h3 className="font-semibold text-sm text-slate-900 mb-1">{c.name}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-2">Our story</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">About Kodisha</h1>
      </div>

      <div className="space-y-10 text-sm sm:text-base text-slate-700 leading-relaxed">
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
          <h2 className="text-lg font-bold text-teal-700 mb-3">Our Story</h2>
          <p>
            Kodisha was created to unlock the value of underused assets. Millions of items sit idle while people need temporary access. We built a trusted platform that makes renting anything as simple as booking a ride or a hotel room.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
          <h2 className="text-lg font-bold text-teal-700 mb-3">Mission</h2>
          <p>
            To create a trusted, easy-to-use digital platform that enables people to rent almost any item or asset from owners quickly, safely and affordably — while generating income for those who own underused assets.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
          <h2 className="text-lg font-bold text-teal-700 mb-3">What we believe</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access is better than ownership for many needs</li>
            <li>Trust is built through verification, reviews and transparent processes</li>
            <li>Both renters and owners deserve clear pricing and protection</li>
            <li>Technology should make renting seamless from search to return</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
          <h2 className="text-lg font-bold text-teal-700 mb-3">How it works</h2>
          <p>
            Owners list items with photos, availability and rules. Renters discover, book and pay securely. After the rental, both sides can leave reviews. Optional insurance and a clear dispute process protect everyone involved.
          </p>
        </section>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-2">Support</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Contact & Support</h1>
        <p className="text-slate-500 text-sm">We’re here to help renters and owners every step of the way.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
          <h3 className="font-bold text-slate-900 mb-4">Reach us</h3>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-center gap-2">📧 support@kodisha.app</li>
            <li className="flex items-center gap-2">📱 +255 XXX XXX XXX</li>
            <li className="flex items-center gap-2">💬 In-app live chat</li>
            <li className="flex items-center gap-2">📍 Dar es Salaam, Tanzania</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
          <h3 className="font-bold text-slate-900 mb-4">Support hours</h3>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>Mon – Fri: 8:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 2:00 PM</li>
            <li>Emergency support for active rentals available 24/7 via in-app chat</li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-2xl p-7 sm:p-9 text-center mb-12 border border-teal-100">
        <h3 className="font-bold text-teal-900 text-lg mb-2">Download the Kodisha App</h3>
        <p className="text-sm text-teal-700 mb-6">Available on Google Play and the App Store</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://play.google.com/store" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition">
            Google Play
          </a>
          <a href="https://apps.apple.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition">
            App Store
          </a>
        </div>
      </div>

      <form className="max-w-lg mx-auto space-y-3.5" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your name" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" />
        <input type="email" placeholder="Email address" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" />
        <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white">
          <option>I am a renter</option>
          <option>I am an owner</option>
          <option>Other inquiry</option>
        </select>
        <textarea placeholder="How can we help?" rows={4} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none"></textarea>
        <button type="submit" className="w-full py-3.5 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition text-sm shadow-md shadow-teal-600/20">
          Send message
        </button>
      </form>
    </div>
  )
}

function RegisterRenter() {
  return (
    <div className="max-w-md mx-auto px-4 py-14 sm:py-20">
      <div className="text-center mb-9">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-2xl mb-4">🔑</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Register as Renter</h1>
        <p className="text-sm text-slate-500 mt-2">Create your account and start discovering items near you.</p>
      </div>
      <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Full name" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition" />
        <input type="email" placeholder="Email" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition" />
        <input type="tel" placeholder="Phone number" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition" />
        <input type="password" placeholder="Password" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition" />
        <button type="submit" className="w-full py-3.5 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 text-sm shadow-md shadow-teal-600/20 transition">
          Create renter account
        </button>
      </form>
      <p className="text-center text-xs text-slate-500 mt-5">
        After registration you will be directed to the Kodisha app experience.
      </p>
    </div>
  )
}

function RegisterOwner() {
  return (
    <div className="max-w-md mx-auto px-4 py-14 sm:py-20">
      <div className="text-center mb-9">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl mb-4">📦</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Register as Owner</h1>
        <p className="text-sm text-slate-500 mt-2">List your items and start earning with Kodisha.</p>
      </div>
      <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Full name" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition" />
        <input type="email" placeholder="Email" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition" />
        <input type="tel" placeholder="Phone number" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition" />
        <input type="password" placeholder="Password" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition" />
        <button type="submit" className="w-full py-3.5 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 text-sm shadow-md shadow-teal-600/20 transition">
          Create owner account
        </button>
      </form>
      <p className="text-center text-xs text-slate-500 mt-5">
        After registration you will be directed to the Kodisha app experience.
      </p>
    </div>
  )
}

function Footer({ setPage }) {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="Kodisha" className="h-10 w-10 object-contain" />
              <span className="font-bold text-white text-lg">Kodisha</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              The trusted platform to rent almost anything — safely and conveniently.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => setPage('services')} className="hover:text-white transition">Services</button></li>
              <li><button onClick={() => setPage('register-renter')} className="hover:text-white transition">For Renters</button></li>
              <li><button onClick={() => setPage('register-owner')} className="hover:text-white transition">For Owners</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => setPage('about')} className="hover:text-white transition">About</button></li>
              <li><button onClick={() => setPage('contact')} className="hover:text-white transition">Contact</button></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Get the App</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="hover:text-white transition">Google Play</a></li>
              <li><a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="hover:text-white transition">App Store</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Kodisha. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Safety</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
      <Navbar page={page} setPage={setPage} />
      <main className="flex-1">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'services' && <Services />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
        {page === 'register-renter' && <RegisterRenter />}
        {page === 'register-owner' && <RegisterOwner />}
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}
