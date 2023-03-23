import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

import useAppDispatch from "../../../../hooks/useAppDispatch.hook"
import { useAuth } from "../../../../hooks/useAuth.hooks"
import { useCourseSelector } from "../../../../hooks/useCourseSelector.hook"
import { useIsThere } from "../../../../hooks/useIsThere.hook"
import { MaterialService } from "../../../../services/material/material.service"
import { setMaterial } from "../../../../store/course/course.slice"

export const useMaterial = () => {
  const dispatch = useAppDispatch()
  const { isAvailableLesson } = useCourseSelector()
  const { materialId } = useParams()
  const { isAdmin } = useAuth()
  const { isThereCourse } = useIsThere()
  const {
    data: publicData,
    isLoading: publicIsLoading,
    isError: publicIsError,
  } = useQuery(
    ["Material public by id", materialId],
    async ({ signal }) => {
      return MaterialService.getByIdPublic(materialId, signal)
    },
    {
      onSuccess(data) {
        dispatch(setMaterial(data))
      },
      enabled: !!materialId && !!dispatch && isAvailableLesson && !isThereCourse,
      keepPreviousData: true,
    }
  )
  const { data, isLoading, isError } = useQuery(
    ["Material by id", materialId],
    async ({ signal }) => {
      return MaterialService.getById(materialId, signal)
    },
    {
      onSuccess(data) {
        dispatch(setMaterial(data))
      },
      enabled: (!!materialId && !!dispatch && isAvailableLesson && isThereCourse) || isAdmin,
      keepPreviousData: true,
    }
  )

  if (isThereCourse) {
    return { data, isLoading, isError }
  }
  return { data: publicData, isLoading: publicIsLoading, isError: publicIsError }
}
