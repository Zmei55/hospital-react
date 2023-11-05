import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  useFetchRequestsByFilterMutation,
  IRequestResponse,
  IRequestFilter,
} from "entities/Request";

export const useFilterRequest = () => {
  const [fetchRequestList, { isLoading, isError }] =
    useFetchRequestsByFilterMutation();
  const [requestList, setRequestList] = useState<IRequestResponse[]>([]);

  const handleFilterRequests: SubmitHandler<IRequestFilter> = async data => {
    try {
      const requestListResponse = await fetchRequestList(data).unwrap();
      setRequestList(requestListResponse);
    } catch (error) {
      console.log("ERROR patientsListFormSubmit");
    }
  };

  return {
    requestList,
    setRequestList,
    handleFilterRequests,
    isLoading,
    isError,
  };
};
