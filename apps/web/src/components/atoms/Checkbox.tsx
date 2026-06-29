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
        'inline-flex items-center gap-2 text-[0.9375rem] leading-[1.5] text-[#888]',
        className,
      )}
      htmlFor={fieldId}
    >
      <input
        className="h-6 w-6 rounded-[4px] border-2 border-[#888] bg-transparent text-[#81fe88] accent-[#81fe88] outline-none transition focus-visible:ring-2 focus-visible:ring-[#81fe88]/30"
        id={fieldId}
        type="checkbox"
        {...props}
      />
      <span>{label}</span>
    </label>
  )
}
