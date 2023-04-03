import { api } from "app/redux";

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
  }),
});

export const { useLogInMutation } = authApi;
