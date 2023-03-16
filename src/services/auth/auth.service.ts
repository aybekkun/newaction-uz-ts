import { $authHost, $host } from "../../api/interceptors"

import { IUserResponse } from "../../store/user/user.interface"

import { removeTokenStorage, saveToStorage } from "./auth.helper"

export const AuthService = {
	async register(name: string, phone: string, password: string) {
		const response = await $host.post<IUserResponse>("/auth/register", {
			name,
			phone,
			password,
		})
		if (response.data.data.token) {
			saveToStorage(response.data.data)
		}
		return response
	},
	async login(phone: string, password: string) {
		const response = await $host.post<IUserResponse>("/auth/login", {
			phone,
			password,
		})
		if (response.data.data.token) {
			saveToStorage(response.data.data)
		}
		return response
	},
	logout() {
		removeTokenStorage()
	},
	async checkAuth() {
		const response = await $authHost.post<IUserResponse>("/auth/check")
		if (response.data.data.token) {
			saveToStorage(response.data.data)
		}
		return response
	},
}

/* 
export const AuthService = {
	async register(name: string, phone: string, password:string) {
		const response = await axios.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/register')}`,
			{
				email,
				password,
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	async login(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/login')}`,
			{
				email,
				password,
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axios.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/login/access-token')}`,
			{
				refreshToken,
			},
			{
				headers: getContentType(),
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
}
 */
