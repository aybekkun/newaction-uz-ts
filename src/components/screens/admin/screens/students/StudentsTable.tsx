import { FC } from "react"

import { IStudentData } from "../../../../../services/students/students.interface"
import { IColumns } from "../../../../../shared/types/columns.type"
import MyTable from "../../../../common/table/MyTable"
import Action from "./Action"

const columns: IColumns<IStudentData>[] = [
  {
    title: "Пользователь",
    dataIndex: "user_name",
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
    title:"Действия",
    render:(row,record)=><Action user_name={record.user_name} id={record.id}/>
  }
]
type StudentsTableProps = {
  data: IStudentData[]
  page: number
}
const StudentsTable: FC<StudentsTableProps> = ({ data, page }) => {
  return (
    <>
      <MyTable currentPage={page} columns={columns} source={data} />
    </>
  )
}

export default StudentsTable
