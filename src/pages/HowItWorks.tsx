import { useLang } from '../i18n/LanguageContext'
import { PageHero } from '../components/PageHero'

export function HowItWorks() {
  const { t } = useLang()

  return (
    <div>
      <PageHero title={t.how.eyebrow} subtitle={t.how.title}>
        <p className="mt-4 max-w-lg text-slate-200">{t.how.sub}</p>
      </PageHero>

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold text-teal-800">{t.how.forRenters}</h2>
            <div className="space-y-6">
              {t.how.renterSteps.map((s, i) => (
                <div key={s.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {i < t.how.renterSteps.length - 1 && (
                      <div className="mt-2 w-0.5 flex-1 bg-teal-200" />
                    )}
                  </div>
                  <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold text-amber-800">{t.how.forOwners}</h2>
            <div className="space-y-6">
              {t.how.ownerSteps.map((s, i) => (
                <div key={s.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {i < t.how.ownerSteps.length - 1 && (
                      <div className="mt-2 w-0.5 flex-1 bg-amber-200" />
                    )}
                  </div>
                  <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
