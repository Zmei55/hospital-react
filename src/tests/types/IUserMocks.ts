export interface IUserMocks {
  user: {
    _id: string | number;
    username: string;
    password: string;
    name: string;
    workplace: string;
    position: string;
    role: string;
    isNotLocked: boolean;
    createdAt: string;
  };
  token: string;
}
