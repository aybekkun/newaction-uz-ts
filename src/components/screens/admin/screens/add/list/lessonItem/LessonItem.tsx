import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { IconButton, Tooltip } from "@mui/material"
import { FC } from "react"
import { toastr } from "react-redux-toastr"

import useAppDispatch from "../../../../../../../hooks/useAppDispatch.hook"
import { useCustomRefetch } from "../../../../../../../hooks/useCustomRefetch.hook"
import { setEditLesson } from "../../../../../../../store/add/add.slice"
import styles from "../CourseList.module.scss"

import { useDelete } from "./useDelete"

type LessonItemProps = {
  name: string
  id: string | number
}

const LessonItem: FC<LessonItemProps> = ({ id, name = "" }) => {
  const dispatch = useAppDispatch()
  const refetch = useCustomRefetch()
  const { mutate, isLoading } = useDelete()
  const onSet = () => {
    dispatch(setEditLesson({ id, name }))
  }
  const onDelete = () => {
    toastr.confirm("Удалить модуль", {
      onOk: async () => {
        await mutate(id)
        refetch("Add course")
      },
    })
  }
  return (
    <div className={styles.lesson}>
      <span> {name}</span>
      <div className={styles.actions}>
        <Tooltip onClick={onSet} title="Редактировать">
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Удалить">
          <IconButton disabled={isLoading} onClick={onDelete} color="error">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}

export default LessonItem
