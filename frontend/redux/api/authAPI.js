import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "../features/users/reduxAuth";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1/1/",
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const adminApi = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
