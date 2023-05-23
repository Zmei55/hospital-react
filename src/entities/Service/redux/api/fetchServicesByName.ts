import { api } from "app/redux";
import { IService } from "entities/Service";

export const servicesByNameApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchServicesBYName: builder.mutation<IService[], string>({
      query: filter => ({
        url: "/api/services/",
        method: "POST",
        body: {
          filter: filter,
        },
      }),
      invalidatesTags: ["Services"],
      transformResponse: (response: { data: { result: IService[] } }) =>
        response.data.result,
    }),
  }),
});

export const { useFetchServicesBYNameMutation } = servicesByNameApi;
