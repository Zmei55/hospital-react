import { useState } from "react";
import { toast } from "react-hot-toast";
import { IService } from "entities/Service";
import { useAppSelector } from "shared";

export const useAddService = () => {
  const initialValue = useAppSelector(state => state.services.services);
  const [selectedServices, setSelectedServices] = useState(initialValue);

  const addService = (service: IService) => {
    if (
      selectedServices
        .map(item => item.serviceCode)
        .indexOf(service.serviceCode) === -1
    ) {
      setSelectedServices([...selectedServices, service]);
      toast.success("Dienst hinzugefügt!");
    } else {
      toast.error("Der Dienst wurde bereits ausgewählt!");
    }
  };

  return { selectedServices, setSelectedServices, addService };
};
