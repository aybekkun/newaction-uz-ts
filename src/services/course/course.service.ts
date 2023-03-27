import { $authHost, $host } from "../../api/interceptors"

import { ICourseResponse, IOneCourseResponse, ISearchTerm } from "./course.interface"

export const CourseService = {
  async getAll(searchTerm?: ISearchTerm) {
    const { data } = await $host.get<ICourseResponse>("/courses", {
      params: searchTerm ? searchTerm : {},
    })
    return data.data
  },

  async getById(id?: string, signal?: AbortSignal) {
    const { data } = await $authHost.get<IOneCourseResponse>(`/courses/${id}`, { signal })
    return data.data
  },
  async getByIdPublic(id?: string, signal?: AbortSignal) {
    const { data } = await $host.get<IOneCourseResponse>(`/freecourses/${id}`, { signal })
    return data.data
  },
  async create(fd: FormData) {
    const response = await $authHost.post(`/courses`, fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response
  },

  async update(data: DataType) {
    const response = await $authHost.post(`/courses/${data.id}`, data.fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response
  },

  async delete(id: string | number) {
    const response = await $authHost.delete(`/courses/${id}`)
    return response
  },
}

type DataType = {
  id: string | number
  fd: FormData
}
