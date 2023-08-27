import { UserRole } from 'generated/prisma';

export interface AuthContext {
  loggedIn: boolean;
  properties: string[];
  role: UserRole | null;
  userId: string | null;
}
