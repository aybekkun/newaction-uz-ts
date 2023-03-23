import { useParams } from "react-router-dom"

import useAppSelector from "./useAppSelector.hook"

export const useCourseSelector = () => {
  const { materialId } = useParams()
  const { material, courses } = useAppSelector((state) => state.course)
  const isAvailableLesson = !!courses?.lessons.find((sublessons) =>
    sublessons.sub_lessons.find((materials) =>
      materials.sub_lesson_2s.find((material) => material.id === Number(materialId))
    )
  )?.available
  return { material, courses, isAvailableLesson }
}
