import {
  useFetchServicesBYNameMutation,
  fetchFilteredServices,
  fetchServices,
  IService,
} from "entities/Service";
import { useAppDispatch, useAppSelector } from "shared";

export const useServicesFilter = (filter: string) => {
  const dispatch = useAppDispatch();
  const initialServices: IService[] = useAppSelector(
    state => state.services.services
  );
  const [fetchServicesList, { isLoading, isError }] =
    useFetchServicesBYNameMutation();

  const handleServicesListFind = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const servicesList = await fetchServicesList(filter);
      dispatch(fetchFilteredServices(servicesList));
    } catch (error) {
      console.log("ERROR servicesListFilter");
    }
  };

  const addService = (service: IService) => {
    dispatch(fetchServices({ ...initialServices, service }));
  };

  return { addService, handleServicesListFind, isLoading, isError };
};
