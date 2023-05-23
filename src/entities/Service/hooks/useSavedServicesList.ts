import { useState, useEffect } from "react";
import { fetchServices, IService } from "entities/Service";
import { useAppDispatch, useAppSelector } from "shared";

export const useSavedServicesList = () => {
  const dispatch = useAppDispatch();
  const initialServices: IService[] = useAppSelector(
    state => state.services.services
  );
  const [savedServicesList, setSavedServicesList] = useState(initialServices);

  useEffect(() => {
    dispatch(fetchServices(savedServicesList));
  }, [dispatch, savedServicesList]);

  const handleLaborChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    setSavedServicesList(
      savedServicesList.map(service =>
        service.serviceCode === name
          ? {
              ...service,
              labor: value,
            }
          : {
              ...service,
            }
      )
    );
  };

  return { savedServicesList, setSavedServicesList, handleLaborChange };
};
