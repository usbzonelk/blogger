import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost/graphiql",
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
