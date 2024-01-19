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

  const chooseRequest = async (id: string | number | null) => {
    try {
      let requestResponse = null;
      let serviceList = null;

      if (id) {
        requestResponse = await fetchRequest(id).unwrap();
      }
      if (requestResponse?._id) dispatch(addRequestId(requestResponse._id));
      if (requestResponse?.requestNumber)
        dispatch(addRequestDBCount(requestResponse.requestNumber));
      if (requestResponse?.requestDetails)
        dispatch(addRequestDetails(requestResponse.requestDetails));

      if (requestResponse?.patientId)
        await choosePatient(requestResponse.patientId);
      if (requestResponse?.requestDetails)
        serviceList = await getServiceList(requestResponse.requestDetails);
      if (serviceList) dispatch(addServices(serviceList));
      if (requestResponse?.requestDetails)
        dispatch(addDetails(requestResponse.requestDetails));
      if (requestResponse?._id) await fetchLaborList();

      if (requestResponse?._id)
        handleNavigate("/dashboard/treatment-room/request");
    } catch (error) {
      console.log("ERROR chooseRequest");
    }
  };

  return { chooseRequest };
};
