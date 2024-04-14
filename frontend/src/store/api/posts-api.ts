import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IPost} from "../../@types/post";

export const postsApi = createApi({
    reducerPath: 'posts',

    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_API_URL + 'posts'
    }),

    tagTypes: ["POST"],

    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], void>({
            query: () => "/",
            providesTags: ["POST"],
        }),
        getPostById: builder.query<IPost, string>({
            query: (id: string) => `/${id}`,
            providesTags: ["POST"],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery
} = postsApi;