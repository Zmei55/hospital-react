import { toast } from "react-hot-toast";

import { addSelectedServices, IService } from "entities/Service";
import { useAppSelector, useAppDispatch } from "shared";

export const useAddService = () => {
  const dispatch = useAppDispatch();
  const selectedServices = useAppSelector(
    state => state.services.selectedServices
  );

  const addService = (service: IService) => {
    if (selectedServices.map(item => item._id).indexOf(service._id) === -1) {
      dispatch(addSelectedServices(service));
      toast.success("Dienst hinzugefügt!");
    } else {
      toast.error("Der Dienst wurde bereits ausgewählt!");
    }
  };

  return { addService };
};
