import { Button } from "@mui/material"
import { ChangeEvent, FC, useReducer } from "react"
import { useQuery } from "react-query"

import useDebounce from "../../../../../hooks/useDebounce.hook"
import { usePagination } from "../../../../../hooks/usePagination.hook"
import { UserService } from "../../../../../services/user/user.service"
import MyPagination from "../../../../common/MyPagination/MyPagination"
import Empty from "../../../../ui/error/Empty"
import Error from "../../../../ui/error/Error"
import MyDateInput from "../../../../ui/field/MyDateInput"
import MyPhoneInput from "../../../../ui/field/MyPhoneInput"
import MySelect from "../../../../ui/field/MySelect"
import MyUserInput from "../../../../ui/field/MyUserInput"
import TableSkeleton from "../../../../ui/skeletons/TableSkeleton"

import styles from "./Users.module.scss"
import UsersTable from "./UsersTable"

interface FormState {
  from: string
  to: string
  name: string
  phone: string
}

type FormAction = {
  [K in keyof FormState]?: FormState[K]
}

const Users: FC = () => {
  const [form, updateForm] = useReducer(
    (prev: FormState, next: FormAction) => {
      return { ...prev, ...next }
    },
    { from: "", to: "", name: "", phone: "" }
  )
  const phone = useDebounce(form.phone, 500)
  const name = useDebounce(form.name, 500)
  const { page, handleChangePage, setPage } = usePagination()
  const { data, isLoading, isError } = useQuery(
    ["Admin users", page, form.to, form.from, name, phone],
    async ({ signal }) => UserService.getAll({ page, limit: 10, name, phone, from: form.from, to: form.to }, signal),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      enabled: !!page && !!form,
    }
  )
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    updateForm({ [e.target.name]: e.target.value })
    setPage(1)
  }
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
        {/*    <MySelect
          value={form.status}
          onChange={(val) => updateForm({ status: val })}
          data={[
            { name: "Все", value: "" },
            { name: "Купил", value: "true" },
            { name: "Заказы", value: "false" },
          ]}
        /> */}
        <MyUserInput name="name" value={form.name} onChange={onChangeValue} />
        <MyPhoneInput name="phone" value={form.phone} onChange={onChangeValue} />
        <MyDateInput label="От" value={form.from} onChange={(val) => updateForm({ from: val })} />
        <MyDateInput label="До" value={form.to} onChange={(val) => updateForm({ to: val })} />
        <Button color="info">{data.total}</Button>
        <Button color="error" onClick={() => updateForm({ from: "", to: "", name: "", phone: "" })}>
          Reset
        </Button>
      </div>
      <UsersTable data={data.data} page={page} />
      <MyPagination count={data.total} onChange={handleChangePage} page={page} />
    </>
  )
}

export default Users
