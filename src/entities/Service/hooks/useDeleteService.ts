import { toast } from "react-hot-toast";

import { deleteService } from "entities/Service";
import { useAppDispatch } from "shared";

export const useDeleteService = () => {
  const dispatch = useAppDispatch();

  const removeService = (id: string) => {
    dispatch(deleteService(id));
    toast.success("Dienst entfernt!");
  };

  return { removeService };
};
