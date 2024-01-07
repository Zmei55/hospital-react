import { api } from "app/redux";

export const requestCountApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchRequestCount: builder.query<number, null>({
      query: () => ({
        url: "/api/requests/count",
        method: "GET",
      }),
      providesTags: ["Request"],
      transformResponse: (response: { data: number }) => response.data,
    }),
  }),
});

export const { useLazyFetchRequestCountQuery } = requestCountApi;
