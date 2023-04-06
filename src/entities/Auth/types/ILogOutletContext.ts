import { ILogUserState } from "./ILogUserState";

export interface ILogOutletContext {
  formState: ILogUserState;
  setFormState: (value: React.SetStateAction<ILogUserState>) => void;
  isLoading: boolean;
}
