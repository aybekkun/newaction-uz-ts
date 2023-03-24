import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "react-query"
import { toastr } from "react-redux-toastr"

import { CommentsService } from "./../../../../../services/comments/comments.service"

export const useDeleteComment = () => {
  const queryClient = useQueryClient()
  const { mutate: deleteComments, isLoading } = useMutation(
    async (id: number |string) => CommentsService.deleteCourseComments(id),
    {
      onSuccess: (data) => {
        toastr.success("Комментарий", "удален")
      },
      onError: (error: AxiosError) => {
        toastr.error("Oops, something get wrong", String(error.message))
      },
    }
  )
  const refetch = () => {
    setTimeout(() => {
      queryClient.refetchQueries("Admin comments")
    }, 1000)
  }
  return { deleteComments, isLoading, refetch }
}
