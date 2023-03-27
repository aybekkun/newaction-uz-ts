import { CircularProgress } from "@mui/material"
import { FC } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

import { useCustomRefetch } from "../../../../../hooks/useCustomRefetch.hook"
import { CourseService } from "../../../../../services/course/course.service"
import CourseForm from "../courses/addCourse/CourseForm"

import { useUpdate } from "./useUpdate"

const Edit: FC = () => {
  const { id } = useParams()
  const { onSubmit } = useUpdate()
  const refecth = useCustomRefetch(3000)
  const { data, isLoading } = useQuery(["Admin course", id], () => CourseService.getById(id), {
    enabled: !!id,
  })

  const onSubmitForm = async (fd: FormData) => {
    if (id) {
      await onSubmit(id, fd)
      refecth("Admin courses list")
    }
  }

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <>
      <CourseForm
        titleCourse={data?.title}
        descriptionCourse={data?.description}
        priceCourse={String(data?.price)}
        onSubmitForm={onSubmitForm}
      />
    </>
  )
}

export default Edit
