import { useAppDispatch } from "shared";
import { useLazyLogOutQuery, logoutSuccess } from "entities/Auth";

export const useLogOut = () => {
  const dispatch = useAppDispatch();
  const [logout] = useLazyLogOutQuery();

  const onClick = () => {
    logout(null);
    dispatch(logoutSuccess());
  };

  return [onClick];
};
