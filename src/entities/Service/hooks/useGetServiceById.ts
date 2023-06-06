import { useState, useEffect } from "react";
import { useFetchServiceByIdQuery, addServices } from "entities/Service";
// import { useAppDispatch, useAppSelector } from "shared";

export const useGetServiceById = () => {
  // const dispatch = useAppDispatch();
  const [serviceId, setServiceId] = useState<string>("");
  const { data: service } = useFetchServiceByIdQuery(serviceId, {
    skip: serviceId === "",
  });
  // const servicesList = useAppSelector(state => state.services.services);

  const handleServiceId = (id: string) => {
    setServiceId(id);
  };

  // useEffect(() => {
  //   if (serviceData !== undefined) {
  //     dispatch(addServices(serviceData));
  //   }
  // }, [dispatch, serviceData]);

  return { service, handleServiceId };
};
