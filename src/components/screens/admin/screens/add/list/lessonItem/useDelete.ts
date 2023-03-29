import { LessonService } from './../../../../../../../services/lesson/lesson.service';
import { AxiosError } from "axios"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"


export const useDelete = () => {
  const { mutate, isLoading } = useMutation(async (id: string | number) => LessonService.delete(id), {
    onSuccess: (data) => {
      toastr.success("Модуль", "удален")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
  return { mutate, isLoading }
}
