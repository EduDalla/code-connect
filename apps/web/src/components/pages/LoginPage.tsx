import { AuthCard } from '../organisms/AuthCard'
import { LoginForm } from '../molecules/LoginForm'
import { AuthLayout } from '../templates/AuthLayout'
import { AuthRedirectLink } from '../molecules/AuthRedirectLink'
import { ClipboardIcon } from '../atoms/icons'

const loginBanner = {
  desktop: '/banner-login-desktop.png',
  tablet: '/banner-login-tablet.png',
  mobile: '/banner-login-mobile.png',
  alt: 'Banner principal da tela de login do Code Connect',
  className: 'lg:h-[636px]',
}

export function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard
        banner={loginBanner}
        footer={
          <AuthRedirectLink
            action="Crie seu cadastro!"
            href="#cadastro"
            icon={<ClipboardIcon className="h-4 w-4" />}
            prompt="Ainda não tem conta?"
          />
        }
        subtitle="Boas-vindas! Faça seu login."
        title="Login"
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  )
}
