import { useSaveRequestMutation } from "entities/Request";
import { useAppSelector } from "shared";

export const useSaveNewRequest = () => {
  const [saveRequest] = useSaveRequestMutation();
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
    } catch (error) {
      console.log("ERROR saveNewRequest");
    }
  };

  return { saveNewRequest, saveReqBtnDisabled };
};
