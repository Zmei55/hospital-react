import { api } from "app/redux";

export const requestCountApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchRequestCount: builder.mutation({
      query: builder => ({
        url: "/api/requests/count",
        method: "POST",
        body: builder,
      }),
      invalidatesTags: ["Request"],
      transformResponse: (response: { data: { result: number } }) =>
        response.data.result,
    }),
  }),
});

export const { useFetchRequestCountMutation } = requestCountApi;
