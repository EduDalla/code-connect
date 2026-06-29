import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

interface UserResponseBody {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

describe('Auth and users endpoints (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  it('registers a user', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        password: 'secure-password',
      })
      .expect(201);
    const body = response.body as unknown as UserResponseBody;

    expect(body).toMatchObject({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
    });
    expect(typeof body.id).toBe('string');
    expect(typeof body.createdAt).toBe('string');
    expect(response.body).not.toHaveProperty('password');
    expect(response.body).not.toHaveProperty('passwordHash');
  });

  it('rejects duplicate emails', async () => {
    const payload = {
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      password: 'secure-password',
    };

    await request(app.getHttpServer())
      .post('/auth/register')
      .send(payload)
      .expect(201);
    await request(app.getHttpServer())
      .post('/auth/register')
      .send(payload)
      .expect(409);
  });

  afterEach(async () => {
    await app.close();
  });
});
