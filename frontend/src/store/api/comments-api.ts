import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IComment } from "../../@types/comment";

type ChildCommentIds = {
    postId: string,
    rootId: string
}

export const commentsApi = createApi({
    reducerPath: 'comments',

    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_API_URL + 'comments'
    }),

    tagTypes: ["COMMENT"],

    endpoints: (builder) => ({
        getPostRootComments: builder.query<IComment[], string>({
            query: (id: string) => `/${id}`,
            providesTags: ["COMMENT"],
        }),
        getRootChildComment: builder.query<IComment[], ChildCommentIds>({
            query: (ids: ChildCommentIds) => `/${ids.rootId}/${ids.postId}`,
            providesTags: ["COMMENT"],
        }),
        getPostCommentsCount: builder.query<number, string>({
            query: (id: string) => `/${id}/count`,
            providesTags: ["COMMENT"],
        })
    }),
});

export const {
    useGetPostRootCommentsQuery,
    useGetRootChildCommentQuery,
    useGetPostCommentsCountQuery
} = commentsApi;