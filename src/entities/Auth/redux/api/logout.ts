import { api } from "app/redux";

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    logOut: builder.mutation({
      query: () => ({
        url: "/api/auth/logout",
        method: "GET",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLogOutMutation } = authApi;
