// import {
// 	ICourseResponse,
// 	IOneCourseResponse,
// 	ISearchTerm,
// } from "./course.interface"
import { $authHost, $host } from "../../api/interceptors"

import { IMaterialCreate, IMaterialResponse, IMaterialUpdate } from "./material.interface"

export const MaterialService = {
  async getById(id?: string, signal?: AbortSignal) {
    const { data } = await $authHost.get<IMaterialResponse>(`/subLessons2/${id}`, { signal })
    return data
  },
  async getByIdPublic(id?: string | number, signal?: AbortSignal) {
    const { data } = await $host.get<IMaterialResponse>(`/free/${id}`, { signal })
    return data
  },
  async create(data: IMaterialCreate) {
    const response = await $authHost.post(`/subLessons2`, data)
    return response
  },
  async update({ id, ...data }: IMaterialUpdate) {
    const response = await $authHost.put(`/subLessons2/${id}`, data)
    return response
  },

  async delete(id: string | number) {
    const response = await $authHost.delete(`/subLessons2/${id}`)
    return response
  },
}
