import { Box, Button, TextField } from "@mui/material"
import { FC, FormEvent, useEffect, useState } from "react"

import { useAddSelector } from "../../../../../../../hooks/useAddSelector.hook"
import useAppDispatch from "../../../../../../../hooks/useAppDispatch.hook"
import { useCustomRefetch } from "../../../../../../../hooks/useCustomRefetch.hook"
import { setOpen } from "../../../../../../../store/add/add.slice"

import { useEdit } from "./useEdit"

const LessonItemEdit: FC = () => {
  const dispatch = useAppDispatch()
  const { mutate, isLoading } = useEdit()
  const refetch = useCustomRefetch(1500)
  const { lesson } = useAddSelector()
  const [text, setText] = useState("")
  useEffect(() => {
    if (lesson) {
      setText(lesson.name)
    }
  }, [lesson])


  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (lesson) {
      await mutate({ id: lesson?.id, name: text.trim() })
    }
    refetch("Add course")
    dispatch(setOpen(false))
  }
  return (
    <Box pt={2}>
      <form onSubmit={onSubmit}>
        <TextField
          label={"Имя модулья"}
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          size="small"
          required
        />
        <Button type="submit" disabled={isLoading} variant="contained" size="small" fullWidth>
          Редактировать
        </Button>
      </form>
    </Box>
  )
}

export default LessonItemEdit
