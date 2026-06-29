import { Injectable } from '@nestjs/common';
import { randomBytes, scrypt as scryptCallback } from 'crypto';
import { promisify } from 'util';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '../users/users.service';

const scrypt = promisify(scryptCallback);
const passwordKeyLength = 64;

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(registerDto: RegisterDto) {
    const passwordHash = await this.hashPassword(registerDto.password);

    return this.usersService.create({
      name: registerDto.name,
      email: registerDto.email,
      passwordHash,
    });
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = randomBytes(16).toString('hex');
    const key = (await scrypt(password, salt, passwordKeyLength)) as Buffer;

    return `${salt}:${key.toString('hex')}`;
  }
}
