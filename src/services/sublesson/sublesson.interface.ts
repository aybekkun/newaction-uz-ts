import { IMaterial } from "../../shared/types/course.types"
export interface ISubLessonCreate {
	name: string
	lesson_id: number | string
}

export interface ISubLessonUpdate extends Partial<ISubLessonCreate> {
	id: string | number
}

export interface ISubLessonResponse {
	data: ISubLessonData
}

export interface ISubLessonData {
	id: number
	name: string
	lesson_id: number
	sub_lesson_2s: IMaterial[]
	tests?: ITest[]
}

export interface ITest {
	id: number
	title: string
	answers: IAnswer[]
}

export interface IAnswer {
	text: string
	checked: boolean
}
