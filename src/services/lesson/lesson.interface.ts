import { ILesson } from "./../../shared/types/course.types"
export interface ILessonCreate {
	course_id: string | number
	name: string
}
export interface ILessonUpdate extends Partial<ILessonCreate> {
	id: string | number
}

export interface ILessonResponse {
	data: ILesson
}
