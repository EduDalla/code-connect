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
        'flex flex-col items-center justify-center gap-1 text-code-offwhite transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-code-highlight',
        className,
      )}
      type="button"
      {...props}
    >
      <img alt={iconAlt} className="h-8 w-8 object-contain" src={iconSrc} />
      <span className="text-xs leading-normal">{label}</span>
    </button>
  )
}
