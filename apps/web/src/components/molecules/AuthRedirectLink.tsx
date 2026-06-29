import type { ReactNode } from 'react'

interface AuthRedirectLinkProps {
  prompt: string
  action: string
  href: string
  icon?: ReactNode
}

export function AuthRedirectLink({
  prompt,
  action,
  href,
  icon,
}: AuthRedirectLinkProps) {
  return (
    <div className="flex flex-col items-start gap-1 text-left sm:flex-row sm:items-center sm:gap-2">
      <p className="text-[1.125rem] leading-[1.5] text-[#e1e1e1]">{prompt}</p>
      <a
        className="inline-flex items-center gap-3 text-[1.125rem] font-normal leading-[1.5] text-[#81fe88] transition hover:text-[#9bff9f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81fe88]"
        href={href}
      >
        <span>{action}</span>
        {icon}
      </a>
    </div>
  )
}
