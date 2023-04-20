import { useState } from "react";
import { IService } from "entities/Services";

export const useAddService = (initialValue: IService[]) => {
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
