// import { fetchRequestServices } from "entities/Request";
import { useAppSelector, useAppDispatch } from "shared";

export const useRequestsServices = () => {
  const dispatch = useAppDispatch();
  const selectedServices = useAppSelector(
    state => state.services.selectedServices
  );

  const requestServices = () => {
    // dispatch(fetchRequestServices(selectedServices));
  };

  return { requestServices };
};
