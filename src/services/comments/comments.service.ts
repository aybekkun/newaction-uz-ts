import { $authHost } from "../../api/interceptors"

import {
  ICourseCommentsCreate,
  ICourseCommentsParams,
  ICourseCommentsResponse,
  IMaterialsCommentsCreate,
  IMaterialsCommentsParams,
  IMaterialsCommentsResponse,
} from "./commets.interface"

export const CommentsService = {
  async getCourseComments(params: ICourseCommentsParams, signal?: AbortSignal) {
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
  async updateCourseComments(id: string | number, title: string) {
    const response = await $authHost.put(`/comments/${id}`, { title })
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
  async updateMaterialsComments(id: string | number, title: string) {
    const response = await $authHost.put(`/feedbacks/${id}`, { title })
    return response
  },
}
