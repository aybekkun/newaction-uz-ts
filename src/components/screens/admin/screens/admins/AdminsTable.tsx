import { FC } from "react"

import { IAdminsData } from "../../../../../services/user/user.interface"
import { IColumns } from "../../../../../shared/types/columns.type"
import MyTable from "../../../../common/table/MyTable"
import Action from "./Action"

const columns: IColumns<IAdminsData>[] = [
  {
    title: "Пользователь",
    dataIndex: "user_name",
  },
  {
    title: "Телефон",
    dataIndex: "user_phone",
  },
  {
    title: "Дейсвие",
    render: (row, record) => <Action id={record.id} user_name={record.user_name}/>,
  },
]

type AdminsTableProps = {
  data: IAdminsData[]
}
const AdminsTable: FC<AdminsTableProps> = ({ data }) => {
  return (
    <>
      <MyTable columns={columns} source={data} currentPage={1} />
    </>
  )
}

export default AdminsTable
