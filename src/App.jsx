import { useState, useEffect } from 'react'

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.kodisha.app'
const APP_STORE = 'https://apps.apple.com/app/kodisha'
const PHONE = '255746795020'
const PHONE_DISPLAY = '+255 746 795 020'
const WHATSAPP = `https://wa.me/${PHONE}`

const categories = [
  { name: 'Real Estate', image: '/categories/real-estate.jpg', desc: 'Apartments, houses, rooms, offices, parking spots and event venues.', examples: 'Studios · Homes · Offices · Parking · Venues' },
  { name: 'Vehicles', image: '/categories/vehicles.jpg', desc: 'Cars, vans, buses, motorcycles and scooters — hourly, daily or weekly.', examples: 'Sedans · SUVs · Vans · Buses · Motorbikes' },
  { name: 'Electronics', image: '/categories/electronics.jpg', desc: 'Laptops, cameras, drones, speakers and professional gear.', examples: 'Laptops · Cameras · Drones · Projectors · Consoles' },
  { name: 'Tools & Equipment', image: '/categories/tools.jpg', desc: 'Power tools, generators, construction and hardware equipment.', examples: 'Drills · Generators · Ladders · Welding kits' },
  { name: 'Home & Lifestyle', image: '/categories/home-lifestyle.jpg', desc: 'Furniture, appliances, kitchenware and home essentials.', examples: 'Furniture · Appliances · Kitchen · Décor' },
  { name: 'Sports & Outdoor', image: '/categories/sports.jpg', desc: 'Bikes, camping, fitness and water sports equipment.', examples: 'Bicycles · Kayaks · Tents · Fitness gear' },
  { name: 'Fashion', image: '/categories/fashion.jpg', desc: 'Designer clothing, formal wear, jewelry and accessories.', examples: 'Formal wear · Bags · Jewelry · Shoes' },
  { name: 'Events', image: '/categories/events.jpg', desc: 'Tents, chairs, tables, sound, lighting and full event setups.', examples: 'Marquees · Chairs · Sound · Lighting' },
]

const howRenter = [
  { num: '01', title: 'Create a renter account', desc: 'Sign up with your name, phone, email and password. Upload a national ID or passport for verification and trust.' },
  { num: '02', title: 'Browse & search', desc: 'Explore categories, filter by location, dates and price. View photos, rules and owner ratings.' },
  { num: '03', title: 'Book & pay securely', desc: 'Request or instant-book. Pay in-app with optional deposit protection. Funds are held until the rental is confirmed.' },
  { num: '04', title: 'Handover & use', desc: 'Meet the owner or arrange delivery. Confirm item condition with photos, then enjoy the rental period.' },
  { num: '05', title: 'Return & review', desc: 'Return on time. Leave a review. Deposit is released after a successful return. Disputes use photo evidence.' },
]

const howOwner = [
  { num: '01', title: 'Create an owner account', desc: 'Sign up and verify identity with ID documents. Business owners can add a business name and TIN where relevant.' },
  { num: '02', title: 'List your items', desc: 'Add photos, description, pricing, availability calendar and house rules. Publish when ready.' },
  { num: '03', title: 'Accept bookings', desc: 'Receive requests or enable instant book. Chat with renters in-app and confirm handover details.' },
  { num: '04', title: 'Handover the item', desc: 'Meet or deliver. Confirm condition. The renter uses the item for the agreed period.' },
  { num: '05', title: 'Get paid & review', desc: 'After return, payout is released to you. Rate the renter and build your reputation for more bookings.' },
]

