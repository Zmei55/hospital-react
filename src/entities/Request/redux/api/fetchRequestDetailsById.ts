import { api } from "app/redux";
import { IDetail } from "entities/Service";

export const requestDetailsByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchRequestDetailsById: builder.query<IDetail, string>({
      query: id => ({
        url: `api/requestDetails/${id}`,
        method: "GET",
      }),
      providesTags: ["Request"],
      transformResponse: (response: { data: { result: IDetail } }) =>
        response.data.result,
    }),
  }),
});

export const { useLazyFetchRequestDetailsByIdQuery } = requestDetailsByIdApi;
