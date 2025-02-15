import { IUser } from "./IUser";

export interface IAuth {
  isAuth?: boolean;
  isLoading?: boolean;
  user: IUser;
  error?: string | null;
  authUser: (user: IUser) => void;
  logout: () => void;
}
