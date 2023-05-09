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

    getLabelsOfPost: builder.mutation({
      query: (slug) => ({
        url: "/",
        method: "POST",
        body: {
          query: `
            query {
                getLabelsOfPost(slug: "${slug}")
              }
            
          `,
        },
      }),
      transformResponse: (response) => {
        return response.data.getLabelsOfPost;
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

    addNewComment: builder.mutation({
      query: (comment) => ({
        url: "/",
        method: "POST",
        body: {
          query: `
          mutation {
            addNewComment(slug: "${comment.slug}", username: "${comment.username}", content: "${comment.content}", date: "${comment.date}", status: "active")
          }
          `,
        },
      }),
      transformResponse: (response) => {
        return response.data.addNewComment;
      },
    }),

    getCommentsOfPost: builder.mutation({
      query: (slug) => ({
        url: "/",
        method: "POST",
        body: {
          query: `
            query {
              getCommentsOfPost(slug: "${slug}"){ 
                username
                date
                content
              }
            }
            
            
          `,
        },
      }),
      transformResponse: (response) => {
        return response.data.getCommentsOfPost;
      },
    }),
    getRelatedPosts: builder.mutation({
      query: (slug) => ({
        url: "/",
        method: "POST",
        body: {
          query: `
            query {
              getRelatedPosts(post: "${slug}", filter: {status: "active"}) {
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
        return response.data.getRelatedPosts;
      },
    }),
  }),
});

export const {
  useGetFullPostMutation,
  useGetAllPostsMutation,
  useGetAuthsPostMutation,
  useSearchPostsMutation,
  useGetLabelsOfPostMutation,
  useAddNewCommentMutation,
  useGetCommentsOfPostMutation,
  useGetRelatedPostsMutation,
} = postApiSlice;
