import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "react-query"
import { toastr } from "react-redux-toastr"

import { CommentsService } from "../../../../../services/comments/comments.service"
import { ICourseCommentsUpdate } from "../../../../../services/comments/commets.interface"

export const useEditComment = () => {
  const queryClient = useQueryClient()
  const { mutate: updateComments, isLoading } = useMutation(
    async (data: ICourseCommentsUpdate) => CommentsService.updateMaterialsComments(data),
    {
      onSuccess: (data) => {
        toastr.success("Комментарий", "редактирован")
      },
      onError: (error: AxiosError) => {
        toastr.error("Oops, something get wrong", String(error.message))
      },
    }
  )
  const refetch = () => {
    setTimeout(() => {
      queryClient.refetchQueries("Admin feedbacks")
    }, 1000)
  }
  return { updateComments, isLoading, refetch }
}
