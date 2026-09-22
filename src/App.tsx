import { useState } from "react";

type Page =
  | "home"
  | "services"
  | "how"
  | "about"
  | "contact"
  | "register-renter"
  | "register-owner";

const categories = [
  {
    name: "Real Estate",
    image: "/categories/real-estate.jpg",
    desc: "Apartments, houses, rooms, offices, parking spots and event venues for short or long stays.",
    examples: "Studio apartments · Family homes · Office space · Parking · Event venues",
  },
  {
    name: "Vehicles",
    image: "/categories/vehicles.jpg",
    desc: "Cars, vans, buses, motorcycles, scooters and more — hourly, daily or weekly.",
    examples: "Sedans · SUVs · Vans · Buses · Motorbikes · Scooters",
  },
  {
    name: "Electronics",
    image: "/categories/electronics.jpg",
    desc: "Laptops, cameras, drones, speakers, gaming gear and professional equipment.",
    examples: "Laptops · Cameras · Drones · Projectors · Speakers · Consoles",
  },
  {
    name: "Tools & Equipment",
    image: "/categories/tools.jpg",
    desc: "Power tools, generators, construction gear and professional hardware.",
    examples: "Drills · Generators · Ladders · Welding · Plumbing kits",
  },
  {
    name: "Home & Lifestyle",
    image: "/categories/home-lifestyle.jpg",
    desc: "Furniture, appliances, kitchenware, décor and everyday home essentials.",
    examples: "Furniture · Appliances · Kitchen · Décor · Organisation",
  },
  {
    name: "Sports & Outdoor",
    image: "/categories/sports.jpg",
    desc: "Bikes, camping gear, fitness equipment, water sports and outdoor adventure kit.",
    examples: "Bicycles · Kayaks · Tents · Fitness · Ball sports",
  },
  {
    name: "Fashion",
    image: "/categories/fashion.jpg",
    desc: "Designer clothing, formal wear, jewelry, bags and accessories for any occasion.",
    examples: "Formal wear · Designer bags · Jewelry · Shoes · Accessories",
  },
  {
    name: "Events",
    image: "/categories/events.jpg",
    desc: "Tents, chairs, tables, sound systems, lighting and full event setups.",
    examples: "Marquees · Chairs · Tables · Sound · Lighting · Décor",
  },
];

const howSteps = [
  {
    num: "01",
    title: "Create your account",
    desc: "Sign up as a Renter or Owner in under two minutes. Verify your phone and email so both sides can trust the platform.",
  },
  {
    num: "02",
    title: "List or discover items",
    desc: "Owners add photos, pricing, availability calendar and rules. Renters search by category, location, dates and price filters.",
  },
  {
    num: "03",
    title: "Book & pay securely",
    desc: "Request a booking or use instant book where available. Pay through Kodisha with optional deposit protection. Funds are held safely until the rental is confirmed.",
  },
  {
    num: "04",
    title: "Handover & use",
    desc: "Meet or arrange delivery. Confirm condition with photos. Enjoy the item for the agreed period — hours, days or weeks.",
  },
  {
    num: "05",
    title: "Return & review",
    desc: "Return the item on time. Both sides can leave reviews. Payout is released to the owner after a successful return. Disputes are handled with clear evidence.",
  },
];

function StoreButtons({ light = false }: { light?: boolean }) {
  const base = light
    ? "bg-white text-slate-900 hover:bg-slate-100"
    : "bg-slate-900 text-white hover:bg-slate-800";
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 transition ${base}`}
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76c.12.06.26.09.4.09.16 0 .32-.05.46-.14l11.3-6.53-2.68-2.68-9.48 9.26zM1.5 2.7v18.6c0 .2.06.39.17.55l9.7-9.45L1.67 2.15A1 1 0 001.5 2.7zm19.6 8.7l-2.9-1.67-3.1 3.02 3.1 3.02 2.9-1.67c.7-.4.7-1.4 0-1.7zM4.04.29A1 1 0 003.18.34l9.48 9.26 2.68-2.68L4.04.29z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] leading-none opacity-80">GET IT ON</p>
          <p className="text-sm font-semibold leading-tight">Google Play</p>
        </div>
      </a>
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 transition ${base}`}
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.98 1.08-3.13-1.05.05-2.31.7-3.07 1.58-.67.76-1.26 1.98-1.1 3.15 1.16.09 2.36-.63 3.09-1.6z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] leading-none opacity-80">Download on the</p>
          <p className="text-sm font-semibold leading-tight">App Store</p>
        </div>
      </a>
    </div>
  );
}

