import { FC } from "react"

import { IMaterialsComment } from "../../../../../services/comments/commets.interface"
import { IColumns } from "../../../../../shared/types/columns.type"
import MyTable from "../../../../common/table/MyTable"

import Actions from "./Actions"

type FeedbacksTableProps = {
  data: IMaterialsComment[]
  page: number
}
const columns: IColumns<IMaterialsComment>[] = [
  {
    title: "Пользователь",
    dataIndex: "user_name",
  },
  {
    title: "Курс",
    dataIndex: "course_title",
  },
  {
    title: "Материал",
    dataIndex: "sub_lesson_2_name",
  },
  {
    title: "Сообщение",
    dataIndex: "message",
  },

  {
    title: "Действия",
    render: (row, record) => <Actions id={record.id} message={record.message} />,
  },
]
const FeedbacksTable: FC<FeedbacksTableProps> = ({ data, page }) => {
  return (
    <>
      <MyTable source={data} columns={columns} currentPage={page} />
    </>
  )
}

export default FeedbacksTable
