type User = {
  _id: string | number | null;
  username: string | null;
  password: string | null;
  name: string | null;
  department: "ADMINISTRATION" | "SURGERY" | null;
  workplaces: ("ADMIN" | "TREATMENT_ROOM")[] | null;
  position: "ADMIN" | "NURSE" | null;
  roles: ("ADMIN" | "USER")[] | null;
  isNotLocked: boolean | null;
  createdAt: Date | null;
  token: string | null;
};

// Omit - выкинуть из базового
export type TUser = Omit<
  User,
  "password" | "isNotLocked" | "createdAt" | "token"
>;

// Pick - взять то что нужно и добавить новое
export type TUserRegisterReq = Pick<
  User,
  "username" | "password" | "name" | "department" | "position"
> & { workplace: string | null };

export type TUserLoginReq = {
  username: string;
  password: string;
};

export type TUserLoginRes = {
  user: TUser;
  token: string;
};

export type TAuthState = {
  user: TUser;
  token: string | null;
  isLoggedIn: boolean;
};

export type TUserState = {
  user: TUser;
  modalUser: boolean;
};
