import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import { IconButton, Tooltip } from "@mui/material"
import { FC } from "react"
import { toastr } from "react-redux-toastr"

import styles from "./Billing.module.scss"
import { useCancel } from "./useCancel"
import { useConfirm } from "./useConfirm"

type ActionsProps = {
  order_id: number | string
  course_id: number | string
  user_id: number | string
  user_name: string
  status: boolean
}
const Actions: FC<ActionsProps> = ({ order_id, course_id, user_id, user_name, status }) => {
  const { confirm, isLoading, refetch } = useConfirm()
  const { cancel } = useCancel()

  const onConfirm = () => {
    toastr.confirm("Дать доступ", {
      onOk() {
        confirm({ user_id: user_id, course_id: course_id })
        refetch()
      },
    })
  }
  const onCancel = () => {
    toastr.confirm("Удалить заказ", {
      onOk() {
        cancel(order_id);
        refetch()
      },
    })
  }
  if (status) {
    return (
      <IconButton size="small" disabled={status} color="success">
        <CheckIcon />
      </IconButton>
    )
  }
  return (
    <div className={styles.actions}>
      <Tooltip disableHoverListener={isLoading} title="Потвердить">
        <IconButton onClick={onConfirm} disabled={isLoading} size="small" color="success">
          <CheckIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Удалить заказ">
        <IconButton onClick={onCancel} size="small" color="error">
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default Actions
