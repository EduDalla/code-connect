import type { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

interface AuthCardBanner {
  desktop: string
  tablet: string
  mobile: string
  alt: string
  className?: string
  objectPosition?: string
  showLogo?: boolean
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
        'relative w-full max-w-[328px] overflow-hidden rounded-[16px] border border-code-graphite bg-code-surface shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:max-w-[600px] lg:max-w-[996px] lg:rounded-[32px] lg:px-[78px] lg:py-14',
        className,
      )}
    >
      <div className="grid gap-8 p-4 sm:p-8 lg:grid-cols-[407px_410px] lg:justify-between lg:gap-0 lg:p-0">
        <div
          className={classNames(
            'relative aspect-[296/360] overflow-hidden bg-black sm:aspect-[528/415] lg:h-full lg:aspect-auto',
            banner.className,
          )}
        >
          <picture className="absolute inset-0 block">
            <source media="(max-width: 767px)" srcSet={banner.mobile} />
            <source media="(max-width: 1023px)" srcSet={banner.tablet} />
            <img
              alt={banner.alt}
              className="h-full w-full object-cover"
              style={{ objectPosition: banner.objectPosition }}
              src={banner.desktop}
            />
          </picture>
          {banner.showLogo && (
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 text-white sm:bottom-8">
              <span className="relative h-8 w-8 text-code-highlight" aria-hidden="true">
                <span className="absolute left-0 top-2 h-4 w-4 rounded-[5px] border-[3px] border-current" />
                <span className="absolute right-0 top-0 h-4 w-4 rounded-[5px] border-[3px] border-current" />
              </span>
              <span className="text-base font-semibold leading-none tracking-normal">
                code
                <br />
                connect
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            <header className="space-y-6">
              <h1 className="text-2xl font-semibold leading-normal tracking-normal text-code-offwhite sm:text-3xl">
                {title}
              </h1>
              <p className="text-xl leading-normal text-code-offwhite">
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
