import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/task/TaskSlice'
// import { taskApi } from './services/task'
export const store = configureStore({
  reducer: {
    // [taskApi.reducerPath]: taskApi.reducer,
    tasks: taskReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(taskApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
