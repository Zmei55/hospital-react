import {
  useSendRequestDetailMutation,
  fetchRequestDetails,
} from "entities/Request";
import { useAppDispatch, useAppSelector } from "shared";

export const useSendRequestDetail = () => {
  const dispatch = useAppDispatch();
  const [requestDetail] = useSendRequestDetailMutation();
  // const savedDetails = useAppSelector(state => state.labors.details);
  // console.log("useSendRequestDetail ~ savedDetails:", savedDetails);
  // const savedDetails = {
  //   serviceId: "646932533a3ff8661ceece65",
  //   laborId: "6469f0ceecee8bf264e08d6d",
  // };

  const handleSandRequestDetails = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      // for (const detail of savedDetails) {
      //   const x = await requestDetail(detail);
      //   dispatch(fetchRequestDetails(x));
      // }
    } catch (error) {
      console.log("ERROR sendDetails");
    }
  };

  return { handleSandRequestDetails };
};
