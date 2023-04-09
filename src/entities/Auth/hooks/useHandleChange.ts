import { useOutletContext } from "react-router-dom";
import { ILogOutletContext } from "entities/Auth";

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
