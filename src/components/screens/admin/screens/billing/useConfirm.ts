import { AxiosError } from "axios"
import { useMutation } from "react-query"
import { useQueryClient } from "react-query"
import { toastr } from "react-redux-toastr"

import { IStundentCreate } from "./../../../../../services/students/students.interface"
import { StudentsService } from "./../../../../../services/students/students.service"

export const useConfirm = () => {
  const queryClient = useQueryClient()
  const { mutate: confirm, isLoading } = useMutation(async (data: IStundentCreate) => StudentsService.create(data), {
    onSuccess: (data) => {
      toastr.success("Заказ", "принят")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
 const refetch = () => {
    setTimeout(() => {
      queryClient.refetchQueries("Billing")
    }, 1500)
  } 
  return { confirm, isLoading, refetch }
}
