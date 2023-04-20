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

    getFullPost: builder.mutation({
      query: (slug) => ({
        url: "/",
        method: "POST",
        body: {
          query: `
            query {
              getFullPost(slug: "${slug}") {
                _id
                title
                content
                date {
                  fullDate
                }
                status
                images {
                  header
                  imgs
                }
              }
            }
            
          `,
        },
      }),
      transformResponse: (response) => {
        return response.data.getFullPost;
      },
    }),
  }),
});

export const { useGetFullPostMutation, useGetAllPostsMutation } = postApiSlice;
