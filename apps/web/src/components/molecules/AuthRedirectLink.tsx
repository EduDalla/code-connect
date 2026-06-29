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
      <p className="text-lg leading-normal text-code-offwhite">{prompt}</p>
      <a
        className="inline-flex items-center gap-3 text-lg font-normal leading-normal text-code-highlight transition hover:text-code-highlight-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-code-highlight"
        href={href}
        onClick={(event) => {
          if (!href.startsWith('/')) {
            return
          }

          event.preventDefault()
          window.history.pushState(null, '', href)
          window.dispatchEvent(new PopStateEvent('popstate'))
        }}
      >
        <span>{action}</span>
        {icon}
      </a>
    </div>
  )
}
