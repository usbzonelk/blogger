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
    getAuthsPost: builder.mutation({
      query: (slug) => ({
        url: "/",
        method: "POST",
        body: {
          query: `
            query {
              getAuthsOfPost(slug: "${slug}") {
                displayName
                username
              }
            }
            
          `,
        },
      }),
      transformResponse: (response) => {
        return response.data.getAuthsOfPost;
      },
    }),
    searchPosts: builder.mutation({
      query: (keyword) => ({
        url: "/",
        method: "POST",
        body: {
          query: `
            query {
              searchPosts(keywords: "${keyword}") {
                _id
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
        return response.data.searchPosts;
      },
    }),
  }),
});

export const {
  useGetFullPostMutation,
  useGetAllPostsMutation,
  useGetAuthsPostMutation,
  useSearchPostsMutation,
} = postApiSlice;
