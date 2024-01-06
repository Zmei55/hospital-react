import { api } from "app/redux";
import { TRequestFilterRes } from "entities/Request";

export const requestsByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchRequestsById: builder.query<TRequestFilterRes, string | number>({
      query: id => ({
        url: `api/requests/${id}`,
        method: "GET",
      }),
      providesTags: ["Request"],
      transformResponse: (response: { data: TRequestFilterRes }) =>
        response.data,
    }),
  }),
});

export const { useLazyFetchRequestsByIdQuery } = requestsByIdApi;
