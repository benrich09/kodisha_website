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
      className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
        page === id ? 'bg-teal-50 text-teal-700' : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50/50'
      }`}
    >
      {label}
    </button>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button onClick={() => setPage('home')} className="flex items-center gap-3 group">
            <img
              src="/logo-wordmark.jpg"
              alt="Kodisha"
              className="h-12 w-12 rounded-full object-cover border-2 border-teal-100 shadow-md group-hover:scale-105 transition-transform"
            />
            <div className="text-left">
              <span className="block font-bold text-lg text-gray-900 leading-none">Kodisha</span>
              <span className="block text-[11px] text-teal-600 font-medium">Rent anything. Anytime.</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLink('home', 'Home')}
            {navLink('services', 'Services')}
            {navLink('about', 'About')}
            {navLink('contact', 'Contact')}

            {/* Register Dropdown */}
            <div className="relative ml-3">
              <button
                onClick={() => setRegOpen(!regOpen)}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition shadow-md shadow-teal-200"
              >
                Register
                <svg className={`w-4 h-4 transition ${regOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {regOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                  <button
                    onClick={() => { setPage('register-renter'); setRegOpen(false) }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-teal-50 flex items-center gap-3"
                  >
                    <span className="text-xl">🔑</span>
                    <div>
                      <p className="font-semibold text-gray-900">Register as Renter</p>
                      <p className="text-xs text-gray-500">Find and book items</p>
                    </div>
                  </button>
                  <button
                    onClick={() => { setPage('register-owner'); setRegOpen(false) }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-teal-50 flex items-center gap-3"
                  >
                    <span className="text-xl">📦</span>
                    <div>
                      <p className="font-semibold text-gray-900">Register as Owner</p>
                      <p className="text-xs text-gray-500">List and earn</p>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t space-y-1 pb-4 animate-fadeIn">
            {navLink('home', 'Home')}
            {navLink('services', 'Services')}
            {navLink('about', 'About')}
            {navLink('contact', 'Contact')}
            <div className="pt-3 space-y-2">
              <button onClick={() => { setPage('register-renter'); setOpen(false) }} className="w-full py-2.5 text-sm font-semibold text-teal-700 bg-teal-50 rounded-lg">
                Register as Renter
              </button>
              <button onClick={() => { setPage('register-owner'); setOpen(false) }} className="w-full py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-lg">
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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-transparent"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-teal-100 bg-teal-500/30 rounded-full mb-5">
              Rent anything • Own less
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Unlock idle assets.<br />
              <span className="text-teal-300">Rent almost anything.</span>
            </h1>
            <p className="text-base sm:text-lg text-teal-50 mb-8 leading-relaxed">
              Kodisha is the trusted marketplace where owners list apartments, cars, cameras, tools and more — and renters book, pay and return safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => setPage('register-renter')} className="px-6 py-3.5 bg-white text-teal-800 font-semibold rounded-full hover:bg-teal-50 transition shadow-lg text-sm sm:text-base">
                Start renting
              </button>
              <button onClick={() => setPage('register-owner')} className="px-6 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition text-sm sm:text-base">
                List your items
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories preview */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">What can you rent?</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Almost any tangible asset — for a few hours or a whole month.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {categories.slice(0, 8).map(c => (
              <div key={c.name} className="p-4 sm:p-5 rounded-2xl border border-gray-100 bg-gray-50/80 hover:shadow-md hover:border-teal-100 transition text-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{c.icon}</div>
                <h3 className="font-semibold text-sm text-gray-900">{c.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setPage('services')} className="text-teal-600 font-semibold text-sm hover:underline">
              View all services →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-teal-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Turn idle assets into income</h2>
          <p className="text-teal-100 text-sm sm:text-base mb-6">List your apartment, car, camera or tools and start earning with Kodisha.</p>
          <button onClick={() => setPage('register-owner')} className="px-6 py-3 bg-white text-teal-800 font-semibold rounded-full hover:bg-teal-50 transition">
            Become an owner
          </button>
        </div>
      </section>
    </>
  )
}

function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">Services & Products</h1>
      <p className="text-center text-gray-500 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
        Kodisha is a full rental marketplace supporting short-term and long-term rentals with secure payments, messaging and trust tools.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100">
          <h3 className="text-lg font-bold text-teal-800 mb-3">For Renters</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Search by location, dates, price and category</li>
            <li>• Instant book or send a request</li>
            <li>• Secure payments with deposit protection</li>
            <li>• In-app chat with owners</li>
            <li>• Leave and read reviews</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100">
          <h3 className="text-lg font-bold text-amber-800 mb-3">For Owners</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Create listings with photos, pricing and calendar</li>
            <li>• Accept or auto-accept bookings</li>
            <li>• Automated payouts after successful returns</li>
            <li>• Track earnings and performance</li>
            <li>• Optional insurance partnerships</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-5">What you can rent</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map(c => (
          <div key={c.name} className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="text-2xl mb-2">{c.icon}</div>
            <h3 className="font-semibold text-sm mb-1">{c.name}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">About Kodisha</h1>
      
      <div className="space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-teal-700 mb-2">Our Story</h2>
          <p>
            Kodisha was created to unlock the value of underused assets. Millions of items sit idle while people need temporary access. We built a trusted platform that makes renting anything as simple as booking a ride or a hotel room.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-teal-700 mb-2">Mission</h2>
          <p>
            To create a trusted, easy-to-use digital platform that enables people to rent almost any item or asset from owners quickly, safely and affordably — while generating income for those who own underused assets.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-teal-700 mb-2">What we believe</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access is better than ownership for many needs</li>
            <li>Trust is built through verification, reviews and transparent processes</li>
            <li>Both renters and owners deserve clear pricing and protection</li>
            <li>Technology should make renting seamless from search to return</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-teal-700 mb-2">How it works</h2>
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">Contact & Support</h1>
      <p className="text-center text-gray-500 text-sm mb-10">We’re here to help renters and owners every step of the way.</p>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
          <h3 className="font-bold text-gray-900 mb-3">Reach us</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>📧 Email: support@kodisha.app</li>
            <li>📱 Phone / WhatsApp: +255 XXX XXX XXX</li>
            <li>💬 In-app live chat (for registered users)</li>
            <li>📍 Dar es Salaam, Tanzania</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
          <h3 className="font-bold text-gray-900 mb-3">Support hours</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Mon – Fri: 8:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 2:00 PM</li>
            <li>Emergency support for active rentals available 24/7 via in-app chat</li>
          </ul>
        </div>
      </div>

      {/* App download */}
      <div className="bg-teal-50 rounded-2xl p-6 sm:p-8 text-center mb-10 border border-teal-100">
        <h3 className="font-bold text-teal-900 mb-2">Download the Kodisha App</h3>
        <p className="text-sm text-teal-700 mb-5">Available on Google Play and the App Store</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://play.google.com/store" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition">
            <span className="text-lg">▶</span> Google Play
          </a>
          <a href="https://apps.apple.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition">
            <span className="text-lg"></span> App Store
          </a>
        </div>
      </div>

      {/* Contact form */}
      <form className="max-w-lg mx-auto space-y-3" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
        <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none">
          <option>I am a renter</option>
          <option>I am an owner</option>
          <option>Other inquiry</option>
        </select>
        <textarea placeholder="How can we help?" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none"></textarea>
        <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition text-sm">
          Send message
        </button>
      </form>
    </div>
  )
}

