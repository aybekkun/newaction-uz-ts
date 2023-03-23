import { Dayjs } from "dayjs"



export interface IOrderResponse {
  data: IOrderData[]
  total: number
}

export interface IOrderData {
  id: number
  status: boolean
  user_id: number
  user_name: string
  user_phone: string
  course_title: string
  course_id: number
  course_price: number
  created_at: Date | Dayjs
}
