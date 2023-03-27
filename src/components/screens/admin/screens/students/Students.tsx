import { Button } from "@mui/material"
import { FC, useReducer } from "react"
import { useQuery } from "react-query"

import { usePagination } from "../../../../../hooks/usePagination.hook"
import { StudentsService } from "../../../../../services/students/students.service"
import MyPagination from "../../../../common/MyPagination/MyPagination"
import Empty from "../../../../ui/error/Empty"
import Error from "../../../../ui/error/Error"
import MyDateInput from "../../../../ui/field/MyDateInput"
import TableSkeleton from "../../../../ui/skeletons/TableSkeleton"

import styles from "./Students.module.scss"
import StudentsTable from "./StudentsTable"

interface FormState {
  from: string
  to: string
}

type FormAction = {
  [K in keyof FormState]?: FormState[K]
}
const Students: FC = () => {
  const [form, updateForm] = useReducer(
    (prev: FormState, next: FormAction) => {
      return { ...prev, ...next }
    },
    { from: "", to: "" }
  )
  const { page, handleChangePage } = usePagination()
  const { data, isLoading, isError } = useQuery(
    ["Admin stundents", page, form.to, form.from],
    async ({ signal }) => StudentsService.getAll({ page, limit: 10, ...form }, signal),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      enabled: !!page && !!form,
    }
  )

  if (isLoading) {
    return <TableSkeleton />
  }
  if (isError) {
    return <Error />
  }
  if (!data) {
    return <Empty />
  }

  return (
    <>
      <div className={styles.search}>
        <MyDateInput value={form.from} label="От" onChange={(val) => updateForm({ from: val })} />
        <MyDateInput value={form.to} label="До" onChange={(val) => updateForm({ to: val })} />
        <Button color="info">{data.total}</Button>
        <Button color="error" onClick={() => updateForm({ from: "", to: "" })}>
          Reset
        </Button>
      </div>
      <StudentsTable data={data.data} page={page} />
      <MyPagination count={data.total} onChange={handleChangePage} page={page} />
    </>
  )
}

export default Students
