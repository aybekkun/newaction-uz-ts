import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { toastr } from "react-redux-toastr";
import { MaterialService } from './../../../../../../../services/material/material.service';


export const useDelete = () => {
  const { mutate, isLoading } = useMutation(async (id: string | number) => MaterialService.delete(id), {
    onSuccess: (data) => {
      toastr.success("Материал", "удален")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
  return { mutate, isLoading }
}
