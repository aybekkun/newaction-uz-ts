import axios, { InternalAxiosRequestConfig } from "axios"
import { _API_KEY } from "../configs/api.config"

const $authHost = axios.create({
	baseURL: _API_KEY,
	headers: {
		"Content-Type": "application/json",
	},
})

$authHost.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const token = localStorage.getItem("token")
	if (config.headers && token) config.headers.Authorization = `Bearer ${token}`
	return config
})

const $host = axios.create({
	baseURL: _API_KEY,
	headers: {
		"Content-Type": "application/json",
	},
})

export { $host, $authHost }
