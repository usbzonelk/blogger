import { apiSlice } from "../../api/login";

export const login = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendLoginData: builder.mutation({
      query: (logins) => ({
        url: "/",
        method: "POST",
        body: {
          password: logins.password,
          mail: logins.email,
        },
      }),
    }),
  }),
});

export const { useSendLoginDataMutation } = login;
