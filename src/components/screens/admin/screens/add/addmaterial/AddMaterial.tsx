import { OutputBlockData } from "@editorjs/editorjs"
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { FC, FormEvent, useMemo, useReducer } from "react"
import { toastr } from "react-redux-toastr"

import useAppDispatch from "../../../../../../hooks/useAppDispatch.hook"
import { useCustomRefetch } from "../../../../../../hooks/useCustomRefetch.hook"
import { ILesson } from "../../../../../../shared/types/course.types"
import { setType } from "../../../../../../store/add/add.slice"
import Editer from "../../../../../editer/Editer"
import H4 from "../../../../../ui/heading/H4"

import styles from "./AddMaterial.module.scss"
import { useAddMaterial } from "./useAddMaterial"
import { useAddTestMaterial } from "./useAddTestMaterial"

type AddMaterialProps = {
  lessons: ILesson[]
}
interface FormState {
  name: string
  lesson_id: string
  sub_lesson_id: string
  type: "Material" | "Test"
  data: any
}

type FormAction = {
  [K in keyof FormState]?: FormState[K]
}
const AddMaterial: FC<AddMaterialProps> = ({ lessons }) => {
  const dispatch = useAppDispatch()
  const refetch = useCustomRefetch(1500)
  const { mutate, isLoading } = useAddMaterial()
  const { createTest } = useAddTestMaterial()
  const [form, updateForm] = useReducer(
    (prev: FormState, next: FormAction) => {
      return { ...prev, ...next }
    },
    { name: "", lesson_id: "", sub_lesson_id: "", type: "Material", data: [] }
  )

  const sublessons = useMemo(() => {
    return lessons.find((lesson) => {
      if (lesson.id === Number(form.lesson_id)) {
        return lesson.sub_lessons
      }
    })?.sub_lessons
  }, [form.lesson_id])
  const onChangeType = (e: SelectChangeEvent) => {
    if (e.target.value === "Test") {
      updateForm({ type: e.target.value, name: "Test" })
    } else if (!!e.target.value) {
      //@ts-ignore
      updateForm({ type: e.target.value, name: "" })
    }
  }
  const handleLogData = (blocks: OutputBlockData) => {
    updateForm({ data: blocks })
  }
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.sub_lesson_id || !form.data || !form.name) {
      toastr.error("Ошибка", "некоторые данные не введины")
    } else {
      await mutate({ name: form.name, sub_lesson_id: form.sub_lesson_id, data: form.data })
      if (form.type === "Test") {
        await createTest({ name: form.name, sub_lesson_id: form.sub_lesson_id, data: form.data })
      }
      await refetch("Add course")
      dispatch(setType("lesson"))
      updateForm({ name: "", lesson_id: "", sub_lesson_id: "", type: "Material", data: [] })
    }
  }
  if (lessons.length === 0 || !lessons) {
    return <H4>Сначала добавте модуль</H4>
  }
  return (
    <>
      <form onSubmit={onSubmit} className={styles.top}>
        <div>
          <H4 mb={1}>Модуль</H4>
          <Select
            size="small"
            value={form.lesson_id}
            onChange={(e) => updateForm({ lesson_id: e.target.value })}
            sx={{ width: 130 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {lessons.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <H4 mb={1}>Урок</H4>
          <Select
            size="small"
            value={form.sub_lesson_id}
            onChange={(e) => updateForm({ sub_lesson_id: e.target.value })}
            sx={{ width: 130 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {sublessons?.map((item, i) => (
              <MenuItem key={i} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <H4 mb={1}>Тип</H4>
          <Select value={form.type} onChange={onChangeType} size="small" sx={{ width: 130 }}>
            <MenuItem value="Material">Материал</MenuItem>
            <MenuItem value="Test">Тест</MenuItem>
          </Select>
        </div>
        {form.type !== "Test" && (
          <div>
            <H4 mb={1}>Имя материала</H4>
            <TextField value={form.name} onChange={(e) => updateForm({ name: e.target.value })} size="small" />
          </div>
        )}
        <Button disabled={isLoading} type="submit" size="small" variant="contained">
          Отправить
        </Button>
      </form>
      <Editer handleSaveData={handleLogData} blocks={[]} />
    </>
  )
}

export default AddMaterial
