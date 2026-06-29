import { AuthCard } from '../organisms/AuthCard'
import { SignupForm } from '../molecules/SignupForm'
import { AuthLayout } from '../templates/AuthLayout'
import { AuthRedirectLink } from '../molecules/AuthRedirectLink'
import { LoginIcon } from '../atoms/icons'

const signupBanner = {
  desktop: '/banner-signup-desktop.png',
  tablet: '/banner-signup-desktop.png',
  mobile: '/banner-signup-mobile.png',
  alt: 'Banner principal da tela de cadastro do Code Connect',
  className: 'lg:h-[675px]',
  objectPosition: '50% 50%',
  showLogo: true,
}

export function SignupPage() {
  return (
    <AuthLayout>
      <AuthCard
        banner={signupBanner}
        footer={
          <AuthRedirectLink
            action="Faça seu login!"
            href="#login"
            icon={<LoginIcon className="h-4 w-4" />}
            prompt="Já tem conta?"
          />
        }
        subtitle="Olá! Preencha seus dados."
        title="Cadastro"
      >
        <SignupForm />
      </AuthCard>
    </AuthLayout>
  )
}
