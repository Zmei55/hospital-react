import { useOutletContext } from "react-router-dom";
import { TUserLoginReq } from "entities/User";

interface ILogOutletContext {
  formState: TUserLoginReq;
  setFormState: (value: React.SetStateAction<TUserLoginReq>) => void;
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
