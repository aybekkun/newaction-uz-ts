import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { toastr } from "react-redux-toastr";
import { ISubLessonUpdate } from './../../../../../../../services/sublesson/sublesson.interface';
import { SubLessonService } from './../../../../../../../services/sublesson/sublesson.service';


export const useEdit = () => {
  const { mutate, isLoading } = useMutation(async (data: ISubLessonUpdate) => SubLessonService.update(data), {
    onSuccess: (data) => {
      toastr.success("Имя урока", "изменен")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
  return { mutate, isLoading }
}
