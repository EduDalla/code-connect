export interface PublicUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface StoredUser extends PublicUser {
  passwordHash: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
  passwordHash: string;
}
