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
        'flex flex-col items-center justify-center gap-1 text-[#e1e1e1] transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81fe88]',
        className,
      )}
      type="button"
      {...props}
    >
      <img alt={iconAlt} className="h-8 w-8 object-contain" src={iconSrc} />
      <span className="text-[0.78125rem] leading-[1.5]">{label}</span>
    </button>
  )
}
