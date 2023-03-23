export interface ILesson {
	id: number
	name: string
	course_id: number
	available: boolean
	sub_lessons: ISubLesson[]
}

export interface ISubLesson {
	id: number
	name: string
	lesson_id: number
	sub_lesson_2s: IMaterial[]
}

export interface IMaterial {
	id: number
	name: string
}

export interface IOneCourse {
	id: number
	title: string
	description: string
	price: number
	status: null
	started_at: null
	finished_at: null
	image: string
	sub_lesson_2s_id: number
	learners_count: number
	rating_count: number
	rating_mark_overall: number
	sub_lesson_2s: IMaterial[]
	lessons: ILesson[]
}
