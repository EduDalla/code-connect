import type { Request } from 'express';
import { JwtPayload } from './jwt-payload.interface';
import { PublicUser } from '../../users/interfaces/user.interface';

export interface AuthenticatedRequest extends Request {
  auth?: JwtPayload;
  user?: PublicUser;
}
