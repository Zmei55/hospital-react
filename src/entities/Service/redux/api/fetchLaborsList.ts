import { api } from "app/redux";
import { TLabor } from "entities/Service";

export const laborsListApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchLaborsList: builder.query<TLabor[], null>({
      query: () => ({ url: "/api/labors/" }),
      providesTags: ["Labors"],
      transformResponse: (response: { data: TLabor[] }) => response.data,
    }),
  }),
});

export const { useLazyFetchLaborsListQuery } = laborsListApi;
