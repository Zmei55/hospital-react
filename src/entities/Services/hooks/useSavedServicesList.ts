import { useState, useEffect } from "react";
import { fetchServices, IService } from "entities/Services";
import { useAppDispatch } from "shared";

export const useSavedServicesList = (initialValue: IService[]) => {
  const dispatch = useAppDispatch();
  const [savedServicesList, setSavedServicesList] = useState(initialValue);

  useEffect(() => {
    dispatch(fetchServices(savedServicesList));
  }, [dispatch, savedServicesList]);

  return { savedServicesList, setSavedServicesList };
};
