import { createSlice } from "@reduxjs/toolkit"

import { checkAuth, login, logout, register } from "./user.actions"
import { IUserState } from "./user.interface"

const initialState: IUserState = {
	user: null,
	isLoading: false,
	isAuth: false,
	isAdmin: false,
	isSuperAdmin: false,
	isStudent: false,
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.data.user
				state.isAuth = true
				state.isAdmin = payload.data.user.role.includes("admin")
				state.isSuperAdmin = payload.data.user.role.includes("super-admin")
				state.isStudent = payload.data.user.role.includes("student")
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.user = null
				state.isAdmin = false
				state.isSuperAdmin = false
				state.isStudent = false
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.data.user
				state.isAuth = true
				state.isAdmin = payload.data.user.role.includes("admin")
				state.isSuperAdmin = payload.data.user.role.includes("super-admin")
				state.isStudent = payload.data.user.role.includes("student")
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.user = null
				state.isAdmin = false
				state.isSuperAdmin = false
				state.isStudent = false
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
				state.isAuth = false
				state.isAdmin = false
				state.isSuperAdmin = false
				state.isStudent = false
			})
			.addCase(checkAuth.rejected, (state) => {
				state.user = null
				state.isAuth = false
				state.isAdmin = false
				state.isSuperAdmin = false
				state.isStudent = false
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.data.user
				state.isAuth = true
				state.isAdmin = payload.data.user.role.includes("admin")
				state.isSuperAdmin = payload.data.user.role.includes("super-admin")
				state.isStudent = payload.data.user.role.includes("student")
			})
	},
})

export default userSlice.reducer
