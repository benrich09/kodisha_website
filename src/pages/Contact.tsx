import { useState, type FormEvent } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { PageHero } from '../components/PageHero'

const WHATSAPP = 'https://wa.me/255746795020'
const PHONE_DISPLAY = '+255 746 795 020'

export function Contact() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <PageHero title={t.contact.eyebrow} subtitle={t.contact.title}>
        <p className="mt-4 max-w-lg text-slate-200">{t.contact.sub}</p>
      </PageHero>

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info cards */}
          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900">{t.contact.reachTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>
                  <span className="text-xs font-medium text-slate-400">{t.contact.email}</span>
                  <br />
                  <a href="mailto:support@kodisha.app" className="font-medium text-teal-700 hover:underline">
                    support@kodisha.app
                  </a>
                </li>
                <li>
                  <span className="text-xs font-medium text-slate-400">{t.contact.phone}</span>
                  <br />
                  <a href={WHATSAPP} className="font-medium text-teal-700 hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>{t.contact.chat}</li>
                <li>{t.contact.location}</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900">{t.contact.hoursTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>{t.contact.hoursWeek}</li>
                <li>{t.contact.hoursSat}</li>
                <li className="text-teal-700">{t.contact.hoursEmergency}</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">{t.contact.formTitle}</h3>

              {sent ? (
                <div className="mt-8 rounded-xl border border-teal-100 bg-teal-50 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">
                    ✓
                  </div>
                  <p className="mt-4 font-medium text-teal-900">{t.contact.formSuccess}</p>
                </div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                        {t.contact.formName}
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                        {t.contact.formEmail}
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                        {t.contact.formPhone}
                      </label>
                      <input
                        type="tel"
                        placeholder={PHONE_DISPLAY}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                        {t.contact.formRole}
                      </label>
                      <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-500/20">
                        <option>{t.contact.formRoleRenter}</option>
                        <option>{t.contact.formRoleOwner}</option>
                        <option>{t.contact.formRoleOther}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-600/25 transition hover:bg-teal-700 hover:shadow-lg sm:w-auto sm:px-10"
                  >
                    {t.contact.formSubmit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
