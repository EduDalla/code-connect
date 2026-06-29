import type { ReactNode } from 'react'
import { classNames } from '../../lib/classNames'

interface AuthLayoutProps {
  children: ReactNode
  className?: string
}

export function AuthLayout({ children, className }: AuthLayoutProps) {
  return (
    <main
      className={classNames(
        'relative isolate min-h-screen overflow-hidden bg-[#02070a] text-white',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[91px] w-[76px] rounded-[2rem] border-[10px] border-[#0d1a21]/70 opacity-70 sm:left-[5%] sm:top-[-5rem] sm:h-[37rem] sm:w-[20rem] sm:rounded-[7rem] sm:border-[18px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[92px] w-[77px] rounded-[2rem] border-[10px] border-[#0d1a21]/70 opacity-70 sm:right-[4%] sm:bottom-[-6rem] sm:h-[39rem] sm:w-[20rem] sm:rounded-[7rem] sm:border-[18px]"
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] items-start justify-center px-4 py-14 sm:items-center sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  )
}
