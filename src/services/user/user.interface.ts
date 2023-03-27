export interface IUserResponse {
  data: IUserData[]
  total: number
}

export interface IUserData {
  id: number
  name: string
  phone: string
  role: string
  courses: ICourse[] | []
  orders: IOrder[] | []
  admin_id: null | number
}

export interface IUserUpdate {
  id: string | number
  name: string
  phone: string
  password: string
}
export interface IUserUpdatePassword {
  id: string | number
  password: string
}
interface ICourse {
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
  created_at: Date
}

export interface IAdminsResponse {}

export interface IAdminsResponse {
  data: IAdminsData[]
}

export interface IAdminsData {
  id: number
  user_name: string
  user_phone: string
  user_id: number
}
