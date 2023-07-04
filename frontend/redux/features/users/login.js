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

      transformResponse: (response) => {
        return response;
      },
      validateStatus: (response, result) =>
        response.status === 200 && !result.isError,
    }),
  }),
});

export const { useSendLoginDataMutation } = login;
