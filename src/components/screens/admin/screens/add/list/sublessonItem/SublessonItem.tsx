import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { IconButton, Tooltip } from "@mui/material"
import { FC } from "react"
import { toastr } from "react-redux-toastr"

import useAppDispatch from "../../../../../../../hooks/useAppDispatch.hook"
import { useCustomRefetch } from "../../../../../../../hooks/useCustomRefetch.hook"
import { setEditSublesson } from "../../../../../../../store/add/add.slice"
import styles from "../CourseList.module.scss"

import { useDelete } from "./useDelete"

type SublessonItemProps = {
  name: string
  id: string | number
}

const SublessonItem: FC<SublessonItemProps> = ({ id, name = "" }) => {
  const dispatch = useAppDispatch()
  const refetch = useCustomRefetch()
  const { mutate, isLoading } = useDelete()
  const onSet = () => {
    dispatch(setEditSublesson({ id, name }))
  }
  const onDelete = () => {
    toastr.confirm("Удалить урок", {
      onOk: async () => {
        await mutate(id)
        refetch("Add course")
      },
    })
  }
  return (
    <div className={styles.sublesson}>
      <span> {name}</span>
      <div className={styles.actions}>
        <Tooltip title="Редактировать">
          <IconButton onClick={onSet}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Удалить">
          <IconButton onClick={onDelete} disabled={isLoading} color="error">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}

export default SublessonItem
