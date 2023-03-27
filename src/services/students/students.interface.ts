export interface IStundentCreate {
  user_id: number | string
  course_id: number | string
}

export interface IStudentResponse {
  data: IStudentData[]
  total: number
}

export interface IStudentData {
  id: number
  status: boolean
  course_title: string
  course_id: number
  user_name: string
  user_phone: string
  user_id: number
  admin_name: string
  admin_phone: string
  admin_id: number
}
