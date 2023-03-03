import { IUser } from './IUser';

export interface IUserState {
  user: IUser;
  token: string;
  isLoggedIn: boolean;
}
