import { useLang } from '../i18n/LanguageContext'
import { PageHero } from '../components/PageHero'

export function About() {
  const { t } = useLang()

  const blocks = [
    { title: t.about.storyTitle, body: t.about.storyBody },
    { title: t.about.missionTitle, body: t.about.missionBody },
    { title: t.about.trustTitle, body: t.about.trustBody },
  ]

  return (
    <div>
      <PageHero title={t.about.eyebrow} subtitle={t.about.title}>
        <p className="mt-4 max-w-lg text-slate-200">{t.about.sub}</p>
      </PageHero>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="space-y-8">
          {blocks.map((s) => (
            <section
              key={s.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-bold text-teal-700">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
