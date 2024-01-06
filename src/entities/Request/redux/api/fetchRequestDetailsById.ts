import { api } from "app/redux";
import { TDetails } from "entities/Request";

export const requestDetailsByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchRequestDetailsById: builder.query<TDetails, string>({
      query: id => ({
        url: `api/request-details/${id}`,
        method: "GET",
      }),
      providesTags: ["Request"],
      transformResponse: (response: { data: TDetails }) => response.data,
    }),
  }),
});

export const { useLazyFetchRequestDetailsByIdQuery } = requestDetailsByIdApi;
