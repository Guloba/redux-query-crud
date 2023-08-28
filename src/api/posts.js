import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, ...post }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: post,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
    getComments: builder.query({
      query: () => 'comments',
    }),
    addComment: builder.mutation({
      query: (newComment) => ({
        url: 'comments',
        method: 'POST',
        body: newComment,
      }),
    }),
    getProfile: builder.query({
      query: () => 'profile',
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetCommentsQuery,
  useAddCommentMutation,
  useGetProfileQuery,
} = postsApi;
