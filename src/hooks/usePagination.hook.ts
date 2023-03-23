import { useState } from "react"

export const usePagination = () => {
  const [page, setPage] = useState(1)
  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  return { page, handleChangePage }
}