function RegisterRenter() {
  return (
    <div className="max-w-md mx-auto px-4 py-12 sm:py-16">
      <div className="text-center mb-8">
        <div className="text-4xl mb-3">🔑</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Register as Renter</h1>
        <p className="text-sm text-gray-500 mt-2">Create your account and start discovering items near you.</p>
      </div>
      <form className="space-y-3" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
        <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
        <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
        <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
        <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 text-sm">
          Create renter account
        </button>
      </form>
      <p className="text-center text-xs text-gray-500 mt-4">
        After registration you will be directed to the Kodisha app experience.
      </p>
    </div>
  )
}

function RegisterOwner() {
  return (
    <div className="max-w-md mx-auto px-4 py-12 sm:py-16">
      <div className="text-center mb-8">
        <div className="text-4xl mb-3">📦</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Register as Owner</h1>
        <p className="text-sm text-gray-500 mt-2">List your items and start earning with Kodisha.</p>
      </div>
      <form className="space-y-3" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
        <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
        <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
        <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
        <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 text-sm">
          Create owner account
        </button>
      </form>
      <p className="text-center text-xs text-gray-500 mt-4">
        After registration you will be directed to the Kodisha app experience.
      </p>
    </div>
  )
}

function Footer({ setPage }) {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo-wordmark.jpg" alt="Kodisha" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-bold text-white">Kodisha</span>
            </div>
            <p className="text-xs leading-relaxed">The trusted platform to rent almost anything — safely and conveniently.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setPage('services')} className="hover:text-white transition">Services</button></li>
              <li><button onClick={() => setPage('register-renter')} className="hover:text-white transition">For Renters</button></li>
              <li><button onClick={() => setPage('register-owner')} className="hover:text-white transition">For Owners</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setPage('about')} className="hover:text-white transition">About</button></li>
              <li><button onClick={() => setPage('contact')} className="hover:text-white transition">Contact</button></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Get the App</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="hover:text-white transition">Google Play</a></li>
              <li><a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="hover:text-white transition">App Store</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} Kodisha. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Safety</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
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
