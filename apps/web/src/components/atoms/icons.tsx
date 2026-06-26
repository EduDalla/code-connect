import type { SVGProps } from 'react'

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 10h10.25m0 0-4.25-4.25m4.25 4.25-4.25 4.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function ClipboardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 5.25h6m-4.5-2h3A1.5 1.5 0 0 1 13 4.75v.5h.5A1.5 1.5 0 0 1 15 6.75v8A1.5 1.5 0 0 1 13.5 16.25h-7A1.5 1.5 0 0 1 5 14.75v-8A1.5 1.5 0 0 1 6.5 5.25H7v-.5A1.5 1.5 0 0 1 8.5 3.25Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}
