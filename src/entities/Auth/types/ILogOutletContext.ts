import { IAuthFormState } from "./IAuthFormState";

export interface ILogOutletContext {
  formState: IAuthFormState;
  setFormState: (value: React.SetStateAction<IAuthFormState>) => void;
  isLoading: boolean;
}
