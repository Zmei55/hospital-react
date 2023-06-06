import {
  useFetchServicesBYNameMutation,
  fetchFilteredServices,
} from "entities/Service";
import { useAppDispatch } from "shared";

export const useServicesFilter = (filter: string) => {
  const dispatch = useAppDispatch();
  const [fetchServicesList, { isLoading, isError }] =
    useFetchServicesBYNameMutation();

  const handleServicesListFind = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const filteredServices = await fetchServicesList(filter).unwrap();
      dispatch(fetchFilteredServices(filteredServices));
    } catch (error) {
      console.log("ERROR servicesListFilter");
    }
  };

  return { handleServicesListFind, isLoading, isError };
};
