import { api } from "app/redux";
import { IDetail } from "entities/Service";

const requestDetailsApi = api.injectEndpoints({
  endpoints: builder => ({
    sendRequestDetail: builder.mutation<string, IDetail>({
      query: requestDetail => ({
        url: "/api/requestDetails/add",
        method: "POST",
        body: requestDetail,
      }),
      invalidatesTags: ["Request"],
      transformResponse: (response: { data: { result: { _id: string } } }) =>
        response.data.result._id,
    }),
  }),
});

export const { useSendRequestDetailMutation } = requestDetailsApi;
