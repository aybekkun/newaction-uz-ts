import {
	ICourseResponse,
	IOneCourseResponse,
	ISearchTerm,
} from "./course.interface"
import { $authHost, $host } from "../../api/interceptors"

export const CourseService = {
	async getAll(searchTerm?: ISearchTerm) {
		const { data } = await $host.get<ICourseResponse>("/courses", {
			params: searchTerm ? searchTerm : {},
		})
		return data.data
	},

	async getById(id?: string) {
		const { data } = await $host.get<IOneCourseResponse>(`/courses/${id}`)
		return data.data
	},
	async getByIdPublic(id?: string) {
		const { data } = await $host.get<IOneCourseResponse>(`/freecourses/${id}`)
		return data.data
	},
	async create(fd: FormData) {
		const response = await $authHost.post(`/courses`, fd)
		return response
	},

	async update(fd: FormData) {
		const response = await $authHost.post(`/courses`, fd)
		return response
	},

	async delete(id: string) {
		const response = await $authHost.delete(`/courses/${id}`)
		return response
	},
}
