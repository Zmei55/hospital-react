import { api } from "app/redux";

export const requestCountApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchRequestCount: builder.mutation<number, null>({
      query: () => ({
        url: "/api/requests/count",
        method: "POST",
      }),
      invalidatesTags: ["Request"],
      transformResponse: (response: { data: { result: number } }) =>
        response.data.result,
    }),
  }),
});

export const { useFetchRequestCountMutation } = requestCountApi;
