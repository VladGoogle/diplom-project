import { Role } from '../enums/role.enum';

export interface PayloadInterface {
  email: string;
  roles: Role[];
}
