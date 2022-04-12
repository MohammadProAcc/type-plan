import { IUser } from "./../../schemas/user.ts";

export interface Context {
  token?: string;
  user?: IUser;
}
