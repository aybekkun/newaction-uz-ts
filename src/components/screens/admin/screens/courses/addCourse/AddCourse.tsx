import { AxiosError } from "axios"
import { FC } from "react"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import { useCustomRefetch } from "../../../../../../hooks/useCustomRefetch.hook"
import { CourseService } from "../../../../../../services/course/course.service"

import CourseForm from "./CourseForm"

const AddCourse: FC = () => {
  const refecth = useCustomRefetch(1500)
  const { mutate } = useMutation(async (fd: FormData) => CourseService.create(fd), {
    onSuccess() {
      toastr.success("Курс", "создан")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })

  const onSubmit = async (fd: FormData) => {
    await mutate(fd)
    refecth("Admin courses list")
  }

  return <CourseForm onSubmitForm={onSubmit} />
}

export default AddCourse
