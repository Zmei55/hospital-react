import { api } from "app/redux";
import { IUser } from "entities/User";

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    logIn: builder.mutation({
      query: user => ({
        url: "/api/auth/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
      transformResponse: (response: { data: { token: string; user: IUser } }) =>
        response.data,
    }),
  }),
});

export const { useLogInMutation } = authApi;
