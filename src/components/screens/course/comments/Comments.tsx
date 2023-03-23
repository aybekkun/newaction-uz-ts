import { FC } from "react"

import { useCourseSelector } from "../../../../hooks/useCourseSelector.hook"
import { useIsThere } from "../../../../hooks/useIsThere.hook"

import Order from "./Order"
import CourseComments from "./courseComments/CourseComments"
import MaterialComments from "./materialComments/MaterialComments"

const Comments: FC = () => {
  const { isThereCourse, materialId } = useIsThere()
  const { courses } = useCourseSelector()

  if (courses?.sub_lesson_2s_id === Number(materialId) && isThereCourse) {
    return <CourseComments />
  }
  if (isThereCourse) {
    return <MaterialComments />
  }
  return <Order/>
}

export default Comments
