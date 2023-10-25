import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "shared";
import { useLogInMutation, loginSuccess, ISingInState } from "entities/Auth";

export const useLogIn = () => {
  const dispatch = useAppDispatch();
  const [login, { isLoading, isError, reset: resetLoginRequest }] =
    useLogInMutation();

  const errorModalClose = () => {
    resetLoginRequest();
  };

  const handleSignInSubmit: SubmitHandler<ISingInState> = async data => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    try {
      const loginResponse = await login(formData).unwrap();
      dispatch(loginSuccess(loginResponse));
      resetLoginRequest();
    } catch (error) {
      console.log("ERROR authFormSubmit");
    }
  };

  return {
    isLoading,
    isError,
    handleSignInSubmit,
    errorModalClose,
  };
};
