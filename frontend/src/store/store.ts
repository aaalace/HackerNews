import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './api/posts-api.ts'
import { commentsApi } from "./api/comments-api.ts";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(postsApi.middleware)
            .concat(commentsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>

export default store