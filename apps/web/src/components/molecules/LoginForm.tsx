import { Button } from '../atoms/Button'
import { Checkbox } from '../atoms/Checkbox'
import { TextField } from '../atoms/TextField'
import { ArrowRightIcon } from '../atoms/icons'
import { AuthDivider } from './AuthDivider'
import { SocialAuthButton } from '../atoms/SocialAuthButton'

export function LoginForm() {
  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <TextField
        autoComplete="username"
        label="Email ou usuário"
        name="identifier"
        placeholder="usuario123"
      />

      <TextField
        autoComplete="current-password"
        label="Senha"
        name="password"
        placeholder="******"
        type="password"
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Checkbox defaultChecked label="Lembrar-me" name="remember" />
        <a
          className="text-sm font-medium text-white/80 underline decoration-white/35 underline-offset-4 transition hover:text-white hover:decoration-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7fff84]"
          href="#forgot-password"
        >
          Esqueci a senha
        </a>
      </div>

      <Button
        endIcon={<ArrowRightIcon className="h-4 w-4" />}
        fullWidth
        type="submit"
        variant="primary"
      >
        Login
      </Button>

      <AuthDivider>ou entre com outras contas</AuthDivider>

      <div className="grid grid-cols-2 gap-4">
        <SocialAuthButton
          iconAlt="GitHub"
          iconSrc="/Github.png"
          label="Github"
        />
        <SocialAuthButton
          iconAlt="Google"
          iconSrc="/Google.png"
          label="Gmail"
        />
      </div>
    </form>
  )
}
