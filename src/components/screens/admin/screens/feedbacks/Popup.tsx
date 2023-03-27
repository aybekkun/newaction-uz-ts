import EditIcon from "@mui/icons-material/Edit"
import { Button, IconButton, Popover } from "@mui/material"
import { Stack } from "@mui/system"
import { ChangeEvent, FC, useEffect, useState } from "react"

import styles from "./Feedbacks.module.scss"
import { useEditComment } from "./useEditComment"

type PopupProps = {
  message: string
  id: number | string
}
const Popup: FC<PopupProps> = ({ id, message }) => {
  const { updateComments, isLoading, refetch } = useEditComment()
  const [text, setText] = useState("")
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  useEffect(() => {
    setText(message)
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const onEdit = async () => {
    await updateComments({ id: id, message: text })
    refetch()
    handleClose()
  }
  return (
    <>
      <IconButton size="small" onClick={handleClick}>
        <EditIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className={styles.popup}>
          <textarea value={text} onChange={onChangeValue} className={styles.textarea} maxLength={5000}></textarea>
          <Stack direction={"row"} spacing="3">
            <Button onClick={onEdit} disabled={isLoading} size="small">
              Редактировать
            </Button>
            <Button onClick={handleClose} color="error" size="small">
              Закрыть
            </Button>
          </Stack>
        </div>
      </Popover>
    </>
  )
}

export default Popup
