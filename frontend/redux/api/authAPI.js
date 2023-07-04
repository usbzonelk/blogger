import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import validateToken from "../auth/tokenValidate";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1/1/",
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access;
    const validity = validateToken(token);

    if (token && validity) {
      headers.set("Authorization", `Bearer ${token}`);
    } else if (!validity) {
      window.href = "/login";
    }

    return headers;
  },
});

export const adminApi = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
