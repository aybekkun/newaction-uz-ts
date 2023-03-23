import Cookies from "js-cookie"

import { IUserData } from "../../store/user/user.interface"

// export const saveTokenStorage = (data: IUserData) => {
//   Cookies.set("token", data.token)
// }

export const saveToStorage = (data: IUserData) => {
  // saveTokenStorage(data)
  localStorage.setItem("token", data.token)
}

export const removeTokenStorage = () => {
  Cookies.remove("token")
  localStorage.clear()
}
