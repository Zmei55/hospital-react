import { useState } from "react";
import { useAppDispatch } from "shared";
import { useLogInMutation, loginSuccess, IAuthFormState } from "entities/Auth";

export const useLogIn = (initialValue: IAuthFormState) => {
  const dispatch = useAppDispatch();
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

  return { formState, setFormState, isLoading, handleSubmit };
};
