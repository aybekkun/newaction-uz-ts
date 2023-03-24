import { $authHost } from "../../api/interceptors"

import {
  ICourseCommentsCreate,
  ICourseCommentsParams,
  ICourseCommentsResponse,
  ICourseCommentsUpdate,
  IMaterialsCommentsCreate,
  IMaterialsCommentsParams,
  IMaterialsCommentsResponse,
} from "./commets.interface"

export const CommentsService = {
  async getCourseComments(params?: ICourseCommentsParams, signal?: AbortSignal) {
    const { data } = await $authHost.get<ICourseCommentsResponse>(`comments`, { params: params, signal })
    return data
  },
  async createCourseComments(params: ICourseCommentsCreate) {
    const response = await $authHost.post(`/comments`, params)
    return response
  },
  async deleteCourseComments(id: string | number) {
    const response = await $authHost.delete(`/comments/${id}`)
    return response
  },
  async updateCourseComments(data: ICourseCommentsUpdate) {
    const response = await $authHost.put(`/comments/${data.id}`, { message: data.message })
    return response
  },
  async getMaterialsComments(params: IMaterialsCommentsParams, signal?: AbortSignal) {
    const { data } = await $authHost.get<IMaterialsCommentsResponse>(`feedbacks`, { params: params, signal })
    return data
  },
  async createMaterialsComments(params: IMaterialsCommentsCreate) {
    const response = await $authHost.post(`/feedbacks`, params)
    return response
  },
  async deleteMaterialsComments(id: string | number) {
    const response = await $authHost.delete(`/feedbacks/${id}`)
    return response
  },
  async updateMaterialsComments(data: ICourseCommentsUpdate) {
    const response = await $authHost.put(`/feedbacks/${data.id}`, { message: data.message })
    return response
  },
}
