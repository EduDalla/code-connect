import type { InputHTMLAttributes } from 'react'
import { classNames } from '../../lib/classNames'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Checkbox({
  id,
  label,
  className,
  ...props
}: CheckboxProps) {
  const fieldId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <label
      className={classNames(
        'inline-flex items-center gap-2 text-sm text-white/55',
        className,
      )}
      htmlFor={fieldId}
    >
      <input
        className="h-5 w-5 rounded-[4px] border border-white/60 bg-transparent text-[#7fff84] accent-[#7fff84] outline-none transition focus-visible:ring-2 focus-visible:ring-[#7fff84]/30"
        id={fieldId}
        type="checkbox"
        {...props}
      />
      <span>{label}</span>
    </label>
  )
}
