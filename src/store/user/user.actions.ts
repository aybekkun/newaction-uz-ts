import { createAsyncThunk } from "@reduxjs/toolkit"
// import { errorCatch } from 'api/api.helpers'
import { toastr } from "react-redux-toastr"


import { AuthService } from "../../services/auth/auth.service"
import { IAuthInput, ISignInput } from "../../shared/types/auth.types"

import { removeTokenStorage } from "./../../services/auth/auth.helper"
import { IUserResponse } from "./user.interface"

// import { toastError } from '../../utils/api/withToastrErrorRedux'

export const register = createAsyncThunk<IUserResponse, ISignInput>(
	"user/register",
	async ({ phone, password, name }, thunkAPI) => {
		try {
			const response = await AuthService.register(phone, password, name)
			toastr.success("Registration", "Completed successfully")
			return response.data
		} catch (error) {
			toastr.error("Registration", "Failed")
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IUserResponse, IAuthInput>(
	"user/login",
	async ({ phone, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(phone, password)
			toastr.success("Login", "Completed successfully")
			return response.data
		} catch (error) {
			toastr.error("Login", "Failed")
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk("user/logout", async () => {
	await AuthService.logout()
	toastr.success("Logout", "Successfully logout")
})

export const checkAuth = createAsyncThunk<IUserResponse>(
	"user/check-auth",
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.checkAuth()
			return response.data
		} catch (error) {
			removeTokenStorage()	
			return thunkAPI.rejectWithValue(error)
		}
	}
)
