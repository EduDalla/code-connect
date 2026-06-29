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
        'inline-flex items-center gap-2 text-sm leading-normal text-code-medium',
        className,
      )}
      htmlFor={fieldId}
    >
      <input
        className="h-6 w-6 rounded-[4px] border-2 border-code-medium bg-transparent text-code-highlight accent-code-highlight outline-none transition focus-visible:ring-2 focus-visible:ring-code-highlight/30"
        id={fieldId}
        type="checkbox"
        {...props}
      />
      <span>{label}</span>
    </label>
  )
}
