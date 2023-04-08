import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLogInMutation, loginSuccess, IAuthFormState } from "entities/Auth";

export const useHandleSubmit = (
  initialValue: IAuthFormState
): [
  IAuthFormState,
  React.Dispatch<React.SetStateAction<IAuthFormState>>,
  boolean,
  React.FormEventHandler<HTMLFormElement>
] => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLogInMutation();
  const [formState, setFormState] = useState<IAuthFormState>(initialValue);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const user = await login(formState).unwrap();
      dispatch(loginSuccess(user)); // диспатчим форму через authSlice в api
      setFormState(initialValue);
    } catch (error) {
      console.log("ERROR authFormSubmit");
    }
  };

  return [formState, setFormState, isLoading, handleSubmit];
};
