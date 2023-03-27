import { AxiosError } from "axios"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import { CourseService } from "../../../../../services/course/course.service"

type DataType = {
  id: string | number
  fd: FormData
}
export const useUpdate = () => {

  const { mutate } = useMutation(async (data: DataType) => CourseService.update(data), {
    onSuccess() {
      toastr.success("Курс", "изменен")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })

  const onSubmit = async (id: string | number, fd: FormData) => {
    await mutate({ id, fd })
  }

  return { onSubmit }
}
