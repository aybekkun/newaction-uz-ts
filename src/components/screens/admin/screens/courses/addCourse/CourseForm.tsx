import { Button, TextField } from "@mui/material"
import { FC, FormEvent, useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"

import useHandleFile from "../../../../../../hooks/useHandleFile.hook"
import { ADMIN_PAGE } from "../../../../../../shared/constants/route"
import MyMoneyInput from "../../../../../ui/field/MyMoneyInput"
import H4 from "../../../../../ui/heading/H4"

import styles from "./AddCourse.module.scss"

interface FormState {
  title: string
  description: string
  price: string
}

type FormAction = {
  [K in keyof FormState]?: FormState[K]
}
type CourseFormProps = {
  titleCourse?: string
  descriptionCourse?: string
  priceCourse?: string
  onSubmitForm: (fd: FormData) => void
}
const CourseForm: FC<CourseFormProps> = ({ titleCourse, descriptionCourse, priceCourse, onSubmitForm }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const { file, handleFile, handleClearFile } = useHandleFile()
  const [form, updateForm] = useReducer(
    (prev: FormState, next: FormAction) => {
      return { ...prev, ...next }
    },
    { title: "", description: "", price: "" }
  )

  useEffect(() => {
    if (titleCourse && descriptionCourse && priceCourse) {
      updateForm({ title: titleCourse, description: descriptionCourse, price: priceCourse })
    }
  }, [titleCourse, descriptionCourse, priceCourse])
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData()
    setLoading(true)
    fd.append("title", form.title.trim())
    fd.append("description", form.description.trim())
    fd.append("price", form.price.trim())
    fd.append("image", file ?? "")
    await onSubmitForm(fd)
    updateForm({ title: "", description: "", price: "" })
    
    setLoading(false)
    navigate(ADMIN_PAGE)
    handleClearFile()
  }
  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={onSubmit}>
        <H4>Заголовок</H4>
        <TextField
          inputProps={{ maxLength: 100 }}
          helperText="Максимально 100 символов"
          value={form.title}
          onChange={(e) => updateForm({ title: e.target.value })}
          size="small"
          required
        />
        <H4>Описание</H4>
        <textarea
          value={form.description}
          onChange={(e) => updateForm({ description: e.target.value })}
          required
          maxLength={100}
        ></textarea>
        <H4>Цена</H4>
        <MyMoneyInput value={form.price} onChange={(e) => updateForm({ price: e.target.value })} required />
        <H4>Изображение</H4>
        <input onChange={handleFile} type="file" accept="image/png, image/gif, image/jpeg" required />
        <Button disabled={loading} type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default CourseForm
