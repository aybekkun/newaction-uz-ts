import { FC } from "react"

import { IOrderData } from "../../../../../services/order/order.interface"
import { IColumns } from "../../../../../shared/types/columns.type"
import { localeDate } from "../../../../../utils/string/localeDate"
import MyTable from "../../../../common/table/MyTable"

import Actions from "./Actions"
import Status from "./Status"

const columns: IColumns<IOrderData>[] = [
  {
    title: "Пользователь",
    dataIndex: "user_name",
  },
  {
    title: "Статус",
    dataIndex: "status",

    render: (row, record) => <Status status={record.status} />,
  },
  {
    title: "Телефон",
    dataIndex: "user_phone",

    render: (row, _) => (
      <a href={`tel:${row}`} target="_blank" rel="noreferrer">
        {row}
      </a>
    ),
  },
  {
    title: "Курс",
    dataIndex: "course_title",
  },
  {
    title: "Цена",
    dataIndex: "course_price",

    render: (row, _) => <>{row.toLocaleString()}</>,
  },
  {
    title: "Заказал",
    dataIndex: "created_at",

    render: (row, _) => <>{localeDate(row)}</>,
  },
  {
    title: "Действия",
    // dataIndex: "created_at",
    render: (row, record) => (
      <Actions
        order_id={record.id}
        course_id={record.course_id}
        status={record.status}
        user_id={record.user_id}
        user_name={record.user_name}
      />
    ),
  },
]

type BillingTableProps = {
  data: IOrderData[]
  page: number
}
const BillingTable: FC<BillingTableProps> = ({ data, page }) => {
  return (
    <>
      <MyTable source={data} columns={columns} currentPage={page} />
    </>
  )
}

export default BillingTable
