import { AxiosError } from "axios"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import { useCustomRefetch } from "../../../../../../hooks/useCustomRefetch.hook"
import { CourseService } from "../../../../../../services/course/course.service"

export const useDelete = () => {
  const refetch = useCustomRefetch(1000)
  const { mutate } = useMutation(async (id: string | number) => CourseService.delete(id), {
    onSuccess() {
      toastr.success("Курс", "удален")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })

  const onDelete = (id: string | number) => {
    toastr.confirm("Удалить курс", {
      onOk: async () => {
        await mutate(id)
        refetch("Admin courses list")
      },
    })
  }
  return { onDelete }
}