function Navbar({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);

  const link = (id: Page, label: string) => (
    <button
      onClick={() => {
        setPage(id);
        setOpen(false);
        setRegOpen(false);
      }}
      className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
        page === id ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-teal-50/60 hover:text-teal-700"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-[72px] items-center justify-between">
          <button onClick={() => setPage("home")} className="flex items-center gap-3">
            <img src="/logo.png" alt="Kodisha" className="h-11 w-11 object-contain" />
            <div className="hidden text-left sm:block">
              <span className="block text-[17px] font-bold leading-none tracking-tight text-slate-900">
                Kodisha
              </span>
              <span className="mt-0.5 block text-[11px] font-medium text-teal-600">
                Rent anything. Anytime.
              </span>
            </div>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {link("home", "Home")}
            {link("services", "Categories")}
            {link("how", "How it works")}
            {link("about", "About")}
            {link("contact", "Contact")}
            <div className="relative ml-3">
              <button
                onClick={() => setRegOpen(!regOpen)}
                className="flex items-center gap-1.5 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700"
              >
                Get started
                <svg className={`h-4 w-4 transition ${regOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {regOpen && (
                <div className="absolute right-0 mt-2 w-60 overflow-hidden rounded-2xl border border-slate-100 bg-white py-2 shadow-xl">
                  <button
                    onClick={() => {
                      setPage("register-renter");
                      setRegOpen(false);
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm transition hover:bg-teal-50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-lg">🔑</span>
                    <div>
                      <p className="font-semibold text-slate-900">Register as Renter</p>
                      <p className="text-xs text-slate-500">Find and book items</p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setPage("register-owner");
                      setRegOpen(false);
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm transition hover:bg-teal-50"
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

          <button className="rounded-xl p-2.5 hover:bg-slate-100 md:hidden" onClick={() => setOpen(!open)}>
            <svg className="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="space-y-1 border-t border-slate-100 py-4 pb-5 md:hidden">
            {link("home", "Home")}
            {link("services", "Categories")}
            {link("how", "How it works")}
            {link("about", "About")}
            {link("contact", "Contact")}
            <div className="space-y-2 pt-3">
              <button onClick={() => { setPage("register-renter"); setOpen(false); }} className="w-full rounded-xl bg-teal-50 py-3 text-sm font-semibold text-teal-700">
                Register as Renter
              </button>
              <button onClick={() => { setPage("register-owner"); setOpen(false); }} className="w-full rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white">
                Register as Owner
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Home({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      {/* Hero with full background */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-teal-900/50" />
        </div>
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/40 bg-teal-500/20 px-3.5 py-1.5 backdrop-blur">
              <span className="text-sm">🇹🇿</span>
              <span className="text-xs font-semibold text-teal-100">Made in Tanzania · Rent anything, anytime</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Rent anything.
              <br />
              <span className="text-teal-300">Anytime.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
              Kodisha is the trusted marketplace where owners list apartments, cars, cameras, tools, fashion and more — and renters book, pay and return safely.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setPage("register-renter")}
                className="inline-flex items-center justify-center rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
              >
                Start renting
              </button>
              <button
                onClick={() => setPage("register-owner")}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                List your items →
              </button>
            </div>
            <div className="mt-10">
              <StoreButtons light />
            </div>
          </div>
        </div>
      </section>

      {/* Image collage strip */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { src: "/categories/real-estate.jpg", label: "Real Estate" },
              { src: "/categories/vehicles.jpg", label: "Vehicles" },
              { src: "/categories/electronics.jpg", label: "Electronics" },
              { src: "/categories/tools.jpg", label: "Tools" },
            ].map((item) => (
              <div key={item.label} className="group relative overflow-hidden rounded-xl">
                <img src={item.src} alt={item.label} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-sm font-semibold text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal-700 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-9 sm:grid-cols-4 sm:px-6">
          {[
            { value: "8+", label: "Categories" },
            { value: "Secure", label: "Payments & deposits" },
            { value: "24/7", label: "Support for active rentals" },
            { value: "TZ", label: "Built for Tanzania" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold tracking-tight sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-teal-100 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories preview */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Discover</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">What can you rent?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Almost any tangible asset — for a few hours or a whole month.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((c) => (
              <button
                key={c.name}
                onClick={() => setPage("services")}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-sm transition hover:border-teal-200 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{c.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-slate-500">{c.desc}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => setPage("services")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:underline"
            >
              View all categories
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* How it works teaser */}
      <section className="border-t border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Simple flow</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">How Kodisha works</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-5">
            {howSteps.map((s) => (
              <div key={s.num} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <span className="text-sm font-bold text-teal-600">{s.num}</span>
                <h3 className="mt-2 font-bold text-slate-900">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => setPage("how")}
              className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700"
            >
              Full process details
            </button>
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-teal-100 bg-teal-50 p-8">
            <h3 className="text-xl font-bold text-teal-900">For Renters</h3>
            <p className="mt-2 text-sm text-teal-800/80">
              Search, book and pay securely. Optional deposits, in-app chat and reviews keep every rental safe.
            </p>
            <button
              onClick={() => setPage("register-renter")}
              className="mt-6 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
            >
              Start renting
            </button>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-8">
            <h3 className="text-xl font-bold text-amber-900">For Owners</h3>
            <p className="mt-2 text-sm text-amber-800/80">
              List idle assets, set your calendar and pricing, accept bookings and get paid after successful returns.
            </p>
            <button
              onClick={() => setPage("register-owner")}
              className="mt-6 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700"
            >
              Become an owner
            </button>
          </div>
        </div>
      </section>

      {/* Download strip */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <img src="/logo.png" alt="" className="mx-auto mb-4 h-14 w-14 object-contain brightness-0 invert" />
          <h2 className="text-2xl font-bold sm:text-3xl">Download Kodisha</h2>
          <p className="mt-2 text-teal-100">Get the full experience on Google Play and the App Store</p>
          <div className="mt-8 flex justify-center">
            <StoreButtons light />
          </div>
          <p className="mt-6 text-sm text-teal-200/80">Free to download · Renters & Owners</p>
        </div>
      </section>
    </>
  );
}

function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Marketplace</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Categories & what you can rent</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Kodisha supports short-term and long-term rentals across eight major categories with secure payments, messaging and trust tools.
        </p>
      </div>

      <div className="space-y-10">
        {categories.map((c) => (
          <div
            key={c.name}
            className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm md:grid-cols-5"
          >
            <div className="aspect-video md:col-span-2 md:aspect-auto">
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

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-teal-100 bg-teal-50 p-7">
          <h3 className="text-lg font-bold text-teal-900">For Renters</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex gap-2"><span className="text-teal-600">✓</span> Search by location, dates, price and category</li>
            <li className="flex gap-2"><span className="text-teal-600">✓</span> Instant book or send a request</li>
            <li className="flex gap-2"><span className="text-teal-600">✓</span> Secure payments with optional deposit protection</li>
            <li className="flex gap-2"><span className="text-teal-600">✓</span> In-app chat with owners</li>
            <li className="flex gap-2"><span className="text-teal-600">✓</span> Leave and read reviews</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-7">
          <h3 className="text-lg font-bold text-amber-900">For Owners</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex gap-2"><span className="text-amber-600">✓</span> Create listings with photos, pricing and calendar</li>
            <li className="flex gap-2"><span className="text-amber-600">✓</span> Accept or auto-accept bookings</li>
            <li className="flex gap-2"><span className="text-amber-600">✓</span> Automated payouts after successful returns</li>
            <li className="flex gap-2"><span className="text-amber-600">✓</span> Track earnings and performance</li>
            <li className="flex gap-2"><span className="text-amber-600">✓</span> Optional insurance partnerships</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Process</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">How Kodisha works — full details</h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          A clear path from signup to completed rental for both renters and owners.
        </p>
      </div>

      <div className="space-y-8">
        {howSteps.map((s, i) => (
          <div key={s.num} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                {s.num}
              </span>
              {i < howSteps.length - 1 && <div className="mt-2 w-0.5 flex-1 bg-teal-200" />}
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 overflow-hidden rounded-2xl border border-slate-100">
        <img src="/categories/agreement.jpg" alt="Rental agreement" className="w-full object-cover" />
        <div className="bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-600">
            Clear agreements, secure payments and optional deposits protect both sides of every rental.
          </p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Our story</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">About Kodisha</h1>
      </div>
      <div className="space-y-8">
        {[
          {
            title: "Our Story",
            body: "Kodisha was created to unlock the value of underused assets. Millions of items sit idle while people need temporary access. We built a trusted platform that makes renting anything as simple as booking a ride or a hotel room — starting in Tanzania and built for the local market.",
          },
          {
            title: "Mission",
            body: "To create a trusted, easy-to-use digital platform that enables people to rent almost any item or asset from owners quickly, safely and affordably — while generating income for those who own underused assets.",
          },
          {
            title: "What we believe",
            body: "Access is better than ownership for many needs. Trust is built through verification, reviews and transparent processes. Both renters and owners deserve clear pricing and protection. Technology should make renting seamless from search to return.",
          },
        ].map((s) => (
          <section key={s.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-teal-700">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Support</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Contact & Support</h1>
        <p className="mt-2 text-slate-500">We’re here to help renters and owners every step of the way.</p>
      </div>

      <div className="mb-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="font-bold text-slate-900">Reach us</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>📧 support@kodisha.app</li>
            <li>📱 +255 XXX XXX XXX</li>
            <li>💬 In-app live chat</li>
            <li>📍 Dar es Salaam, Tanzania</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="font-bold text-slate-900">Support hours</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>Mon – Fri: 8:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 2:00 PM</li>
            <li>Emergency support for active rentals available 24/7 via in-app chat</li>
          </ul>
        </div>
      </div>

      <div className="mb-12 rounded-2xl border border-teal-100 bg-teal-50 p-8 text-center">
        <h3 className="text-lg font-bold text-teal-900">Download the Kodisha App</h3>
        <p className="mt-2 text-sm text-teal-700">Available on Google Play and the App Store</p>
        <div className="mt-6 flex justify-center">
          <StoreButtons />
        </div>
      </div>

      <form className="mx-auto max-w-lg space-y-3.5" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-teal-500" />
        <input type="email" placeholder="Email address" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-teal-500" />
        <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-teal-500">
          <option>I am a renter</option>
          <option>I am an owner</option>
          <option>Other inquiry</option>
        </select>
        <textarea placeholder="How can we help?" rows={4} className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
        <button type="submit" className="w-full rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700">
          Send message
        </button>
      </form>
    </div>
  );
}

function RegisterRenter() {
  return (
    <div className="mx-auto max-w-md px-4 py-14 sm:py-20">
      <div className="mb-9 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-2xl">🔑</div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Register as Renter</h1>
        <p className="mt-2 text-sm text-slate-500">Create your account and start discovering items near you.</p>
      </div>
      <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Full name" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <input type="email" placeholder="Email" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <input type="tel" placeholder="Phone number" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <input type="password" placeholder="Password" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <button type="submit" className="w-full rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-600/20 hover:bg-teal-700">
          Create renter account
        </button>
      </form>
      <p className="mt-5 text-center text-xs text-slate-500">After registration you can download the app and start browsing.</p>
    </div>
  );
}

function RegisterOwner() {
  return (
    <div className="mx-auto max-w-md px-4 py-14 sm:py-20">
      <div className="mb-9 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl">📦</div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Register as Owner</h1>
        <p className="mt-2 text-sm text-slate-500">List your items and start earning with Kodisha.</p>
      </div>
      <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Full name" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <input type="email" placeholder="Email" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <input type="tel" placeholder="Phone number" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <input type="password" placeholder="Password" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" />
        <button type="submit" className="w-full rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-600/20 hover:bg-teal-700">
          Create owner account
        </button>
      </form>
      <p className="mt-5 text-center text-xs text-slate-500">After registration you can download the app and start listing.</p>
    </div>
  );
}

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-12 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-2.5">
              <img src="/logo.png" alt="Kodisha" className="h-10 w-10 object-contain" />
              <span className="text-lg font-bold text-white">Kodisha</span>
            </div>
            <p className="text-xs leading-relaxed">The trusted platform to rent almost anything — safely and conveniently.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => setPage("services")} className="hover:text-white">Categories</button></li>
              <li><button onClick={() => setPage("how")} className="hover:text-white">How it works</button></li>
              <li><button onClick={() => setPage("register-renter")} className="hover:text-white">For Renters</button></li>
              <li><button onClick={() => setPage("register-owner")} className="hover:text-white">For Owners</button></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => setPage("about")} className="hover:text-white">About</button></li>
              <li><button onClick={() => setPage("contact")} className="hover:text-white">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Get the App</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="hover:text-white">Google Play</a></li>
              <li><a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="hover:text-white">App Store</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Kodisha. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Safety</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  return (
    <div className="flex min-h-screen flex-col bg-white antialiased">
      <Navbar page={page} setPage={setPage} />
      <main className="flex-1">
        {page === "home" && <Home setPage={setPage} />}
        {page === "services" && <Services />}
        {page === "how" && <HowItWorksPage />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
        {page === "register-renter" && <RegisterRenter />}
        {page === "register-owner" && <RegisterOwner />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
