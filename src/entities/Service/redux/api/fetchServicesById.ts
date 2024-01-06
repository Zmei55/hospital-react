import { api } from "app/redux";
import { TService } from "entities/Service";

export const serviceByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchServiceById: builder.query<TService, string | number>({
      query: _id => ({
        url: `/api/services/${_id}`,
        method: "GET",
      }),
      providesTags: ["Services"],
      transformResponse: (response: { data: TService }) => response.data,
    }),
  }),
});

export const { useLazyFetchServiceByIdQuery } = serviceByIdApi;
