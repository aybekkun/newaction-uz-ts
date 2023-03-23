import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

import { useAuth } from "../../../../../hooks/useAuth.hooks"
import { CommentsService } from "../../../../../services/comments/comments.service"

export const useLoadCourseComments = () => {
  const { courseId } = useParams()
  const { user } = useAuth()
  const { data, refetch } = useQuery(
    ["Course comments", courseId],
    //@ts-ignore
    async ({ signal }) => CommentsService.getCourseComments({ course_id: courseId, user_id: user.id }, signal),
    {
      enabled: !!courseId && !!user,
      keepPreviousData: true,
    }
  )
  return { data, refetch }
}
