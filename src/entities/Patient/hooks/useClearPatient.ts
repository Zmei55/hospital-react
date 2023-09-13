import { useAppDispatch } from "shared";
import { deletePatient } from "entities/Patient";
import {
  resetServices,
  resetSelectedServices,
  resetLabors,
  resetDetails,
} from "entities/Service";
import { useRequestsCount, resetRequestDetails } from "entities/Request";

export const useClearPatient = () => {
  const dispatch = useAppDispatch();
  const { getRequestsCount } = useRequestsCount();

  const clearPatient = (): void => {
    dispatch(deletePatient());
    getRequestsCount();
    dispatch(resetSelectedServices());
    dispatch(resetServices());
    dispatch(resetLabors());
    dispatch(resetDetails());
    dispatch(resetRequestDetails());
  };

  return { clearPatient };
};
