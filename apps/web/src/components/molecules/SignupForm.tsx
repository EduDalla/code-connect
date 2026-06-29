import { Button } from '../atoms/Button'
import { Checkbox } from '../atoms/Checkbox'
import { TextField } from '../atoms/TextField'
import { ArrowRightIcon } from '../atoms/icons'
import { AuthDivider } from './AuthDivider'
import { SocialAuthButton } from '../atoms/SocialAuthButton'

export function SignupForm() {
  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <div className="space-y-4">
        <TextField
          autoComplete="name"
          label="Nome"
          name="name"
          placeholder="Nome completo"
        />

        <TextField
          autoComplete="email"
          label="Email"
          name="email"
          placeholder="Digite seu email"
          type="email"
        />

        <TextField
          autoComplete="new-password"
          label="Senha"
          name="password"
          placeholder="******"
          type="password"
        />

        <Checkbox defaultChecked label="Lembrar-me" name="remember" />
      </div>

      <Button
        endIcon={<ArrowRightIcon className="h-4 w-4" />}
        fullWidth
        type="submit"
        variant="primary"
      >
        Cadastrar
      </Button>

      <AuthDivider>ou entre com outras contas</AuthDivider>

      <div className="flex justify-center gap-6">
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
