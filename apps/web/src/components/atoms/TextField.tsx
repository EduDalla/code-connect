import type { InputHTMLAttributes } from 'react'
import { classNames } from '../../lib/classNames'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function TextField({
  id,
  label,
  className,
  type = 'text',
  ...props
}: TextFieldProps) {
  const fieldId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-2">
      <label
        className="block text-[1.125rem] font-normal leading-[1.5] text-[#e1e1e1]"
        htmlFor={fieldId}
      >
        {label}
      </label>
      <input
        className={classNames(
          'w-full rounded-[4px] border border-transparent bg-[#888] px-4 py-2 text-[0.9375rem] leading-[1.5] text-[#00090e] outline-none transition placeholder:text-[#171d1f] focus:border-[#81fe88] focus:ring-2 focus:ring-[#81fe88]/25',
          className,
        )}
        id={fieldId}
        type={type}
        {...props}
      />
    </div>
  )
}