function StoreButtons({ light }) {
  const base = light ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg' : 'bg-slate-900 text-white hover:bg-slate-800'
  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      <a href={PLAY_STORE} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-3 rounded-xl px-5 py-3.5 transition ${base}`}>
        <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.12.06.26.09.4.09.16 0 .32-.05.46-.14l11.3-6.53-2.68-2.68-9.48 9.26zM1.5 2.7v18.6c0 .2.06.39.17.55l9.7-9.45L1.67 2.15A1 1 0 001.5 2.7zm19.6 8.7l-2.9-1.67-3.1 3.02 3.1 3.02 2.9-1.67c.7-.4.7-1.4 0-1.7zM4.04.29A1 1 0 003.18.34l9.48 9.26 2.68-2.68L4.04.29z" /></svg>
        <div className="text-left"><p className="text-[10px] leading-none opacity-80">GET IT ON</p><p className="text-base font-semibold leading-tight">Google Play</p></div>
      </a>
      <a href={APP_STORE} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-3 rounded-xl px-5 py-3.5 transition ${base}`}>
        <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.98 1.08-3.13-1.05.05-2.31.7-3.07 1.58-.67.76-1.26 1.98-1.1 3.15 1.16.09 2.36-.63 3.09-1.6z" /></svg>
        <div className="text-left"><p className="text-[10px] leading-none opacity-80">Download on the</p><p className="text-base font-semibold leading-tight">App Store</p></div>
      </a>
    </div>
  )
}

