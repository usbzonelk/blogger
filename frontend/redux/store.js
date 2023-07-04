import { configureStore } from "@reduxjs/toolkit";
import { adminApiSlice } from "./features/posts/adminPosts";

import authReducer from "./features/users/reduxAuth";

const store = configureStore({
  reducer: {
    [adminApiSlice.reducerPath]: adminApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApiSlice.middleware),
  devTools: true,
});

export default store;
