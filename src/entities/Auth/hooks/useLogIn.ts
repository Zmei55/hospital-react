import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "shared";
import { useLogInMutation, loginSuccess } from "entities/Auth";
import { TUserLoginReq } from "entities/User";

export const useLogIn = () => {
  const dispatch = useAppDispatch();
  const [login, { isLoading, isError, reset: resetLoginRequest }] =
    useLogInMutation();

  const errorModalClose = () => {
    resetLoginRequest();
  };

  const handleSignInSubmit: SubmitHandler<TUserLoginReq> = async data => {
    const formData = new FormData();
    if (data.username) formData.append("username", data.username);
    if (data.password) formData.append("password", data.password);

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
