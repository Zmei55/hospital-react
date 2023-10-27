import { api } from "app/redux";
import { IUser } from "entities/User";

interface ILoginResponse {
  data: {
    user: IUser;
    token: string;
  };
}

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    logIn: builder.mutation<ILoginResponse, FormData>({
      query: user => ({
        url: "/api/auth/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
      transformResponse: (response: { data: ILoginResponse }) => response.data,
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
