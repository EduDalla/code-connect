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
        className="pointer-events-none absolute left-[-3rem] top-[-4rem] h-[28rem] w-[17rem] rounded-[7rem] border-[18px] border-[#0d1a21]/70 opacity-70 sm:left-[5%] sm:top-[-5rem] sm:h-[37rem] sm:w-[20rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2rem] bottom-[-3rem] h-[26rem] w-[16rem] rounded-[7rem] border-[18px] border-[#0d1a21]/70 opacity-70 sm:right-[4%] sm:bottom-[-6rem] sm:h-[39rem] sm:w-[20rem]"
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  )
}
