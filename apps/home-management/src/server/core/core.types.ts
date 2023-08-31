import { UserRole } from 'generated/prisma';

export interface AuthContext {
  loggedIn: boolean;
  properties: string[];
  role: UserRole | null;
  userId: string;
}

export interface PaginatedObject<Obj = unknown> {
  count: number;
  nextPage?: number | null;
  objects: Obj[];
  pageCount: number;
  prevPage?: number | null;
}

export interface PaginationParams {
  page?: number | null;
  limit?: number | null;
}
