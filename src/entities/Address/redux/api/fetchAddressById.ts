import { api } from "app/redux";
import { TAddress } from "entities/Address";

export const addressByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchAddressById: builder.query<TAddress, string | number>({
      query: _id => ({
        url: `/api/addresses/${_id}`,
        method: "GET",
      }),
      providesTags: ["Addresses"],
      transformResponse: (response: { data: TAddress }) => response.data,
    }),
  }),
});

export const { useLazyFetchAddressByIdQuery } = addressByIdApi;
