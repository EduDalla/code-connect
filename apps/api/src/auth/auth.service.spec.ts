import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
});
