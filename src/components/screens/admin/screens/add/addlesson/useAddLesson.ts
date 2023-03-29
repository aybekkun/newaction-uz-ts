import { AxiosError } from "axios"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import { ILessonCreate } from "./../../../../../../services/lesson/lesson.interface"
import { LessonService } from "./../../../../../../services/lesson/lesson.service"

export const useAddLesson = () => {
  const { mutate, isLoading } = useMutation(async (data: ILessonCreate) => LessonService.create(data), {
    onSuccess: () => {
      toastr.success("Модуль", "добавлен")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
  return { mutate, isLoading }
  
}
