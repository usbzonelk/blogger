import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/publicApi";

import authReducer from "./features/users/reduxAuth";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
