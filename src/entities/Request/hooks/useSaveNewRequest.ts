import { toast } from "react-hot-toast";

import { useSaveRequestMutation } from "entities/Request";
import { useAppSelector } from "shared";

export const useSaveNewRequest = () => {
  const [saveRequest, { isLoading }] = useSaveRequestMutation();
  const requestNumber = useAppSelector(state => state.request.requestNumber);
  const patientId = useAppSelector(state => state.request.patientId);
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
    } catch (error) {
      toast.error(
        "Etwas ist schief gelaufen! Der Antrag wurde nicht gespeichert."
      );
      console.log("ERROR saveNewRequest");
    }
  };

  return { saveNewRequest, saveReqBtnDisabled, isLoading };
};
