import { api } from "app/redux";
import { TRequestFilterReq, TRequestFilterRes } from "entities/Request";

export const requestsByFilterApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchRequestsByFilter: builder.mutation<
      TRequestFilterRes[],
      TRequestFilterReq
    >({
      query: filter => ({
        url: "/api/requests/",
        method: "POST",
        body: filter,
      }),
      invalidatesTags: ["Request"],
      transformResponse: (response: { data: TRequestFilterRes[] }) =>
        response.data,
    }),
  }),
});

export const { useFetchRequestsByFilterMutation } = requestsByFilterApi;
