import { Role } from '../enums/role.enum';

export interface PayloadInterface {
  id: number;
  email: string;
  isBanned: boolean;
  roles: Role[];
}
