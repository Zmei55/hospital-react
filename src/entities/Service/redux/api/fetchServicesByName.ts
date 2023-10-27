import { api } from "app/redux";
import { IService, IFilter } from "entities/Service";

export const servicesByNameApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchServicesByName: builder.mutation<IService[], IFilter>({
      query: filter => ({
        url: "/api/services/",
        method: "POST",
        body: filter,
      }),
      invalidatesTags: ["Services"],
      transformResponse: (response: { data: IService[] }) => response.data,
    }),
  }),
});

export const { useFetchServicesByNameMutation } = servicesByNameApi;
