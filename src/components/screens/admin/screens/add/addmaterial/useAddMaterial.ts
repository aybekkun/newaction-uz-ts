import { useMutation } from 'react-query';
import { MaterialService } from './../../../../../../services/material/material.service';
import { IMaterialCreate } from './../../../../../../services/material/material.interface';
import { toastr } from 'react-redux-toastr';
import { AxiosError } from 'axios';
export const useAddMaterial = ()=>{
    const { mutate, isLoading } = useMutation(async (data: IMaterialCreate) => MaterialService.create(data), {
        onSuccess: () => {
          toastr.success("Урок", "добавлен")
        },
        onError: (error: AxiosError) => {
          toastr.error("Oops, something get wrong", String(error.message))
        },
      })
      return { mutate, isLoading }
}

// name: subInput, sub_lesson_id: subSelectId, data: data