import { ConflictException, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {
  CreateUserInput,
  PublicUser,
  StoredUser,
} from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users = new Map<string, StoredUser>();
  private readonly userIdsByEmail = new Map<string, string>();

  create(input: CreateUserInput): PublicUser {
    const normalizedEmail = this.normalizeEmail(input.email);

    if (this.userIdsByEmail.has(normalizedEmail)) {
      throw new ConflictException('Email já cadastrado.');
    }

    const user: StoredUser = {
      id: randomUUID(),
      name: input.name,
      email: normalizedEmail,
      passwordHash: input.passwordHash,
      createdAt: new Date().toISOString(),
    };

    this.users.set(user.id, user);
    this.userIdsByEmail.set(user.email, user.id);

    return this.toPublicUser(user);
  }

  findById(id: string): PublicUser | undefined {
    const user = this.users.get(id);

    return user ? this.toPublicUser(user) : undefined;
  }

  findStoredByEmail(email: string): StoredUser | undefined {
    const userId = this.userIdsByEmail.get(this.normalizeEmail(email));

    return userId ? this.users.get(userId) : undefined;
  }

  toPublicUser(user: StoredUser): PublicUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }

  private normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
  }
}
