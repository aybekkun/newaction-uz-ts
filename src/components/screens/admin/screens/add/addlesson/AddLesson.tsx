import { Box, Button, TextField } from "@mui/material"
import { FC, FormEvent, useState } from "react"
import { useParams } from "react-router-dom"

import useAppDispatch from "../../../../../../hooks/useAppDispatch.hook"
import { useCustomRefetch } from "../../../../../../hooks/useCustomRefetch.hook"
import { setAddDrawerOpen } from "../../../../../../store/add/add.slice"

import { useAddLesson } from "./useAddLesson"

const AddLesson: FC = () => {
  const dispatch = useAppDispatch()
  const [text, setText] = useState("")
  const { id } = useParams()
  const refetch = useCustomRefetch(1500)
  const { mutate, isLoading } = useAddLesson()
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (id) {
      await mutate({ course_id: id, name: text.trim() })
    }
    refetch("Add course")
    dispatch(setAddDrawerOpen(false))
  }
  return (
    <Box pt={2}>
      <form onSubmit={onSubmit}>
        <TextField label="Модуль" value={text} onChange={(e) => setText(e.target.value)} fullWidth size="small" required/>
        <Button type="submit" disabled={isLoading} variant="contained" size="small" fullWidth>
          Добавить
        </Button>
      </form>
    </Box>
  )
}

export default AddLesson
