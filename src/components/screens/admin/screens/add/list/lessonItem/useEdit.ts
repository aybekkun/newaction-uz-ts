import { AxiosError } from "axios"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import { ILessonUpdate } from "./../../../../../../../services/lesson/lesson.interface"
import { LessonService } from "./../../../../../../../services/lesson/lesson.service"

export const useEdit = () => {
  const { mutate, isLoading } = useMutation(async (data: ILessonUpdate) => LessonService.update(data), {
    onSuccess: (data) => {
      toastr.success("Имя модулья", "изменен")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
  return { mutate, isLoading }
}
