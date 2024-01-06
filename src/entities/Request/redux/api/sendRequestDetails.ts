import { api } from "app/redux";
import { TNewDetails } from "entities/Request";

const requestDetailsApi = api.injectEndpoints({
  endpoints: builder => ({
    sendRequestDetail: builder.mutation<string, TNewDetails>({
      query: requestDetail => ({
        url: "/api/request-details/add",
        method: "POST",
        body: requestDetail,
      }),
      invalidatesTags: ["Request"],
      transformResponse: (response: { data: { _id: string } }) =>
        response.data._id,
    }),
  }),
});

export const { useSendRequestDetailMutation } = requestDetailsApi;
