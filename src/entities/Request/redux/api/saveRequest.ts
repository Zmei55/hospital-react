import { api } from "app/redux";
import { TRequest, TRequestSave } from "entities/Request/types";

export const saveRequestApi = api.injectEndpoints({
  endpoints: builder => ({
    saveRequest: builder.mutation<TRequest[], TRequestSave>({
      query: ({ requestNumber, patientId, newRequestDetails }) => ({
        url: "/api/requests/add",
        method: "POST",
        body: {
          requestNumber,
          patientId,
          newRequestDetails,
        },
      }),
      invalidatesTags: ["Request"],
    }),
  }),
});

export const { useSaveRequestMutation } = saveRequestApi;
