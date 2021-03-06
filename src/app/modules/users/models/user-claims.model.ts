import { RoleModel } from './role.model';

export interface UserClaimsModel {
  email: string;
  unique_name: string;
  nameid: string;
  role: RoleModel[];
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}
