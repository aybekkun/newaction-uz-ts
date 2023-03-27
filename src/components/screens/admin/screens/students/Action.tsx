import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton, Tooltip } from "@mui/material"
import { AxiosError } from "axios"
import { FC } from "react"
import { useMutation, useQueryClient } from "react-query"
import { toastr } from "react-redux-toastr"

import { StudentsService } from "../../../../../services/students/students.service"

type ActionProps = {
  id: number | string
  user_name: string
}
const Action: FC<ActionProps> = ({ id, user_name }) => {
  const { mutate } = useMutation(async (id: number | string) => StudentsService.delete(id), {
    onSuccess() {
      toastr.success("Студент", " удален")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
  const queryClient = useQueryClient()
  const refetch = () => {
    setTimeout(() => {
      queryClient.refetchQueries("Admin stundents")
    }, 1000)
  }
  const handleDelete = async () => {
    await mutate(id)
    refetch()
  }
  const onDelete = () => {
    toastr.confirm("Удалить студента?", {
      onOk() {
        handleDelete()
      },
    })
  }
  return (
    <>
      <Tooltip title="Удалить из курса">
        <IconButton onClick={onDelete} color="error" size="small">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  )
}

export default Action