function Navbar({ page, setPage, overHero }) {
  const [open, setOpen] = useState(false)
  const [regOpen, setRegOpen] = useState(false)

  const solid = !overHero
  const link = (id, label) => (
    <button
      onClick={() => { setPage(id); setOpen(false); setRegOpen(false) }}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
        page === id
          ? solid ? 'bg-teal-50 text-teal-700' : 'bg-white/20 text-white'
          : solid ? 'text-slate-600 hover:bg-teal-50/60 hover:text-teal-700' : 'text-white/90 hover:bg-white/15 hover:text-white'
      }`}
    >
      {label}
    </button>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      solid ? 'border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-[72px] items-center justify-between">
          <button onClick={() => setPage('home')} className="flex items-center gap-3">
            <img src="/logo.png" alt="Kodisha" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
            <div className="text-left">
              <span className={`block text-lg font-bold leading-none tracking-tight sm:text-xl ${solid ? 'text-slate-900' : 'text-white'}`}>Kodisha</span>
              <span className={`mt-0.5 block text-[11px] font-medium ${solid ? 'text-teal-600' : 'text-teal-200'}`}>Rent anything. Anytime.</span>
            </div>
          </button>

          <nav className="hidden items-center gap-0.5 md:flex">
            {link('home', 'Home')}
            {link('services', 'Discover')}
            {link('how', 'How it works')}
            {link('about', 'About')}
            {link('contact', 'Contact')}
            <div className="relative ml-2">
              <button
                onClick={() => setRegOpen(!regOpen)}
                className={`flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  solid ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20 hover:bg-teal-700' : 'bg-white text-teal-800 hover:bg-teal-50'
                }`}
              >
                Get started
                <svg className={`h-4 w-4 transition ${regOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {regOpen && (
                <div className="absolute right-0 mt-2 w-64 overflow-hidden rounded-2xl border border-slate-100 bg-white py-2 shadow-xl">
                  <button onClick={() => { setPage('register-renter'); setRegOpen(false) }} className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm hover:bg-teal-50">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-lg">🔑</span>
                    <div><p className="font-semibold text-slate-900">Register as Renter</p><p className="text-xs text-slate-500">Find and book items</p></div>
                  </button>
                  <button onClick={() => { setPage('register-owner'); setRegOpen(false) }} className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm hover:bg-teal-50">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-lg">📦</span>
                    <div><p className="font-semibold text-slate-900">Register as Owner</p><p className="text-xs text-slate-500">List and earn</p></div>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile: hamburger ↔ scissors when open */}
          <button
            className={`rounded-xl p-2.5 md:hidden ${solid ? 'hover:bg-slate-100 text-slate-700' : 'hover:bg-white/15 text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M6 18L18 6" />
                <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="17" cy="17" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div className={`space-y-1 border-t py-4 pb-5 md:hidden ${solid ? 'border-slate-100' : 'border-white/20'}`}>
            {link('home', 'Home')}
            {link('services', 'Discover')}
            {link('how', 'How it works')}
            {link('about', 'About')}
            {link('contact', 'Contact')}
            <div className="space-y-2 pt-3">
              <button onClick={() => { setPage('register-renter'); setOpen(false) }} className="w-full rounded-xl bg-teal-50 py-3 text-sm font-semibold text-teal-700">Register as Renter</button>
              <button onClick={() => { setPage('register-owner'); setOpen(false) }} className="w-full rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white">Register as Owner</button>
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
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-teal-900/40" />
        </div>
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/40 bg-teal-500/20 px-3.5 py-1.5 backdrop-blur">
              <span className="text-sm">🇹🇿</span>
              <span className="text-xs font-semibold text-teal-100">Made in Tanzania · Rent anything, anytime</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Rent anything.<br /><span className="text-teal-300">Anytime.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
              Kodisha is the trusted marketplace where owners list apartments, cars, cameras, tools, fashion and more — and renters book, pay and return safely.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => setPage('register-renter')} className="rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 hover:bg-teal-400">Start renting</button>
              <button onClick={() => setPage('register-owner')} className="rounded-full border-2 border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">List your items →</button>
            </div>
            <div className="mt-10"><StoreButtons light /></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((c) => (
              <button key={c.name} onClick={() => setPage('services')} className="group relative overflow-hidden rounded-xl">
                <img src={c.image} alt={c.name} className="aspect-square w-full object-cover transition duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-1.5 left-0 right-0 px-1 text-center text-[10px] font-semibold text-white leading-tight sm:text-[11px]">{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-700 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-9 sm:grid-cols-4 sm:px-6">
          {[{ value: '8+', label: 'Categories' }, { value: 'Secure', label: 'Payments & deposits' }, { value: '24/7', label: 'Active rental support' }, { value: 'TZ', label: 'Built for Tanzania' }].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-teal-100 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Discover</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">What can you rent?</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <button key={c.name} onClick={() => setPage('services')} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-sm transition hover:border-teal-200 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img src={c.image} alt={c.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900">{c.name}</h3>
                  <p className="mt-1.5 line-clamp-2 text-xs text-slate-500">{c.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">How it works</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">For renters & owners</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-teal-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-teal-800">For Renters</h3>
              <ul className="mt-4 space-y-3">
                {howRenter.map((s) => (
                  <li key={s.num} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">{s.num}</span>
                    <div><p className="text-sm font-semibold text-slate-900">{s.title}</p><p className="text-xs text-slate-500">{s.desc}</p></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-amber-800">For Owners</h3>
              <ul className="mt-4 space-y-3">
                {howOwner.map((s) => (
                  <li key={s.num} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">{s.num}</span>
                    <div><p className="text-sm font-semibold text-slate-900">{s.title}</p><p className="text-xs text-slate-500">{s.desc}</p></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => setPage('how')} className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700">Full process details</button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <img src="/logo.png" alt="Kodisha" className="mx-auto mb-5 h-16 w-16 object-contain brightness-0 invert sm:h-20 sm:w-20" />
          <h2 className="text-2xl font-bold sm:text-3xl">Download the Kodisha app</h2>
          <p className="mt-2 text-teal-100">Google Play & App Store — free for renters and owners</p>
          <div className="mt-8 flex justify-center"><StoreButtons light /></div>
        </div>
      </section>
    </>
  )
}

function Services() {
  return (
    <div>
      <section className="relative min-h-[70vh] overflow-hidden sm:min-h-[75vh]">
        <div className="absolute inset-0">
          <img src="/categories/overview.jpg" alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-teal-900/50" />
        </div>
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:min-h-[75vh] sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Discover</p>
          <h1 className="mt-3 max-w-xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">What you can rent on Kodisha</h1>
          <p className="mt-4 max-w-lg text-slate-200">Eight major categories — from homes and cars to cameras, tools, fashion and event gear.</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="space-y-8">
          {categories.map((c) => (
            <div key={c.name} className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm md:grid-cols-5">
              <div className="aspect-video md:col-span-2 md:aspect-auto md:min-h-[240px]">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-8">
                <h2 className="text-xl font-bold text-slate-900">{c.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                <p className="mt-3 text-xs font-medium text-teal-700">{c.examples}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 pt-28 sm:px-6 sm:py-20 sm:pt-32">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Process</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">How Kodisha works</h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">Clear steps for renters and owners — from signup to completed rental.</p>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-xl font-bold text-teal-800">For Renters</h2>
          <div className="space-y-6">
            {howRenter.map((s, i) => (
              <div key={s.num} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">{s.num}</span>
                  {i < howRenter.length - 1 && <div className="mt-2 w-0.5 flex-1 bg-teal-200" />}
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm flex-1">
                  <h3 className="font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-xl font-bold text-amber-800">For Owners</h2>
          <div className="space-y-6">
            {howOwner.map((s, i) => (
              <div key={s.num} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">{s.num}</span>
                  {i < howOwner.length - 1 && <div className="mt-2 w-0.5 flex-1 bg-amber-200" />}
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm flex-1">
                  <h3 className="font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 pt-28 sm:px-6 sm:py-20 sm:pt-32">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Our story</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">About Kodisha</h1>
      </div>
      <div className="space-y-8">
        {[
          { title: 'Our Story', body: 'Kodisha was created to unlock the value of underused assets. Millions of items sit idle while people need temporary access. We built a trusted platform that makes renting anything as simple as booking a ride — starting in Tanzania.' },
          { title: 'Mission', body: 'To enable people to rent almost any item quickly, safely and affordably — while generating income for those who own underused assets.' },
          { title: 'Trust & confidentiality', body: 'We verify users with identity documents. Payments and deposits are handled securely. Personal documents are used only for verification and are not shared with other users beyond what is needed for a safe rental.' },
        ].map((s) => (
          <section key={s.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-teal-700">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 pt-28 sm:px-6 sm:py-20 sm:pt-32">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Support</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Contact & Support</h1>
      </div>
      <div className="mb-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="font-bold text-slate-900">Reach us</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>Email: support@kodisha.app</li>
            <li>Phone / WhatsApp: <a href={WHATSAPP} className="font-semibold text-teal-700 hover:underline">{PHONE_DISPLAY}</a></li>
            <li>In-app live chat</li>
            <li>Dar es Salaam, Tanzania</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="font-bold text-slate-900">Support hours</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>Mon – Fri: 8:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 2:00 PM</li>
            <li>Emergency support for active rentals 24/7 via in-app chat</li>
          </ul>
        </div>
      </div>
      <div className="mb-12 rounded-2xl border border-teal-100 bg-teal-50 p-8 text-center">
        <h3 className="text-lg font-bold text-teal-900">Download the Kodisha App</h3>
        <p className="mt-2 text-sm text-teal-700">Google Play and App Store</p>
        <div className="mt-6 flex justify-center"><StoreButtons /></div>
      </div>
      <form className="mx-auto max-w-lg space-y-3.5" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <input type="email" placeholder="Email address" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <input type="tel" placeholder={PHONE_DISPLAY} className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <textarea placeholder="How can we help?" rows={4} className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <button type="submit" className="w-full rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white hover:bg-teal-700">Send message</button>
      </form>
    </div>
  )
}

function RegisterForm({ role }) {
  const [done, setDone] = useState(false)
  const isRenter = role === 'renter'

  if (done) {
    return (
      <div className="mx-auto max-w-md px-4 py-14 pt-28 text-center sm:py-20 sm:pt-32">
        <img src="/logo.png" alt="Kodisha" className="mx-auto h-20 w-20 object-contain" />
        <h1 className="mt-6 text-2xl font-bold text-slate-900">You are almost ready</h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Your {isRenter ? 'renter' : 'owner'} registration has been received. For security, complete verification and log in inside the Kodisha mobile app.
        </p>
        <p className="mt-4 text-sm font-medium text-teal-700">Download the app and log in with the phone number and password you just used.</p>
        <div className="mt-8 flex justify-center"><StoreButtons /></div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md px-4 py-14 pt-28 sm:py-20 sm:pt-32">
      <div className="mb-8 text-center">
        <img src="/logo.png" alt="Kodisha" className="mx-auto h-16 w-16 object-contain" />
        <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
          Register as {isRenter ? 'Renter' : 'Owner'}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {isRenter ? 'Find and book items near you.' : 'List your items and start earning.'}
        </p>
      </div>
      <form className="space-y-3.5" onSubmit={(e) => { e.preventDefault(); setDone(true) }}>
        <input required type="text" placeholder="Full name" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <input required type="email" placeholder="Email" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <input required type="tel" placeholder="Phone (e.g. 0746795020)" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <input required type="password" placeholder="Password" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        {!isRenter && (
          <input type="text" placeholder="Business name (optional)" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        )}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-700">Identity document (required for confidentiality & trust)</p>
          <p className="mt-1 text-[11px] text-slate-500">Upload national ID, passport or driving licence. Used only for verification — not shared publicly.</p>
          <input required type="file" accept="image/*,.pdf" className="mt-3 w-full text-xs text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-teal-600 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white" />
        </div>
        {!isRenter && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-700">Proof of ownership / business (optional)</p>
            <p className="mt-1 text-[11px] text-slate-500">Title deed, registration or invoice helps build trust with renters.</p>
            <input type="file" accept="image/*,.pdf" className="mt-3 w-full text-xs text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-amber-600 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white" />
          </div>
        )}
        <label className="flex items-start gap-2 text-xs text-slate-600">
          <input required type="checkbox" className="mt-0.5 rounded border-slate-300 text-teal-600" />
          <span>I agree to the Terms of Service and Privacy Policy. My documents are processed confidentially for verification only.</span>
        </label>
        <button type="submit" className="w-full rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-600/20 hover:bg-teal-700">
          Create {isRenter ? 'renter' : 'owner'} account
        </button>
      </form>
      <p className="mt-4 text-center text-xs text-slate-500">After registration, log in on the Kodisha app to continue.</p>
    </div>
  )
}

function Footer({ setPage }) {
  return (
    <footer className="mt-auto bg-teal-950 text-teal-100/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-12 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <img src="/logo.png" alt="Kodisha" className="h-14 w-14 object-contain brightness-0 invert" />
              <span className="text-xl font-bold text-white">Kodisha</span>
            </div>
            <p className="text-xs leading-relaxed text-teal-200/70">The trusted platform to rent almost anything — safely and conveniently.</p>
            <p className="mt-3 text-xs"><a href={WHATSAPP} className="hover:text-white">{PHONE_DISPLAY}</a></p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => setPage('services')} className="hover:text-white">Discover</button></li>
              <li><button onClick={() => setPage('how')} className="hover:text-white">How it works</button></li>
              <li><button onClick={() => setPage('register-renter')} className="hover:text-white">For Renters</button></li>
              <li><button onClick={() => setPage('register-owner')} className="hover:text-white">For Owners</button></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => setPage('about')} className="hover:text-white">About</button></li>
              <li><button onClick={() => setPage('contact')} className="hover:text-white">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Get the App</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href={PLAY_STORE} target="_blank" rel="noreferrer" className="hover:text-white">Google Play</a></li>
              <li><a href={APP_STORE} target="_blank" rel="noreferrer" className="hover:text-white">App Store</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-teal-900 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Kodisha. All rights reserved.</p>
          <div className="flex gap-5">
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
  const [scrolled, setScrolled] = useState(false)
  const heroPages = ['home', 'services']
  const overHero = heroPages.includes(page) && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setScrolled(false)
  }, [page])

  return (
    <div className="flex min-h-screen flex-col bg-white antialiased">
      <Navbar page={page} setPage={setPage} overHero={overHero} />
      <main className="flex-1">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'services' && <Services />}
        {page === 'how' && <HowItWorksPage />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
        {page === 'register-renter' && <RegisterForm role="renter" />}
        {page === 'register-owner' && <RegisterForm role="owner" />}
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}
