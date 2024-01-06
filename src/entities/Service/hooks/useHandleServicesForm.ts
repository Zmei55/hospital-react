import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  useFetchServicesByFilterMutation,
  addServices,
  TServiceFilter,
  TService,
} from "entities/Service";
import { useAppDispatch, useAppSelector } from "shared";

export const useHandleServicesForm = () => {
  const dispatch = useAppDispatch();
  const [filteredServicesList, setFilteredServicesList] = useState<
    TService[] | null
  >(null);
  const selectedServices = useAppSelector(
    state => state.services.selectedServices
  );
  const [fetchServicesList, { isLoading, isError }] =
    useFetchServicesByFilterMutation();

  const handleServicesForm: SubmitHandler<TServiceFilter> = async data => {
    try {
      const filteredResponse = await fetchServicesList(data).unwrap();
      if (filteredResponse.length > 0)
        setFilteredServicesList(filteredResponse);
    } catch (error) {
      console.log("ERROR servicesListFilter");
    }

    if (selectedServices) dispatch(addServices(selectedServices));
  };

  return { handleServicesForm, filteredServicesList, isLoading, isError };
};
