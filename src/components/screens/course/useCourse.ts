import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

import useAppDispatch from "../../../hooks/useAppDispatch.hook"
import { CourseService } from "../../../services/course/course.service"
import { setCourse } from "../../../store/course/course.slice"

export const useCourse = () => {
  const dispatch = useAppDispatch()
  const { courseId } = useParams()
  const {
    data: course,
    isLoading,
    isError,
  } = useQuery(["Course by id", courseId], async ({ signal }) => CourseService.getByIdPublic(courseId,signal), {
    onSuccess(data) {
      dispatch(setCourse(data))
    },
    enabled: !!courseId,
    keepPreviousData: true,
  })
  return { course, isLoading, isError }
}
