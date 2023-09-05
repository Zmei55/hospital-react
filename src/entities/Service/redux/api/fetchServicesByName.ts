import { api } from "app/redux";
import { IService } from "entities/Service";

export const servicesByNameApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchServicesByName: builder.mutation<IService[], FormData>({
      query: filter => ({
        url: "/api/services/",
        method: "POST",
        body: filter,
      }),
      invalidatesTags: ["Services"],
      transformResponse: (response: { data: { result: IService[] } }) =>
        response.data.result,
    }),
  }),
});

export const { useFetchServicesByNameMutation } = servicesByNameApi;
