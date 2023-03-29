import { Box, Button, TextField } from "@mui/material"
import { FC, FormEvent, useEffect, useState } from "react"

import { useAddSelector } from "../../../../../../../hooks/useAddSelector.hook"
import useAppDispatch from "../../../../../../../hooks/useAppDispatch.hook"
import { useCustomRefetch } from "../../../../../../../hooks/useCustomRefetch.hook"
import { setOpen } from "../../../../../../../store/add/add.slice"

import { useEdit } from "./useEdit"

const SublessonItemEdit: FC = () => {
  const dispatch = useAppDispatch()
  const refetch = useCustomRefetch(1500)
  const { mutate, isLoading } = useEdit()
  const { sublesson } = useAddSelector()
  const [text, setText] = useState("")
  useEffect(() => {
    if (sublesson) {
      setText(sublesson.name)
    }
  }, [sublesson])
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (sublesson) {
      await mutate({ id: sublesson?.id, name: text.trim() })
    }
    refetch("Add course")
    dispatch(setOpen(false))
  }
  return (
    <Box pt={2}>
      <form onSubmit={onSubmit}>
        <TextField value={text} onChange={(e) => setText(e.target.value)} fullWidth size="small" required/>
        <Button type="submit" disabled={isLoading} variant="contained" size="small" fullWidth>
          Редактировать
        </Button>
      </form>
    </Box>
  )
}

export default SublessonItemEdit
