import { AxiosError } from "axios"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import { IMaterialCreate } from "./../../../../../../services/material/material.interface"
import { MaterialService } from "./../../../../../../services/material/material.service"

export const useAddTestMaterial = () => {
  const { mutate:createTest, isLoading } = useMutation(async (data: IMaterialCreate) => MaterialService.createTest(data), {
    onSuccess: () => {
      toastr.success("Тест", "добавлен")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
  return { createTest, isLoading }
}

// name: subInput, sub_lesson_id: subSelectId, data: data
