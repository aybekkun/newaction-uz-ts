import { ISubLessonCreate } from './../../../../../../services/sublesson/sublesson.interface';
import { SubLessonService } from './../../../../../../services/sublesson/sublesson.service';
import { AxiosError } from 'axios';
import { toastr } from 'react-redux-toastr';
import { useMutation } from 'react-query';
export const useAddSublesson = ()=>{
    const { mutate, isLoading } = useMutation(async (data: ISubLessonCreate) => SubLessonService.create(data), {
        onSuccess: () => {
          toastr.success("Урок", "добавлен")
        },
        onError: (error: AxiosError) => {
          toastr.error("Oops, something get wrong", String(error.message))
        },
      })
      return { mutate, isLoading }
}