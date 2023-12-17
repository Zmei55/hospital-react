import { toast } from "react-hot-toast";

import { useSaveRequestMutation } from "entities/Request";
import { useClearPatient } from "entities/Patient";
import { useAppSelector, useAppNavigate } from "shared";

export const useSaveNewRequest = () => {
  const { handleNavigate } = useAppNavigate();
  const [saveRequest, { isLoading }] = useSaveRequestMutation();
  const { clearPatient } = useClearPatient();
  const requestNumber = useAppSelector(state => state.request.requestNumber);
  const patient = useAppSelector(state => state.patients.patient);
  const requestDetails = useAppSelector(state => state.request.requestDetails);

  const saveReqBtnDisabled = !requestNumber || !patient || !requestDetails;

  const saveNewRequest = async () => {
    if (requestNumber && patient && requestDetails) {
      try {
        await saveRequest({
          requestNumber,
          patientId: patient._id,
          requestDetails,
        });
        toast.success("Antrag gespeichert!");
        clearPatient();
        handleNavigate("/desktop");
      } catch (error) {
        toast.error(
          "Etwas ist schief gelaufen! Der Antrag wurde nicht gespeichert."
        );
        console.log("ERROR saveNewRequest");
      }
    }
  };

  return { saveNewRequest, saveReqBtnDisabled, isLoading };
};
