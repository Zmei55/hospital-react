import { useState } from "react";
import { IService, TServicesList } from "entities/Services";

export const useAddService = (initialValue: TServicesList) => {
  const [selectedServices, setSelectedServices] = useState(initialValue);

  const addService = (service: IService) => {
    if (
      selectedServices
        .map(item => item.codeService)
        .indexOf(service.codeService)
    ) {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return { selectedServices, setSelectedServices, addService };
};
