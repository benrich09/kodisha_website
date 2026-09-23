import type { ReactNode } from 'react'

export function PageHero({
  title,
  subtitle,
  children,
}: {
  title?: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-teal-900/40" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6">
        {title && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">{title}</p>
        )}
        {subtitle && (
          <h1 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {subtitle}
          </h1>
        )}
        {children}
      </div>
    </section>
  )
}
