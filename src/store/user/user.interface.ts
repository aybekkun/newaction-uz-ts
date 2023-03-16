export interface IUserState {
	isLoading: boolean
	user: IUser | null
	isAuth: boolean
	isAdmin: boolean
	isSuperAdmin: boolean
	isStudent: boolean
}

export interface ICourses {
	status: boolean
	course_title: string
	course_description: string
	course_image: string
	course_id: number
	course_time: number
	course_complate_done: number
	user_id: number
	last_sub_lessone_2_id: number
}

export interface IOrder {
	id: number
	status: boolean
	user_id: number
	user_name: string
	user_phone: string
	course_title: string
	course_id: number
	course_price: number
	created_at: string
}

export interface IUser {
	id: number
	name: string
	phone: string
	role: string
	courses: ICourses[]
	orders: IOrder[]
	admin_id: number
}

export interface IUserData {
	user: IUser
	token: string
}

export interface IUserResponse {
	data: IUserData
}
