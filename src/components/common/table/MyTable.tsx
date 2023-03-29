
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
      <table>
        <thead>
          <tr>
            <th>№</th>
            {columns.map((column, i: number) => (
              <td key={i}>{column.title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {source.map((row: T, i: number) => (
            <tr key={i}>
              <td>{(currentPage - 1) * 10 + i + 1}</td>
              {columns.map((column: any, i) => (
                <td key={i}>
                  {column.render
                    ? column.render(row[`${column.dataIndex}` as keyof T], row)
                    : row[`${column.dataIndex}` as keyof T]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyTable
