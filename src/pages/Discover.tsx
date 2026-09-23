import { useLang } from '../i18n/LanguageContext'
import { categories } from '../data/categories'
import { PageHero } from '../components/PageHero'

export function Discover() {
  const { lang, t } = useLang()

  return (
    <div>
      <PageHero title={t.discover.eyebrow} subtitle={t.discover.title}>
        <p className="mt-4 max-w-lg text-slate-200">{t.discover.sub}</p>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="space-y-10">
          {categories.map((c) => (
            <div
              key={c.id}
              className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm md:grid-cols-5"
            >
              <div className="aspect-video md:col-span-2 md:aspect-auto md:min-h-[260px]">
                <img
                  src={c.image}
                  alt={lang === 'sw' ? c.nameSw : c.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-8">
                <h2 className="text-xl font-bold text-slate-900">
                  {lang === 'sw' ? c.nameSw : c.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {lang === 'sw' ? c.descSw : c.desc}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-teal-600">
                  {t.discover.subcategories}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {c.subs.map((s) => (
                    <li
                      key={s.name}
                      className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-800"
                    >
                      {lang === 'sw' ? s.nameSw : s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
