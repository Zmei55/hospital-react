import { toast } from "react-hot-toast";

import { useSaveRequestMutation } from "entities/Request";
import { useClearPatient } from "entities/Patient";
import { useAppSelector, useAppNavigate } from "shared";

export const useSaveNewRequest = () => {
  const [navigate] = useAppNavigate();
  const [saveRequest, { isLoading }] = useSaveRequestMutation();
  const { clearPatient } = useClearPatient();
  const requestNumber = useAppSelector(state => state.request.requestNumber);
  const patientId = useAppSelector(state => state.patients.patient._id);
  const requestDetails = useAppSelector(state => state.request.requestDetails);

  const saveReqBtnDisabled =
    requestNumber === 0 || patientId === "" || requestDetails.length === 0;

  const saveNewRequest = async () => {
    try {
      await saveRequest({
        requestNumber,
        patientId,
        requestDetails,
      });
      toast.success("Antrag gespeichert!");
      clearPatient();
      navigate("/desktop");
    } catch (error) {
      toast.error(
        "Etwas ist schief gelaufen! Der Antrag wurde nicht gespeichert."
      );
      console.log("ERROR saveNewRequest");
    }
  };

  return { saveNewRequest, saveReqBtnDisabled, isLoading };
};
