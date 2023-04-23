import { useState } from "react";
import { toast } from "react-hot-toast";
import { IService } from "entities/Services";

export const useAddService = (initialValue: IService[]) => {
  const [selectedServices, setSelectedServices] = useState(initialValue);

  const addService = (service: IService) => {
    if (
      selectedServices
        .map(item => item.codeService)
        .indexOf(service.codeService) === -1
    ) {
      setSelectedServices([...selectedServices, service]);
      toast.success("Dienst hinzugefügt!");
    } else {
      toast.error("Der Dienst wurde bereits ausgewählt!");
    }
  };

  return { selectedServices, setSelectedServices, addService };
};
