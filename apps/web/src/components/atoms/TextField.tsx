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
        className="block text-[1.02rem] font-medium text-white/90"
        htmlFor={fieldId}
      >
        {label}
      </label>
      <input
        className={classNames(
          'w-full rounded-[6px] border border-transparent bg-[#a7a7a7] px-4 py-3 text-sm text-[#101010] outline-none transition placeholder:text-[#3b3b3b] focus:border-[#7fff84] focus:ring-2 focus:ring-[#7fff84]/25',
          className,
        )}
        id={fieldId}
        type={type}
        {...props}
      />
    </div>
  )
}
