import { toast } from "react-hot-toast";

import { addSelectedServices, TService } from "entities/Service";
import { useAppSelector, useAppDispatch } from "shared";

export const useServiceAdd = () => {
  const dispatch = useAppDispatch();
  const selectedServices = useAppSelector(
    state => state.services.selectedServices
  );

  const addService = (service: TService) => {
    if (!selectedServices) {
      dispatch(addSelectedServices(service));
      toast.success("Dienst hinzugefügt!");
    }

    if (
      selectedServices &&
      selectedServices.map(item => item._id).indexOf(service._id) === -1
    ) {
      dispatch(addSelectedServices(service));
      toast.success("Dienst hinzugefügt!");
    }

    if (
      selectedServices &&
      selectedServices.map(item => item._id).indexOf(service._id) !== -1
    ) {
      toast.error("Der Dienst wurde bereits ausgewählt!");
    }
  };

  return { addService };
};
