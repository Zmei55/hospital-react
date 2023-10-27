import { api } from "app/redux";
import { IRequestResponse, IRequestFilter } from "entities/Request";

export const requestsByFilterApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchRequestsByFilter: builder.mutation<IRequestResponse[], IRequestFilter>(
      {
        query: filter => ({
          url: "/api/requests/",
          method: "POST",
          body: filter,
        }),
        invalidatesTags: ["Request"],
        transformResponse: (response: { data: IRequestResponse[] }) =>
          response.data,
      }
    ),
  }),
});

export const { useFetchRequestsByFilterMutation } = requestsByFilterApi;
