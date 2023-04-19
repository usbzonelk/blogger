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
      transformResponse: (response) => {
        return response.data.getSemiPostsWithState;
      },
    }),
  }),
});

export const { useGetAllPostsMutation } = postApiSlice;
