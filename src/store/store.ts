import { configureStore } from "@reduxjs/toolkit"
import { reducer as toastrReducer } from "react-redux-toastr"
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from "redux-persist"
// eslint-disable-next-line
import storage from "redux-persist/lib/storage"

import user from "./user/user.slice"

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}
const authReducer = persistReducer(persistConfig, user)
const store = configureStore({
	reducer: {
		user:authReducer,
		toastr: toastrReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export let persister = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
