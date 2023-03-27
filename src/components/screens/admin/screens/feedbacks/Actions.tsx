import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton, Stack, Tooltip } from "@mui/material"
import { FC } from "react"
import { toastr } from "react-redux-toastr"

import Popup from "./Popup"
import { useDeleteComment } from "./useDeleteComment"

type ActionsProps = {
  id: number | string
  message: string
}
const Actions: FC<ActionsProps> = ({ id, message }) => {
  const { deleteComments, isLoading, refetch } = useDeleteComment()

  const handleDelete = async () => {
    await deleteComments(id)
    refetch()
  }
  const onDelete = () => {
    toastr.confirm("Удалить", {
      onOk() {
        handleDelete()
      },
    })
  }
  return (
    <Stack spacing={1} flexWrap="wrap" direction="row">
      <Popup id={id} message={message} />
      <Tooltip title="Удалить">
        <IconButton onClick={onDelete} disabled={isLoading} color="error" size="small">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}

export default Actions
