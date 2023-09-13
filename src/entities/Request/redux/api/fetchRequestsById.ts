import { api } from "app/redux";
import { IRequestResponse } from "entities/Request";

export const requestsByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchRequestsById: builder.query<IRequestResponse, string>({
      query: id => ({
        url: `api/requests/${id}`,
        method: "GET",
      }),
      providesTags: ["Request"],
      transformResponse: (response: { data: { result: IRequestResponse } }) =>
        response.data.result,
    }),
  }),
});

export const { useLazyFetchRequestsByIdQuery } = requestsByIdApi;
