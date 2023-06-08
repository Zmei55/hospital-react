import { api } from "app/redux";

export const saveRequestApi = api.injectEndpoints({
  endpoints: builder => ({
    saveRequest: builder.mutation({
      query: ({ requestNumber, patientId, requestDetails }) => ({
        url: "/api/requests/add",
        method: "POST",
        body: {
          requestNumber,
          patientId,
          requestDetails,
        },
      }),
      invalidatesTags: ["Request"],
    }),
  }),
});

export const { useSaveRequestMutation } = saveRequestApi;
