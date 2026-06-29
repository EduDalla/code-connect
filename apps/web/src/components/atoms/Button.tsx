import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-code-highlight text-code-petrol shadow-[0_18px_40px_rgba(38,255,96,0.16)] hover:bg-code-highlight-hover',
  secondary:
    'bg-white/8 text-white ring-1 ring-inset ring-white/10 hover:bg-white/12',
  ghost: 'bg-transparent text-white/80 hover:bg-white/5 hover:text-white',
}

export function Button({
  className,
  children,
  variant = 'primary',
  startIcon,
  endIcon,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'inline-flex items-center justify-center gap-2 rounded-[8px] px-4 py-3 text-lg font-semibold leading-normal transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-code-highlight disabled:pointer-events-none disabled:opacity-60',
        variantClasses[variant],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </button>
  )
}
