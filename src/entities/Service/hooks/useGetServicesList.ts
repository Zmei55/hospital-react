import { useState, useEffect } from "react";
import {
  useGetServiceById,
  addServices,
  IService,
  getValuesArrayByKey,
} from "entities/Service";
import { useAppDispatch, useAppSelector } from "shared";

export const useGetServicesList = () => {
  const dispatch = useAppDispatch();
  const detailsArr = useAppSelector(state => state.request.requestDetails);
  const { service, handleServiceId } = useGetServiceById();
  let servicesList = useAppSelector(state => state.services.services);

  const valuesArr = getValuesArrayByKey(detailsArr, "serviceId");

  for (const value of valuesArr) {
    handleServiceId(value._id);
  }

  useEffect(() => {
    if (service !== undefined) {
      // dispatch(addServices(service));
    }
  }, [dispatch, service]);

  return { servicesList };
};
