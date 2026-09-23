import { useLang } from '../i18n/LanguageContext'
import { categories } from '../data/categories'
import { StoreButtons } from '../components/StoreButtons'
import type { SetPage } from '../types'

export function Home({ setPage }: { setPage: SetPage }) {
  const { lang, t } = useLang()

  const stats = [
    { value: '8+', label: t.home.stats.categories, icon: '📦' },
    { value: 'Secure', label: t.home.stats.secure, icon: '🔒' },
    { value: '24/7', label: t.home.stats.support, icon: '💬' },
    { value: 'TZ', label: t.home.stats.built, icon: '🇹🇿' },
  ]

  const trust = [
    {
      title: t.home.trustSecureTitle,
      desc: t.home.trustSecureDesc,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'from-teal-500 to-teal-600',
    },
    {
      title: t.home.trustSupportTitle,
      desc: t.home.trustSupportDesc,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'from-sky-500 to-blue-600',
    },
    {
      title: t.home.trustBuiltTitle,
      desc: t.home.trustBuiltDesc,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-amber-500 to-orange-600',
    },
  ]

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-teal-900/40" />
        </div>
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.home.headline1}
              <br />
              <span className="text-teal-300">{t.home.headline2}</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
              {t.home.sub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setPage('register-renter')}
                className="rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-400 hover:scale-[1.02]"
              >
                {t.home.startRenting}
              </button>
              <button
                onClick={() => setPage('register-owner')}
                className="rounded-full border-2 border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 hover:scale-[1.02]"
              >
                {t.home.listItems}
              </button>
            </div>
            <div className="mt-10">
              <StoreButtons light />
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="border-b border-slate-100 bg-white py-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setPage('services')}
                className="group relative overflow-hidden rounded-xl ring-0 transition hover:ring-2 hover:ring-teal-400/50"
              >
                <img
                  src={c.image}
                  alt={lang === 'sw' ? c.nameSw : c.name}
                  className="aspect-square w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute bottom-1.5 left-0 right-0 px-1 text-center text-[10px] font-semibold leading-tight text-white sm:text-[11px]">
                  {lang === 'sw' ? c.nameSw : c.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive stats */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 py-12 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-teal-300 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:gap-6 sm:px-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur transition hover:-translate-y-1 hover:bg-white/20 hover:shadow-xl"
            >
              <span className="text-2xl">{s.icon}</span>
              <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-teal-100 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust cards — interactive */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            {t.home.trustTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {trust.map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white shadow-md transition group-hover:scale-110`}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.desc}</p>
                <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-teal-50 opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
