import { FC } from "react"

import useAppDispatch from "../../../../../hooks/useAppDispatch.hook"
import useAppSelector from "../../../../../hooks/useAppSelector.hook"
import { IUserData } from "../../../../../services/user/user.interface"
import { IColumns } from "../../../../../shared/types/columns.type"
import { setOpen } from "../../../../../store/update/update.slice"
import MyTable from "../../../../common/table/MyTable"
import MyDrawer from "../../../../ui/drawer/MyDrawer"

import Actions from "./Actions"
import ResetPassword from "./ResetPassword"
import ResetUser from "./ResetUser"

const columns: IColumns<IUserData>[] = [
  {
    title: "Пользователь",
    dataIndex: "name",
  },
  {
    title: "Телефон",
    dataIndex: "phone",
    render: (row, _) => (
      <a href={`tel:${row}`} target="_blank" rel="noreferrer">
        {row}
      </a>
    ),
  },
  {
    title: "Роль",
    dataIndex: "role",
  },
  {
    title: "Курсы",
    dataIndex: "courses",
    render: (row, record) => (
      <>
        {record.courses.map((item, i) => (
          <span style={{ fontSize: 12 }} key={i}>
            {item.course_title} {i > 0 && ","}
          </span>
        ))}
      </>
    ),
  },
  {
    title: "Действия",
    render: (row, record) => <Actions id={record.id} phone={record.phone} role={record.role} user_name={record.name} />,
  },
]

type UsersTableProps = {
  page: number
  data: IUserData[]
}
const UsersTable: FC<UsersTableProps> = ({ page, data }) => {
  const dispatch = useAppDispatch()
  const { open, type } = useAppSelector((state) => state.update)
  return (
    <>
      <MyDrawer open={open} onClose={() => dispatch(setOpen(false))}>
        {type === "password" ? <ResetPassword /> : <ResetUser />}
      </MyDrawer>
      <MyTable columns={columns} source={data} currentPage={page} />
    </>
  )
}

export default UsersTable
