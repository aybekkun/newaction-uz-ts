import { Button } from "@mui/material"
import { FC } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

import { useAddSelector } from "../../../../../hooks/useAddSelector.hook"
import useAppDispatch from "../../../../../hooks/useAppDispatch.hook"
import { CourseService } from "../../../../../services/course/course.service"
import { setAddDrawerOpen, setAddLesson, setAddMaterial, setAddSublesoon } from "../../../../../store/add/add.slice"
import MyDrawer from "../../../../ui/drawer/MyDrawer"

import styles from "./Add.module.scss"
import AddLesson from "./addlesson/AddLesson"
import AddMaterial from "./addmaterial/AddMaterial"
import AddSublesson from "./addsublesson/AddSublesson"
import CourseList from "./list/CourseList"

const Add: FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const { addDraweOpen, type } = useAddSelector()
  const { data, isLoading } = useQuery(["Add course", id], async ({ signal }) => CourseService.getById(id), {
    enabled: !!id,
  })

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <Button size="small" onClick={() => dispatch(setAddLesson())} variant="contained">
          Добавить модуль
        </Button>
        <Button size="small" onClick={() => dispatch(setAddSublesoon())} variant="contained">
          Добавить урок
        </Button>
        <Button size="small" onClick={() => dispatch(setAddMaterial())} variant="contained">
          Добавить материалы
        </Button>
      </div>
      <div className={styles.main}>
        {type !== "material" && <CourseList isLoading={isLoading} data={data?.lessons ?? []} />}
        {type === "material" && <AddMaterial lessons={data?.lessons ?? []} />}
      </div>
      <MyDrawer open={addDraweOpen} onClose={() => dispatch(setAddDrawerOpen(false))}>
        {type === "lesson" && <AddLesson />}
        {type === "sublesson" && <AddSublesson data={data?.lessons ?? []} />}
      </MyDrawer>
    </div>
  )
}

export default Add
