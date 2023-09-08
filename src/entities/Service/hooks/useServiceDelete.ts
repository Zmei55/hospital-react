import { toast } from "react-hot-toast";

import {
  deleteService,
  deleteSelectedService,
  deleteDetail,
} from "entities/Service";
import { useAppDispatch } from "shared";

export const useServiceDelete = () => {
  const dispatch = useAppDispatch();

  const removeService = (id: string) => {
    dispatch(deleteService(id));
    dispatch(deleteSelectedService(id));
    dispatch(deleteDetail(id));
    toast.success("Dienst entfernt!");
  };

  return { removeService };
};
