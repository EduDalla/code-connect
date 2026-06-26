import { Injectable } from '@nestjs/common';
import { buildGreeting, appName } from '@code-connect/shared';

@Injectable()
export class AppService {
  getHello(): string {
    return buildGreeting(`${appName} api`);
  }
}
