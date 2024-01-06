import { api } from "app/redux";
import { TAddress, TNewAddress } from "entities/Address";

export const addNewAddressApi = api.injectEndpoints({
  endpoints: builder => ({
    addNewAddress: builder.mutation<TAddress, TNewAddress>({
      query: newAddress => ({
        url: "/api/addresses/",
        method: "POST",
        body: newAddress,
      }),
      invalidatesTags: ["Addresses"],
      transformResponse: (response: { data: TAddress }) => response.data,
    }),
  }),
});

export const { useAddNewAddressMutation } = addNewAddressApi;
