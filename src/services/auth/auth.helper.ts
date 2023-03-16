import Cookies from "js-cookie"

import { IUserData } from "../../store/user/user.interface"

export const saveTokenStorage = (data: IUserData) => {
	Cookies.set("token", data.token)
}

export const saveToStorage = (data: IUserData) => {
	saveTokenStorage(data)
	localStorage.setItem("user", JSON.stringify(data.user))
	localStorage.setItem("token", JSON.stringify(data.token))
}

export const removeTokenStorage = () => {
	Cookies.remove("token")
	localStorage.removeItem("user")
}
