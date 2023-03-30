import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { buildApi } from "./services/builds";
import { godsApi } from "./services/gods";

export const store = configureStore({
  reducer: {
    [buildApi.reducerPath]: buildApi.reducer,
    [godsApi.reducerPath]: godsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(buildApi.middleware, godsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
