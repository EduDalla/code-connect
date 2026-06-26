# Página de Login Web

## Resumo
Implementar a página de login como tela inicial do `apps/web`, substituindo o scaffold atual do Vite. A tela seguirá o layout anexado, usando os assets existentes `banner-login-desktop.png`, `banner-login-tablet.png`, `banner-login-mobile.png`, `Github.png` e `Google.png`, com estrutura preparada para reutilização futura na página de cadastro.

## Mudanças Principais
- Configurar Tailwind CSS no Vite conforme a documentação oficial: adicionar `tailwindcss` e `@tailwindcss/vite`, registrar o plugin em `vite.config.ts` e importar Tailwind em `src/index.css`.
- Reorganizar `apps/web/src` com Atomic Design:
  - `atoms`: `Button`, `TextField`, `Checkbox`, `SocialAuthButton`.
  - `molecules`: `AuthDivider`, `AuthRedirectLink`, `LoginForm`.
  - `organisms`: `AuthCard`.
  - `templates`: `AuthLayout`.
  - `pages`: `LoginPage`.
- Substituir `App.tsx` para renderizar `LoginPage`.
- Remover a dependência visual do scaffold atual (`App.css`, logos React/Vite e contador), sem editar `dist`.
- Criar um `AuthLayout` reutilizável com props para:
  - título do formulário;
  - texto de boas-vindas;
  - imagem/banner;
  - conteúdo do formulário;
  - link inferior para alternar entre login/cadastro.
- Implementar o formulário de login com:
  - campo “Email ou usuário”;
  - campo “Senha”;
  - checkbox “Lembrar-me”;
  - link “Esqueci a senha”;
  - botão primário “Login” com ícone de seta simples via texto/SVG inline;
  - divisor “ou entre com outras contas”;
  - botões sociais Github e Gmail usando as imagens fornecidas;
  - CTA “Crie seu cadastro!”.
- O submit será apenas visual nesta etapa: `preventDefault`, sem chamada à API e sem validação de negócio.

## Layout e Responsividade
- Desktop: card central escuro com banner à esquerda e formulário à direita, seguindo proporções do layout de referência.
- Tablet/mobile: manter o mesmo layout base, usando `banner-login-tablet.png` e `banner-login-mobile.png` quando apropriado, empilhando banner e formulário para evitar overflow.
- Fundo: cor escura próxima ao mockup, com marcas decorativas sutis em CSS para reproduzir o efeito visual sem exigir novo asset.
- Acessibilidade: labels associados aos inputs, foco visível, botões com `type` correto, imagens sociais com `alt`, e links semanticamente corretos.

## Testes e Verificação
- Rodar `./pnpm web:lint`.
- Rodar `./pnpm web:build`.
- Como ainda não existe script de teste web, não adicionar teste automatizado nesta etapa; validar pelos checks acima e pela renderização local.
- Após implementação, iniciar `./pnpm web:dev` e informar a URL local para revisão visual.

## Assumptions
- A página de login deve substituir a tela inicial atual, sem adicionar React Router agora.
- O formulário é apenas visual/acessível nesta entrega.
- A página de cadastro não será implementada agora, mas o layout e os componentes serão criados para reuso direto.
- Tailwind será adicionado ao projeto web porque a guideline do repositório exige Tailwind para novos estilos.
