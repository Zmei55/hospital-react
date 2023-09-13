import { api } from "app/redux";
import { IRequestResponse } from "entities/Request";

export const requestsByDataApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchRequestsByData: builder.mutation<IRequestResponse[], FormData>({
      query: filter => ({
        url: "/api/requests/",
        method: "POST",
        body: filter,
      }),
      invalidatesTags: ["Request"],
      transformResponse: (response: { data: { result: IRequestResponse[] } }) =>
        response.data.result,
    }),
  }),
});

export const { useFetchRequestsByDataMutation } = requestsByDataApi;
