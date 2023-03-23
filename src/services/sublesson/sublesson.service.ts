import { $authHost } from "../../api/interceptors"

import {
	ISubLessonCreate,
	ISubLessonResponse,
	ISubLessonUpdate,
} from "./sublesson.interface"

export const SubLessonService = {
	async getById(id: string | number) {
		const { data } = await $authHost.get<ISubLessonResponse>(`/subLessons/${id}`)
		return data
	},
	async create(data: ISubLessonCreate) {
		const response = await $authHost.post(`/subLessons`, data)
		return response
	},
	async update({ id, ...data }: ISubLessonUpdate) {
		const response = await $authHost.put(`/subLessons/${id}`, data)
		return response
	},
	async delete(id: string | number) {
		const response = await $authHost.delete(`/subLessons/${id}`)
		return response
	},
}
