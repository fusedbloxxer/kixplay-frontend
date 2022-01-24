import { Role } from './role.model';

export interface Token {
  email: string;
  unique_name: string;
  nameid: string;
  roles: Role[];
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}
