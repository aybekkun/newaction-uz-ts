import { $authHost } from "../../api/interceptors"

import {
	ILessonCreate,
	ILessonResponse,
	ILessonUpdate,
} from "./lesson.interface"

export const LessonService = {
	async getById(id: string | number) {
		const { data } = await $authHost.get<ILessonResponse>(`/lessons/${id}`)
		return data.data
	},
	async create(data: ILessonCreate) {
		const response = await $authHost.post(`/lessons`, data)
		return response
	},
	async update({ id, ...data }: ILessonUpdate) {
		const response = await $authHost.put(`/lessons/${id}`, data)
		return response
	},
	async delete(id: string | number) {
		const response = await $authHost.delete(`/lessons/${id}`)
		return response
	},
}
