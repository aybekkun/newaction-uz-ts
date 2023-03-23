import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

import { useAuth } from "../../../../../hooks/useAuth.hooks"
import { CommentsService } from "../../../../../services/comments/comments.service"

export const useLoadMaterialComments = () => {
  const { materialId } = useParams()
  const { user } = useAuth()
  const { data, refetch } = useQuery(
    ["Material comments", materialId],
    //@ts-ignore
    async ({ signal }) => CommentsService.getMaterialsComments({ sub_lesson_2_id: materialId, user_id: user.id }, signal),
    {
      enabled: !!materialId && !!user,
      keepPreviousData: true,
    }
  )
  return { data, refetch }
}
