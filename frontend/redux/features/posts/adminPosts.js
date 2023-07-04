import { adminApi } from "../../api/authAPI";

export const adminApiSlice = adminApi.injectEndpoints({
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
        return response.data;
      },
    }),
  }),
});

export const { useGetAllPostsMutation } = adminApiSlice;
