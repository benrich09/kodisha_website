import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { PageHero } from '../components/PageHero'
import { StoreButtons } from '../components/StoreButtons'

export function GetApp() {
  const { t } = useLang()
  const [role, setRole] = useState<'customer' | 'business' | null>(null)

  return (
    <PageHero title={t.getApp.eyebrow} subtitle={t.getApp.title}>
      {!role ? (
        <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          <button
            onClick={() => setRole('customer')}
            className="rounded-2xl border border-white/30 bg-white/10 p-6 text-left backdrop-blur transition hover:bg-white/20"
          >
            <span className="text-3xl">🔑</span>
            <h3 className="mt-3 text-xl font-bold text-white">{t.getApp.customer}</h3>
            <p className="mt-2 text-sm text-slate-200">{t.getApp.customerDesc}</p>
          </button>
          <button
            onClick={() => setRole('business')}
            className="rounded-2xl border border-white/30 bg-white/10 p-6 text-left backdrop-blur transition hover:bg-white/20"
          >
            <span className="text-3xl">📦</span>
            <h3 className="mt-3 text-xl font-bold text-white">{t.getApp.business}</h3>
            <p className="mt-2 text-sm text-slate-200">{t.getApp.businessDesc}</p>
          </button>
        </div>
      ) : (
        <div className="mt-10 max-w-lg">
          <button
            onClick={() => setRole(null)}
            className="mb-4 text-sm font-medium text-teal-200 hover:text-white"
          >
            ← {t.getApp.back}
          </button>
          <h2 className="text-2xl font-bold text-white">
            {role === 'customer' ? t.getApp.customerApp : t.getApp.businessApp}
          </h2>
          <p className="mt-2 text-slate-200">
            {role === 'customer' ? t.getApp.customerHint : t.getApp.businessHint}
          </p>
          <div className="mt-8">
            <StoreButtons light business={role === 'business'} />
          </div>
        </div>
      )}
    </PageHero>
  )
}
