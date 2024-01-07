import {
  useLazyFetchRequestCountQuery,
  addRequestDBCount,
} from "entities/Request";
import { useAppDispatch } from "shared";

export const useRequestsCount = () => {
  const dispatch = useAppDispatch();
  const [requestsCount] = useLazyFetchRequestCountQuery();

  const getRequestsCount = async () => {
    try {
      const count = await requestsCount(null).unwrap();
      dispatch(addRequestDBCount(count + 1));
    } catch (error) {
      console.log("ERROR fetchRequestCount");
    }
  };

  return { getRequestsCount };
};
