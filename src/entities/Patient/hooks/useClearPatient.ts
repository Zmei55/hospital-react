import { useAppDispatch } from "shared";
import { deletePatient, resetPatientsList } from "entities/Patient";
import {
  resetServices,
  resetSelectedServices,
  resetLabors,
  resetDetails,
} from "entities/Service";
import {
  useRequestsCount,
  resetRequestPatientID,
  resetRequestDetails,
} from "entities/Request";

export const useClearPatient = () => {
  const dispatch = useAppDispatch();
  const { getRequestsCount } = useRequestsCount();

  const clearPatient = (): void => {
    dispatch(deletePatient());
    getRequestsCount();
    dispatch(resetSelectedServices());
    dispatch(resetServices());
    dispatch(resetPatientsList());
    dispatch(resetLabors());
    dispatch(resetDetails());
    dispatch(resetRequestPatientID());
    dispatch(resetRequestDetails());
  };

  return { clearPatient };
};
