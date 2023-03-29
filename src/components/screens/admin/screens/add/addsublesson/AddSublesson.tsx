import { Box, Button, TextField } from "@mui/material"
import { FC, FormEvent, useReducer } from "react"

import useAppDispatch from "../../../../../../hooks/useAppDispatch.hook"
import { useCustomRefetch } from "../../../../../../hooks/useCustomRefetch.hook"
import { ILesson } from "../../../../../../shared/types/course.types"
import { setAddDrawerOpen } from "../../../../../../store/add/add.slice"
import MySelect from "../../../../../ui/field/MySelect"
import H4 from "../../../../../ui/heading/H4"

import { useAddSublesson } from "./useAddSublesson"

type AddSublessonProps = {
  data: ILesson[]
}

interface FormState {
  lesson_id: string
  text: string
}

type FormAction = {
  [K in keyof FormState]?: FormState[K]
}
const AddSublesson: FC<AddSublessonProps> = ({ data }) => {
  const dispatch = useAppDispatch()

  const refetch = useCustomRefetch(1500)
  const [form, updateForm] = useReducer(
    (prev: FormState, next: FormAction) => {
      return { ...prev, ...next }
    },
    { lesson_id: "", text: "" }
  )
  const { mutate, isLoading } = useAddSublesson()

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await mutate({ lesson_id: form.lesson_id, name: form.text.trim() })
    refetch("Add course")
    dispatch(setAddDrawerOpen(false))
  }
  if (data.length === 0 || !data) {
    return <H4>Сначала добавте модуль</H4>
  }
  return (
    <Box pt={2}>
      <form onSubmit={onSubmit}>
        <MySelect
          value={form.lesson_id}
          onChange={(val) => updateForm({ lesson_id: val })}
          data={data.map((item) => {
            return { name: item.name, value: String(item.id) }
          })}
        />
        <TextField
          label="Урок"
          value={form.text}
          onChange={(e) => updateForm({ text: e.target.value })}
          fullWidth
          size="small"
          required
        />
        <Button type="submit" disabled={isLoading} variant="contained" size="small" fullWidth>
          Добавить
        </Button>
      </form>
    </Box>
  )
}

export default AddSublesson
