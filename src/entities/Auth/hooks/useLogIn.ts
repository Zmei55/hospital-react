import { useState } from "react";
import { useAppDispatch, useAppNavigate } from "shared";
import { useLogInMutation, loginSuccess, IAuthFormState } from "entities/Auth";

export const useLogIn = (initialValue: IAuthFormState) => {
  const dispatch = useAppDispatch();
  const [login, { isLoading, isError, reset: resetLoginRequest }] =
    useLogInMutation();
  const [formState, setFormState] = useState<IAuthFormState>(initialValue);
  const [navigate] = useAppNavigate();

  const errorModalClose = () => {
    setFormState(initialValue);
    navigate("/");
    resetLoginRequest();
  };

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

  return {
    formState,
    setFormState,
    isLoading,
    isError,
    handleSubmit,
    errorModalClose,
  };
};
