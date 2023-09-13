import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  useFetchServicesByNameMutation,
  addServices,
  IFilter,
  IService,
} from "entities/Service";
import { useAppDispatch, useAppSelector } from "shared";

export const useHandleServicesForm = () => {
  const dispatch = useAppDispatch();
  const [filteredServicesList, setFilteredServicesList] = useState<IService[]>(
    []
  );
  const selectedServices = useAppSelector(
    state => state.services.selectedServices
  );
  const [fetchServicesList, { isLoading, isError }] =
    useFetchServicesByNameMutation();

  const handleServicesForm: SubmitHandler<IFilter> = async data => {
    const formData = new FormData();

    formData.append("filter", data.filter);

    try {
      const filteredResponse = await fetchServicesList(formData).unwrap();
      if (filteredResponse.length > 0)
        setFilteredServicesList(filteredResponse);
    } catch (error) {
      console.log("ERROR servicesListFilter");
    }

    dispatch(addServices(selectedServices));
  };

  return { handleServicesForm, filteredServicesList, isLoading, isError };
};
