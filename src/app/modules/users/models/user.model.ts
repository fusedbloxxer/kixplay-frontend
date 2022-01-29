import { UserClaimsModel } from "./user-claims.model";

export interface UserModel {
  id: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  token: string;
  claims: UserClaimsModel;
}
