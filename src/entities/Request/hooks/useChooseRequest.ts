import {
  useLazyFetchRequestsByIdQuery,
  addRequestId,
  addRequestDBCount,
  addRequestDetails,
} from "entities/Request";
import { useChoosePatient } from "entities/Patient";
import {
  useGetServiceListById,
  useGetLaborsList,
  addDetails,
  addServices,
} from "entities/Service";
import { useAppDispatch, useAppNavigate } from "shared";

export const useChooseRequest = () => {
  const dispatch = useAppDispatch();
  const { handleNavigate } = useAppNavigate();
  const [fetchRequest] = useLazyFetchRequestsByIdQuery();
  const { choosePatient } = useChoosePatient();
  const { getServiceList } = useGetServiceListById();
  const { fetchLaborList } = useGetLaborsList();

  const chooseRequest = async (id: string) => {
    try {
      const requestResponse = await fetchRequest(id).unwrap();
      dispatch(addRequestId(requestResponse._id));
      dispatch(addRequestDBCount(requestResponse.requestNumber));
      dispatch(addRequestDetails(requestResponse.requestDetails));

      await choosePatient(requestResponse.patientId);
      const serviceList = await getServiceList(requestResponse.requestDetails);
      dispatch(addServices(serviceList));
      dispatch(addDetails(requestResponse.requestDetails));
      await fetchLaborList();

      handleNavigate("/request");
    } catch (error) {
      console.log("ERROR chooseRequest");
    }
  };

  return { chooseRequest };
};
