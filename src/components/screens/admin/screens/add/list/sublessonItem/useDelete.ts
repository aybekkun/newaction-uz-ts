import { AxiosError } from "axios"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import { ISubLessonUpdate } from "./../../../../../../../services/sublesson/sublesson.interface"
import { SubLessonService } from "./../../../../../../../services/sublesson/sublesson.service"

export const useDelete = () => {
  const { mutate, isLoading } = useMutation(async (id: string | number) => SubLessonService.delete(id), {
    onSuccess: (data) => {
      toastr.success("Урок", "удален")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
  return { mutate, isLoading }
}
