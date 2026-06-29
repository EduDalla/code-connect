import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { UsersService } from '../users/users.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: jwtConstants.secret,
        }),
      ],
      providers: [AuthService, UsersService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('registers a user without exposing the password hash', async () => {
    const user = await authService.register({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      password: 'secure-password',
    });

    expect(user).toMatchObject({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
    });
    expect(user).not.toHaveProperty('passwordHash');
  });

  it('returns an access token for valid credentials', async () => {
    await authService.register({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      password: 'secure-password',
    });

    const response = await authService.login({
      email: 'ada@example.com',
      password: 'secure-password',
    });

    expect(response.accessToken).toEqual(expect.any(String));
    expect(response.user.email).toBe('ada@example.com');
  });
});
