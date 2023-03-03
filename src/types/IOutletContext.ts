import { IUser } from './IUser';

export interface IOutletContext {
  formState: IUser;
  setFormState: (value: React.SetStateAction<IUser>) => void;
}
