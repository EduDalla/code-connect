import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'crypto';
import { promisify } from 'util';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UsersService } from '../users/users.service';

const scrypt = promisify(scryptCallback);
const passwordKeyLength = 64;

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const passwordHash = await this.hashPassword(registerDto.password);

    return this.usersService.create({
      name: registerDto.name,
      email: registerDto.email,
      passwordHash,
    });
  }

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const user = this.usersService.findStoredByEmail(loginDto.email);

    if (
      !user ||
      !(await this.verifyPassword(loginDto.password, user.passwordHash))
    ) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const payload: JwtPayload = { sub: user.id, email: user.email };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      user: this.usersService.toPublicUser(user),
    };
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = randomBytes(16).toString('hex');
    const key = (await scrypt(password, salt, passwordKeyLength)) as Buffer;

    return `${salt}:${key.toString('hex')}`;
  }

  private async verifyPassword(
    password: string,
    passwordHash: string,
  ): Promise<boolean> {
    const [salt, storedKey] = passwordHash.split(':');

    if (!salt || !storedKey) {
      return false;
    }

    const suppliedKey = (await scrypt(
      password,
      salt,
      passwordKeyLength,
    )) as Buffer;
    const storedKeyBuffer = Buffer.from(storedKey, 'hex');

    return (
      suppliedKey.length === storedKeyBuffer.length &&
      timingSafeEqual(suppliedKey, storedKeyBuffer)
    );
  }
}
