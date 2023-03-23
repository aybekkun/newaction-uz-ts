import { useParams } from "react-router-dom"

import { useAuth } from "./useAuth.hooks"

export const useIsThere = () => {
  const { courseId, materialId } = useParams()
  const { user } = useAuth()
  if (!user) {
    return { isThereCourse: false, isThereOrder: false, courseId, materialId }
  }
  const isThereCourse = user.courses.some((item) => item.course_id === Number(courseId))
  const isThereOrder = user.orders.some((item) => item.course_id === Number(courseId))
  return { isThereCourse, isThereOrder, courseId, materialId }
}
