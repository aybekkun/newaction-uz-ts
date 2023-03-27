import { $authHost } from "../../api/interceptors"

import { ISearch } from "./../../shared/types/search.types"
import { IAdminsResponse, IUserResponse, IUserUpdate, IUserUpdatePassword } from "./user.interface"

export const UserService = {
  async getAll(searchTerm: ISearch, signal?: AbortSignal) {
    const { data } = await $authHost.get<IUserResponse>(`/users`, {
      params: searchTerm ? searchTerm : {},
      signal,
    })
    return data
  },
  async getAdmins(signal?: AbortSignal) {
    const { data } = await $authHost.get<IAdminsResponse>(`/admins`, {
      signal,
    })
    return data
  },
  async update(data: IUserUpdate) {
    const response = await $authHost.put(`/users/${data.id}`, {
      phone: data.phone,
      name: data.name,
      password: data.password,
    })
    return response
  },
  async updatePassword(data: IUserUpdatePassword) {
    const response = await $authHost.put(`/reset-pass/${data.id}`, { password: data.password })
    return response
  },
  async createAdmin(user_id: string | number) {
    const response = await $authHost.post(`/admins`, { user_id: user_id })
    return response
  },
  async deleteAdmin(id: string | number) {
    const response = await $authHost.delete(`/admins/${id}`)
    return response
  },
}
