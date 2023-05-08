import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoadingPosts: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },

    setIsLoadingPosts(state, action) {
      state.isLoadingPosts = action.payload;
    },
  },
});

export const { setPosts, setIsLoadingPosts } = postsSlice.actions;

export default postsSlice.reducer;
