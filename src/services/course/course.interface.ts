import { IOneCourse } from "../../shared/types/course.types"

export interface ISearchTerm {
	limit?: number
	page?: number
}
export interface ICourseResponse {
	data: ICourse[]
	total: number
}

export interface ICourse {
	id: number
	title: string
	description: string
	price: number
	status: null
	started_at: null
	finished_at: null
	image: string
	sub_lesson_2s_id: number
	lessons: number
	learners_count: number
	rating_count: number
	rating_mark_overall: number
}

export interface IOneCourseResponse {
	data: IOneCourse
}
