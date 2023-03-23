import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import { CommentsService } from "../../../../../services/comments/comments.service"
import {  IMaterialsCommentsCreate } from "../../../../../services/comments/commets.interface"

export const useCreateMaterialComments = () => {
  const { mutate } = useMutation(async (data: IMaterialsCommentsCreate) => CommentsService.createMaterialsComments(data), {
    onSuccess: (data) => {
      toastr.success("Comments", "Succesfully created")
    },
    onError: (error) => {
      //@ts-ignore
      toastr.error("Oops, something get wrong", JSON.stringify(error.message))
    },
  })
  return { mutate }
}
