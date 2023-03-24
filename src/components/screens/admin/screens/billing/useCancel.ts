import { AxiosError } from "axios"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import { OrderService } from "./../../../../../services/order/order.service"

export const useCancel = () => {
  const { mutate: cancel } = useMutation(async (id: string | number) => OrderService.delete(id), {
    onSuccess: (data) => {
      toastr.success("Заказ", "отменен")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })

  return { cancel }
}
