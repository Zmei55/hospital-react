import { api } from "app/redux/api";

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    logIn: builder.mutation({
      query: user => ({
        url: "/api/auth/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/api/auth/logout",
        method: "GET",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLogInMutation, useLogOutMutation } = authApi;
