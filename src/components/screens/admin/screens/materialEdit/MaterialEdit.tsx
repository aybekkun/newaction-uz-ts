import { OutputBlockData } from "@editorjs/editorjs"
import { Button, CircularProgress, TextField } from "@mui/material"
import { FC, useEffect, useReducer } from "react"
import { useQuery } from "react-query"
import { toastr } from "react-redux-toastr"
import { useNavigate, useParams } from "react-router-dom"

import { MaterialService } from "../../../../../services/material/material.service"
import Editer from "../../../../editer/Editer"
import Empty from "../../../../ui/error/Empty"
import H4 from "../../../../ui/heading/H4"
import { useAddTestMaterial } from "../add/addmaterial/useAddTestMaterial"

import styles from "./MaterialEdit.module.scss"
import { useEditMaterial } from "./useEditMaterial"

interface FormState {
  name: string
  data: any
}

type FormAction = {
  [K in keyof FormState]?: FormState[K]
}
const MaterialEdit: FC = () => {
  const { id } = useParams()
  const { mutate, isLoading: isSending } = useEditMaterial()
  const navigate = useNavigate()
  const { data, isLoading } = useQuery(
    ["admin material", id],
    async ({ signal }) => MaterialService.getById(id, signal),
    {
      enabled: !!id,
    }
  )
  const [form, updateForm] = useReducer(
    (prev: FormState, next: FormAction) => {
      return { ...prev, ...next }
    },
    { name: "", data: [] }
  )
  useEffect(() => {
    if (data) {
      updateForm({ name: data.name, data: data.data })
    }
  }, [id, data])
  const handleLogData = (blocks: OutputBlockData) => {
    updateForm({ data: blocks })
  }
  const onSubmit = async () => {
    if (!id || !form.data || !form.name) {
      toastr.error("Ошибка", "некоторые данные не введины")
    } else {
      await mutate({ name: form.name, id: id, data: form.data })
      navigate(-1)
    }
  }
  if (isLoading) {
    return <CircularProgress />
  }
  if (!data) {
    return <Empty />
  }
  return (
    <>
      <div className={styles.top}>
        {data.name !== "Test" && (
          <div>
            <H4 mb={1}>Имя материала</H4>

            <TextField value={form.name} onChange={(e) => updateForm({ name: e.target.value })} size="small" />
          </div>
        )}
        <Button disabled={isSending} onClick={onSubmit} type="submit" size="small" variant="contained">
          Изменить
        </Button>
      </div>
      <Editer handleSaveData={handleLogData} blocks={data.data} />
    </>
  )
}

export default MaterialEdit
