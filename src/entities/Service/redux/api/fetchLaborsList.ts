import { api } from "app/redux";
import { ILabor } from "entities/Service";

export const laborsListApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchLaborsList: builder.query<ILabor[], null>({
      query: () => ({ url: "/api/labors/" }),
      providesTags: ["Labors"],
      transformResponse: (response: { data: ILabor[] }) => response.data,
    }),
  }),
});

export const { useLazyFetchLaborsListQuery } = laborsListApi;
