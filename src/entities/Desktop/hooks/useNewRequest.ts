import {
  useFetchRequestCountMutation,
  fetchRequestsDBCount,
} from "entities/Request";
import { useAppDispatch, useAppNavigate } from "shared";

export const useNewRequest = () => {
  const dispatch = useAppDispatch();
  const [navigate] = useAppNavigate();
  const [requestsCount] = useFetchRequestCountMutation();

  const handleNewRequest: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      const count = await requestsCount({}).unwrap();
      dispatch(fetchRequestsDBCount(count + 1));
    } catch (error) {
      console.log("ERROR fetchRequestCount");
    }

    navigate("/request");
  };

  return { handleNewRequest };
};
