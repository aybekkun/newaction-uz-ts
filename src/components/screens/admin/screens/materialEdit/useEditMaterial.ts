import { MaterialService } from './../../../../../services/material/material.service';
import { IMaterialUpdate } from './../../../../../services/material/material.interface';
import { toastr } from 'react-redux-toastr';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
export const useEditMaterial = ()=>{
    const { mutate, isLoading } = useMutation(async (data: IMaterialUpdate) => MaterialService.update(data), {
        onSuccess: () => {
          toastr.success("Материал", "изменен")
        },
        onError: (error: AxiosError) => {
          toastr.error("Oops, something get wrong", String(error.message))
        },
      })
      return { mutate, isLoading }
}