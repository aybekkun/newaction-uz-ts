import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import { Button, IconButton, Tooltip } from "@mui/material"
import { Stack } from "@mui/system"
import { FC } from "react"

import useAppDispatch from "../../../../../hooks/useAppDispatch.hook"
import { setOpen, setType, setUserUpdate } from "../../../../../store/update/update.slice"

import { useMakeAdmin } from "./useMakeAdmin"
import { useRefetch } from "./useRefetch"

type ActionsProps = {
  role: string
  user_name: string
  phone: string
  id: string | number
}

const Actions: FC<ActionsProps> = ({ user_name, phone, id, role }) => {
  const dispatch = useAppDispatch()
  const { mutate, isLoading } = useMakeAdmin()
  const { refetch } = useRefetch()
  const onClickUpdate = () => {
    dispatch(setType("all"))
    dispatch(setUserUpdate({ user_name: user_name, id: id, role: role, phone: phone }))
    dispatch(setOpen(true))
  }
  const onClickUpdatePassword = () => {
    dispatch(setType("password"))
    dispatch(setUserUpdate({ user_name: user_name, id: id, role: role, phone: phone }))
    dispatch(setOpen(true))
  }

  const onClickAdmin = async () => {
    if (window.confirm("Сдеалть админом")) {
      await mutate(id)
      refetch()
    }
  }
  if (role === "super-admin") {
    return null
  }
  return (
    <Stack spacing={2} flexWrap="wrap" direction="row">
      {role !== "admin" && (
        <Tooltip title="Сделать админом">
          <IconButton onClick={onClickAdmin} disabled={isLoading} size="small">
            <AdminPanelSettingsOutlinedIcon />
          </IconButton>
        </Tooltip>
      )}

      <Button onClick={onClickUpdatePassword} size="small">
        Reset password
      </Button>
      <Button onClick={onClickUpdate} size="small">
        Reset
      </Button>
    </Stack>
  )
}

export default Actions
