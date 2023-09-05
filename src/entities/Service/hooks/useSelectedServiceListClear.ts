import { toast } from "react-hot-toast";

import { resetSelectedServices, resetServices } from "entities/Service";
import { useAppDispatch } from "shared";

export const useSelectedServiceListClear = () => {
  const dispatch = useAppDispatch();

  const clearSelectedList = () => {
    dispatch(resetSelectedServices());
    dispatch(resetServices());
    toast.success("Die Liste der ausgewählten Dienste wurde geleert!");
  };

  return { clearSelectedList };
};
