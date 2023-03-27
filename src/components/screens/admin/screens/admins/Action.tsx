import { Button } from "@mui/material"
import { AxiosError } from "axios"
import { FC } from "react"
import { useMutation, useQueryClient } from "react-query"
import { toastr } from "react-redux-toastr"

import { UserService } from "../../../../../services/user/user.service"

type ActionProps = {
  id: string | number
  user_name: string
}
const Action: FC<ActionProps> = ({ id, user_name }) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(async (id: string | number) => UserService.deleteAdmin(id), {
    onSuccess() {
      toastr.success("Админ", "удален")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
  const onDelete = async () => {
    if (window.confirm("Удалить из админов")) {
      await mutate(id)
      queryClient.refetchQueries("Admins")
    }
  }

  return (
    <>
      <Button onClick={onDelete} size="small" color="error">
        Удалить
      </Button>
    </>
  )
}

export default Action
