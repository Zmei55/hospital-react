import { useEffect } from "react";
import { fetchIsActiveInfo } from "entities/Patient";
import { useAppDispatch, useAppSelector, useToggle } from "shared";

export const useHandleInfoActive = () => {
  const dispatch = useAppDispatch();
  const isInfoActive = useAppSelector(state => state.patients.isActiveInfo);
  const [isActive, setIsActive] = useToggle(isInfoActive);

  useEffect(() => {
    dispatch(fetchIsActiveInfo(isActive));
  }, [dispatch, isActive]);

  const handleInfoActive: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsActive();
  };

  return { isInfoActive, handleInfoActive };
};
