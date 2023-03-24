import { FC } from "react"

import { ICourseComment } from "../../../../../services/comments/commets.interface"
import { IColumns } from "../../../../../shared/types/columns.type"
import MyTable from "../../../../common/table/MyTable"

import Actions from "./Actions"

type CommentsTableProps = {
  data: ICourseComment[]
  page: number
}
const columns: IColumns<ICourseComment>[] = [
  {
    title: "Пользователь",
    dataIndex: "user_name",
  },
  {
    title: "Курс",
    dataIndex: "course_title",
  },
  {
    title: "Сообщение",
    dataIndex: "message",
  },
  {
    title: "Рейтинг",
    dataIndex: "rating",
  },
  {
    title: "Действия",
    render: (row, record) => <Actions id={record.id} message={record.message} />,
  },
]
const CommentsTable: FC<CommentsTableProps> = ({ data, page }) => {
  return (
    <>
      <MyTable source={data} columns={columns} currentPage={page} />
    </>
  )
}

export default CommentsTable
