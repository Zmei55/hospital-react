import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  useFetchRequestsByFilterMutation,
  TRequestFilterReq,
  TRequestFilterRes,
} from "entities/Request";

export const useFilterRequest = () => {
  const [fetchRequestList, { isLoading, isError }] =
    useFetchRequestsByFilterMutation();
  const [requestList, setRequestList] = useState<TRequestFilterRes[] | null>(
    null
  );

  const handleFilterRequests: SubmitHandler<TRequestFilterReq> = async data => {
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
