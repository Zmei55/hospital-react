import { api } from "app/redux";
import { TService, TServiceFilter } from "entities/Service";

export const servicesByFilterApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchServicesByFilter: builder.mutation<TService[], TServiceFilter>({
      query: filter => ({
        url: "/api/services/",
        method: "POST",
        body: filter,
      }),
      invalidatesTags: ["Services"],
      transformResponse: (response: { data: TService[] }) => response.data,
    }),
  }),
});

export const { useFetchServicesByFilterMutation } = servicesByFilterApi;
