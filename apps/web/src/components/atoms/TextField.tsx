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
        className="block text-lg font-normal leading-normal text-code-offwhite"
        htmlFor={fieldId}
      >
        {label}
      </label>
      <input
        className={classNames(
          'w-full rounded-[4px] border border-transparent bg-code-medium px-4 py-2 text-sm leading-normal text-code-graphite outline-none transition placeholder:text-code-surface focus:border-code-highlight focus:ring-2 focus:ring-code-highlight/25',
          className,
        )}
        id={fieldId}
        type={type}
        {...props}
      />
    </div>
  )
}
