interface AuthDividerProps {
  children: string
}

export function AuthDivider({ children }: AuthDividerProps) {
  return (
    <div className="flex items-center gap-4 text-sm text-white/75">
      <span className="h-px flex-1 bg-white/22" aria-hidden="true" />
      <span className="whitespace-nowrap">{children}</span>
      <span className="h-px flex-1 bg-white/22" aria-hidden="true" />
    </div>
  )
}
