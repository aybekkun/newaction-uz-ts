import { AxiosError } from "axios"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import { UserService } from "../../../../../services/user/user.service"

export const useMakeAdmin = () => {
  const { mutate, isLoading } = useMutation(async (id: string | number) => UserService.createAdmin(id), {
    onSuccess() {
      toastr.success("Пользователь", "изменен")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
  return { mutate, isLoading }
}
