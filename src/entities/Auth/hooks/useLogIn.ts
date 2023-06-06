import { useState } from "react";
import { useAppDispatch, useAppNavigate } from "shared";
import {
  useLogInMutation,
  loginSuccess,
  IAuthFormState,
  initialFormAuthState,
} from "entities/Auth";

export const useLogIn = () => {
  const dispatch = useAppDispatch();
  const [login, { isLoading, isError, reset: resetLoginRequest }] =
    useLogInMutation();
  const [formState, setFormState] =
    useState<IAuthFormState>(initialFormAuthState);
  const [navigate] = useAppNavigate();

  const errorModalClose = () => {
    setFormState(initialFormAuthState);
    navigate("/");
    resetLoginRequest();
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const user = await login(formState).unwrap();
      dispatch(loginSuccess(user)); // диспатчим форму через authSlice в api
      setFormState(initialFormAuthState);
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
