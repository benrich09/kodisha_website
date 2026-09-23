import { useLang } from '../i18n/LanguageContext'
import { StoreButtons } from './StoreButtons'
import type { SetPage } from '../types'

const WHATSAPP = 'https://wa.me/255746795020'
const PHONE_DISPLAY = '+255 746 795 020'
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.kodisha.app'
const APP_STORE = 'https://apps.apple.com/app/kodisha'

export function Footer({ setPage }: { setPage: SetPage }) {
  const { t } = useLang()

  return (
    <>
      {/* Pre-footer band — slightly different from footer */}
      <section className="bg-teal-600 py-12 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <img
            src="/logo.png"
            alt="Kodisha"
            className="mx-auto mb-4 h-14 w-14 object-contain brightness-0 invert sm:h-16 sm:w-16"
          />
          <h2 className="text-xl font-bold sm:text-2xl">{t.footer.downloadTitle}</h2>
          <p className="mt-2 text-sm text-teal-100">{t.footer.downloadSub}</p>
          <div className="mt-6 flex justify-center">
            <StoreButtons light />
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 text-teal-100/90">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-10 grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-3 flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Kodisha"
                  className="h-12 w-12 object-contain brightness-0 invert"
                />
                <span className="text-lg font-bold text-white">Kodisha</span>
              </div>
              <p className="text-xs leading-relaxed text-teal-200/80">{t.footer.tagline}</p>
              <p className="mt-3 text-xs">
                <a href={WHATSAPP} className="hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">{t.footer.product}</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button onClick={() => setPage('services')} className="hover:text-white">
                    {t.nav.discover}
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('how')} className="hover:text-white">
                    {t.nav.how}
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('get-app')} className="hover:text-white">
                    {t.nav.getApp}
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('register-renter')} className="hover:text-white">
                    {t.nav.registerRenter}
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('register-owner')} className="hover:text-white">
                    {t.nav.registerOwner}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">{t.footer.company}</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button onClick={() => setPage('about')} className="hover:text-white">
                    {t.nav.about}
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('contact')} className="hover:text-white">
                    {t.nav.contact}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">{t.footer.stores}</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href={PLAY_STORE} target="_blank" rel="noreferrer" className="hover:text-white">
                    Google Play
                  </a>
                </li>
                <li>
                  <a href={APP_STORE} target="_blank" rel="noreferrer" className="hover:text-white">
                    App Store
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-teal-700/50 pt-8 text-xs sm:flex-row">
            <p>
              © {new Date().getFullYear()} Kodisha. {t.footer.rights}
            </p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white">
                {t.footer.terms}
              </a>
              <a href="#" className="hover:text-white">
                {t.footer.privacy}
              </a>
              <a href="#" className="hover:text-white">
                {t.footer.safety}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
