import { useOutletContext } from "react-router-dom";
import { IAuthFormState } from "entities/Auth";

interface ILogOutletContext {
  formState: IAuthFormState;
  setFormState: (value: React.SetStateAction<IAuthFormState>) => void;
  isLoading: boolean;
}

export const useHandleChange = () => {
  const { formState, setFormState, isLoading } =
    useOutletContext<ILogOutletContext>();

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => setFormState(prev => ({ ...prev, [name]: value }));

  return { formState, handleChange, isLoading };
};
