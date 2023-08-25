import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),

  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({
        url: `/tasks`,
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }),
      providesTags: ['Tasks'],
    }),
    createTask: builder.mutation({
      query: (task) => ({
        url: `/task`,
        method: 'POST',
        body: task,
        headers: {
          'Content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Tasks'],
    }),

    updateTask: builder.mutation({
      query: (task) => ({
        url: `/task/${task.id}`,
        method: 'PUT',
        body: task,
        headers: {
          'Content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Tasks'],
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
})

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = taskApi
