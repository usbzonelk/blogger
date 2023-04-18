import { apiSlice } from "../../api/publicApi";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.mutation({
      query: () => ({
        url: "/",
        method: "POST",
        body: {
          query: `
            query {
              getSemiPostsWithState {
                slug
                title
                images {
                  header
                }
                status
              }
            }
          `,
        },
      }),
    }),
  }),
});

export const { useGetAllPostsMutation } = postApiSlice;
