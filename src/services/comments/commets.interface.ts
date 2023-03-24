export interface ICourseComment {
  id: number
  user_name: string
  user_id: number
  message: string
  rating: number
  course_id: number
  course_title: string
}

export interface ICourseCommentsResponse {
  data: ICourseComment[] | []
  total: number
}

export interface ICourseCommentsParams {
  course_id?: string | number
  user_id?: string | number
  limit?: number
  page?: number
}

export interface ICourseCommentsCreate {
  course_id: string | number
  message: string
  rating: number
}
export interface ICourseCommentsUpdate {
  message: string
  id: string | number
}

export interface IMaterialsComment {
  id: number | string
  user_name: string
  user_id: number | string
  message: string
  sub_lesson_2_id: null | number | string
  sub_lesson_2_name: string
  course_id: number | string
  course_title: string
}

export interface IMaterialsCommentsResponse {
  data: IMaterialsComment[] | []
  total: number
}

export interface IMaterialsCommentsParams {
  sub_lesson_2_id?: string | number
  user_id?: string | number
  limit?: number
  page?: number
}

export interface IMaterialsCommentsCreate {
  sub_lesson_2_id: string | number
  message: string
  rating?: number
}
