import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { IconButton, Tooltip } from "@mui/material"
import { FC } from "react"
import { toastr } from "react-redux-toastr"
import { useNavigate } from "react-router-dom"

import { useCustomRefetch } from "../../../../../../../hooks/useCustomRefetch.hook"
import { MATERIAL_EDIT } from "../../../../../../../shared/constants/route"
import styles from "../CourseList.module.scss"

import { useDelete } from "./useDelete"

type MaterialItemProps = {
  name: string
  id: string | number
}

const MaterialItem: FC<MaterialItemProps> = ({ id, name = "" }) => {
  const { mutate, isLoading } = useDelete()
  const navigate = useNavigate()
  const refetch = useCustomRefetch(1000)
  const onDelete = () => {
    toastr.confirm("Удалить", {
      onOk: async () => {
        await mutate(id)
        refetch("Add course")
      },
    })
  }

  return (
    <div className={styles.material}>
      <span> {name}</span>
      <div className={styles.actions}>
        <Tooltip title="Редактировать">
          <IconButton onClick={()=>navigate(`${MATERIAL_EDIT}/${id}`)}>
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

export default MaterialItem
