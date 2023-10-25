import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  useFetchRequestsByDataMutation,
  IRequestResponse,
  IRequestFilter,
} from "entities/Request";

export const useFilterRequest = () => {
  const [fetchRequestList, { isLoading, isError }] =
    useFetchRequestsByDataMutation();
  const [requestList, setRequestList] = useState<IRequestResponse[]>([]);

  const handleFilterRequests: SubmitHandler<IRequestFilter> = async data => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("cardNumber", data.cardNumber.toString());
    formData.append("requestNumber", data.requestNumber.toString());
    formData.append("requestDate", data.requestDate.toString());

    try {
      const requestListResponse = await fetchRequestList(formData).unwrap();
      setRequestList(requestListResponse);
    } catch (error) {
      console.log("ERROR patientsListFormSubmit");
    }
  };

  return {
    requestList,
    handleFilterRequests,
    isLoading,
    isError,
  };
};
