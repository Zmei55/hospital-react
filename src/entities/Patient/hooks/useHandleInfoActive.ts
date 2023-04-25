import { useState, useEffect } from "react";
import { useAppDispatch } from "shared";
import { fetchIsActivePatientInfo } from "entities/Patient";

export const useHandleInfoActive = () => {
  const dispatch = useAppDispatch();
  const [isInfoActive, setIsInfoActive] = useState(false);

  useEffect(() => {
    dispatch(fetchIsActivePatientInfo(isInfoActive));
  }, [dispatch, isInfoActive]);

  const handleInfoActive: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsInfoActive(!isInfoActive);
  };

  return { handleInfoActive };
};
