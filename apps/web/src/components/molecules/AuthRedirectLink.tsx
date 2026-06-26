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
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-sm text-white/85">{prompt}</p>
      <a
        className="inline-flex items-center gap-3 text-[1.05rem] font-medium text-[#7fff84] transition hover:text-[#9bff9f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7fff84]"
        href={href}
      >
        <span>{action}</span>
        {icon}
      </a>
    </div>
  )
}
