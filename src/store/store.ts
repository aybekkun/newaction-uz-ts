import { configureStore } from "@reduxjs/toolkit"
import { reducer as toastrReducer } from "react-redux-toastr"
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist"
// eslint-disable-next-line
import storage from "redux-persist/lib/storage"

import course from "./course/course.slice"
import update from "./update/update.slice"
import user from "./user/user.slice"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}
const authReducer = persistReducer(persistConfig, user)
const store = configureStore({
  reducer: {
    course,
    update,
    user: authReducer,
    toastr: toastrReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, "your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.options.onOk", "@ReduxToastr/confirm/SHOW"],
        // Ignore these paths in the state
        ignoredPaths: ["payload.options.onOk","@ReduxToastr/confirm/SHOW"],
      },
    }),
})
export let persister = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
