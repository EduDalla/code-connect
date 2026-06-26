import type { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

interface AuthCardBanner {
  desktop: string
  tablet: string
  mobile: string
  alt: string
}

interface AuthCardProps {
  banner: AuthCardBanner
  title: string
  subtitle: string
  children: ReactNode
  footer: ReactNode
  className?: string
}

export function AuthCard({
  banner,
  title,
  subtitle,
  children,
  footer,
  className,
}: AuthCardProps) {
  return (
    <section
      className={classNames(
        'relative w-full max-w-[1120px] overflow-hidden rounded-[28px] border border-white/6 bg-[#1b2022] shadow-[0_30px_90px_rgba(0,0,0,0.55)]',
        className,
      )}
    >
      <div className="grid lg:grid-cols-[407px_minmax(0,1fr)]">
        <div className="relative aspect-[296/360] overflow-hidden bg-black sm:aspect-[528/415] lg:h-full lg:aspect-auto">
          <picture className="absolute inset-0 block">
            <source media="(max-width: 767px)" srcSet={banner.mobile} />
            <source media="(max-width: 1023px)" srcSet={banner.tablet} />
            <img
              alt={banner.alt}
              className="h-full w-full object-cover"
              src={banner.desktop}
            />
          </picture>
        </div>

        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <div className="max-w-[448px] space-y-8">
            <header className="space-y-8">
              <h1 className="text-[2.1rem] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[2.3rem]">
                {title}
              </h1>
              <p className="text-[1.22rem] leading-[1.45] text-white/88">
                {subtitle}
              </p>
            </header>

            {children}
            {footer}
          </div>
        </div>
      </div>
    </section>
  )
}
