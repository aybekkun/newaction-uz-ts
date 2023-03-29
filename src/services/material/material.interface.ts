export interface IMaterialCreate {
  data: any[]
  sub_lesson_id: string | number
  name: string
}
export interface IMaterialUpdate {
  id: string | number
  data: any[]
  name: string
}

export interface IMaterialResponse {
  id: number | string
  next_id: number
  previos_id: number
  name: string
  sub_lesson_id: number
  lesson_id: number
  data: any[]
}
