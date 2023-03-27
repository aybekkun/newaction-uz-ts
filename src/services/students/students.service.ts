import { $authHost } from "../../api/interceptors"

import { ISearch } from "./../../shared/types/search.types"
import { IStudentResponse, IStundentCreate } from "./students.interface"

export const StudentsService = {
  async getAll(searchTerm: ISearch, signal?: AbortSignal) {
    const { data } = await $authHost.get<IStudentResponse>(`/students`, {
      params: searchTerm ? searchTerm : {},
      signal,
    })
    return data
  },
  async create(data: IStundentCreate) {
    const response = await $authHost.post(`/students`, data)
    return response.data
  },
  async delete(id: string | number) {
    const response = await $authHost.delete(`/students/${id}`)
    return response
  },
}
