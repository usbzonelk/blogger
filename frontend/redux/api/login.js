import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1/signin/",
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});