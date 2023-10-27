import { api } from "app/redux";
import { IDetail } from "entities/Service";

export const requestDetailsByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchRequestDetailsById: builder.query<IDetail, string>({
      query: id => ({
        url: `api/request-details/${id}`,
        method: "GET",
      }),
      providesTags: ["Request"],
      transformResponse: (response: { data: IDetail }) => response.data,
    }),
  }),
});

export const { useLazyFetchRequestDetailsByIdQuery } = requestDetailsByIdApi;
