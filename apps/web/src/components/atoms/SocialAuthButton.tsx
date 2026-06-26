import type { ButtonHTMLAttributes } from 'react'
import { classNames } from '../../lib/classNames'

interface SocialAuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string
  iconAlt: string
  label: string
}

export function SocialAuthButton({
  className,
  iconSrc,
  iconAlt,
  label,
  ...props
}: SocialAuthButtonProps) {
  return (
    <button
      className={classNames(
        'flex min-h-[86px] flex-col items-center justify-center gap-2 rounded-[16px] border border-white/8 bg-white/4 px-4 py-3 text-white/85 transition hover:border-white/18 hover:bg-white/7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fff84]',
        className,
      )}
      type="button"
      {...props}
    >
      <img alt={iconAlt} className="h-7 w-7 object-contain" src={iconSrc} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
}
