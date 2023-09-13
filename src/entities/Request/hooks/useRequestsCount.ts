import {
  useFetchRequestCountMutation,
  addRequestDBCount,
} from "entities/Request";
import { useAppDispatch } from "shared";

export const useRequestsCount = () => {
  const dispatch = useAppDispatch();
  const [requestsCount] = useFetchRequestCountMutation();

  const getRequestsCount = async () => {
    try {
      const count = await requestsCount({}).unwrap();
      dispatch(addRequestDBCount(count + 1));
    } catch (error) {
      console.log("ERROR fetchRequestCount");
    }
  };

  return { getRequestsCount };
};
