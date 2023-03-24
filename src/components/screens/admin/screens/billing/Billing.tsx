import { Button } from "@mui/material"
import { FC, useReducer } from "react"
import { useQuery } from "react-query"

import { usePagination } from "../../../../../hooks/usePagination.hook"
import { useSkeleton } from "../../../../../hooks/useSkeleton"
import { OrderService } from "../../../../../services/order/order.service"
import MyPagination from "../../../../common/MyPagination/MyPagination"
import Empty from "../../../../ui/error/Empty"
import Error from "../../../../ui/error/Error"
import MyDateInput from "../../../../ui/field/MyDateInput"
import MySelect from "../../../../ui/field/MySelect"
import TableSkeleton from "../../../../ui/skeletons/TableSkeleton"

import styles from "./Billing.module.scss"
import BillingTable from "./BillingTable"

interface FormState {
  from: string
  to: string
  status: string
}

type FormAction = {
  [K in keyof FormState]?: FormState[K]
}
const Billing: FC = () => {
  const [form, updateForm] = useReducer(
    (prev: FormState, next: FormAction) => {
      return { ...prev, ...next }
    },
    { from: "", to: "", status: "" }
  )
  const { page, handleChangePage } = usePagination()
  const { data, isLoading, isError } = useQuery(
    ["Billing", page, form.to, form.from, form.status],
    () => OrderService.getAll({ page: page, limit: 10, ...form }),
    { keepPreviousData: true, enabled: !!page && !!form, refetchOnWindowFocus: true }
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
    <div className={styles.root}>
      <div className={styles.search}>
        <MySelect
          value={form.status}
          onChange={(val) => updateForm({ status: val })}
          data={[
            { name: "Все", value: "" },
            { name: "Купил", value: "true" },
            { name: "Заказы", value: "false" },
          ]}
        />
        <MyDateInput label="От" value={form.from} onChange={(val) => updateForm({ from: val })} />
        <MyDateInput label="До" value={form.to} onChange={(val) => updateForm({ to: val })} />
        <Button color="info">{data.total}</Button>
        <Button color="error" onClick={() => updateForm({ from: "", to: "", status: "" })}>
          Reset
        </Button>
      </div>
      <BillingTable data={data.data} page={page} />
      <MyPagination count={data?.total ?? 1} page={page} onChange={handleChangePage} />
    </div>
  )
}

export default Billing
