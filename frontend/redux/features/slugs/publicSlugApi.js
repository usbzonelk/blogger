import { apiSlice } from "../../api/publicApi";

export const publicSlugApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlugs: builder.mutation({
      query: () => ({
        url: "/",
        method: "POST",
        body: {
          query: `
            query {
              getAllSlugs {
                slug
                type
              }
            }
            
          `,
        },
      }),
      transformResponse: (response) => {
        return response.data.getAllSlugs;
      },
    }),
  }),
});

export const { useGetAllSlugsMutation } = publicSlugApi;
