import { FC, Fragment } from "react"

import { useAddSelector } from "../../../../../../hooks/useAddSelector.hook"
import useAppDispatch from "../../../../../../hooks/useAppDispatch.hook"
import { ILesson } from "../../../../../../shared/types/course.types"
import { setOpen } from "../../../../../../store/add/add.slice"
import MyDrawer from "../../../../../ui/drawer/MyDrawer"
import Empty from "../../../../../ui/error/Empty"
import AsideSkeleton from "../../../../../ui/skeletons/AsideSkeleton"

import styles from "./CourseList.module.scss"
import LessonItem from "./lessonItem/LessonItem"
import LessonItemEdit from "./lessonItem/LessonItemEdit"
import MaterialItem from "./materialtem/MaterialItem"
import SublessonItem from "./sublessonItem/SublessonItem"
import SublessonItemEdit from "./sublessonItem/SublessonItemEdit"

type CourseListProps = {
  data: ILesson[]
  isLoading: boolean
}
const CourseList: FC<CourseListProps> = ({ data, isLoading }) => {
  const dispatch = useAppDispatch()
  const { type, open } = useAddSelector()
  if (isLoading) {
    return (
      <div className={styles.list}>
        <AsideSkeleton />
      </div>
    )
  }
  if (data.length === 0) {
    return <Empty />
  }
  return (
    <>
      <div className={styles.list}>
        {data.map((lesson) => (
          <Fragment key={lesson.id}>
            <LessonItem id={lesson.id} name={lesson.name} />
            {lesson.sub_lessons.map((sublesson) => (
              <Fragment key={sublesson.id}>
                <SublessonItem id={sublesson.id} name={sublesson.name} />
                {sublesson.sub_lesson_2s.map((material) => (
                  <MaterialItem id={material.id} key={material.id} name={material.name} />
                ))}
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
      <MyDrawer open={open} onClose={() => dispatch(setOpen(false))}>
        {type === "lesson" ? <LessonItemEdit /> : <SublessonItemEdit />}
      </MyDrawer>
    </>
  )
}

export default CourseList
