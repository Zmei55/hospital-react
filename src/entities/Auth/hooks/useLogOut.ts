import { useAppDispatch } from "shared";
import { useLogOutMutation, logoutSuccess } from "entities/Auth";

export const useLogOut = () => {
  const dispatch = useAppDispatch();
  const [logout] = useLogOutMutation();

  const onClick = () => {
    logout(null);
    dispatch(logoutSuccess());
  };

  return [onClick];
};
