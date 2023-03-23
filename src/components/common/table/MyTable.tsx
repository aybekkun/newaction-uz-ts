import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

import { IColumns } from "../../../shared/types/columns.type"

import styles from "./MyTable.module.scss"

type MyTableProps<T> = {
  columns: IColumns<T>[]
  source: T[]
  currentPage?: number
  loading?: boolean
}
const MyTable = <T extends {}>({ source, columns, currentPage = 1, loading = false }: MyTableProps<T>) => {
  return (
    <div className={styles.root}>
      <Table>
        <Thead>
          <Tr>
            <Th>№</Th>
            {columns.map((column, i: number) => (
              <Th key={i}>{column.title}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {source.map((row: T, i: number) => (
            <Tr key={i}>
              <Td>{(currentPage - 1) * 10 + i + 1}</Td>
              {columns.map((column: any, i) => (
                <Td key={i}>
                  {column.render
                    ? column.render(row[`${column.dataIndex}` as keyof T], row)
                    : row[`${column.dataIndex}` as keyof T]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}

export default MyTable
