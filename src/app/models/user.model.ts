import { UserClaims } from "./user-claims.model";

export interface User {
  id: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  token: string;
  claims: UserClaims;
}
