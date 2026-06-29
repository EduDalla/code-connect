export const jwtConstants = {
  secret: process.env.JWT_SECRET ?? 'code-connect-development-secret',
} as const;
