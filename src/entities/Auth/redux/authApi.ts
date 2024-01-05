import { api } from "app/redux";
import { TUserLoginRes } from "entities/User";

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    logIn: builder.mutation<TUserLoginRes, FormData>({
      query: user => ({
        url: "/api/auth/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
      transformResponse: (response: { data: TUserLoginRes }) => response.data,
    }),
    logOut: builder.query({
      query: () => ({
        url: "/api/auth/logout",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
  }),
});

export const { useLogInMutation, useLazyLogOutQuery } = authApi;
