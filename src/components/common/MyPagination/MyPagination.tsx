import { Pagination } from "@mui/material"
import { FC } from "react"

type MyPaginationProps = {
  count: number
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void
  page: number
}
const MyPagination: FC<MyPaginationProps> = ({ count, onChange, page }) => {
  return (
    <>
      <Pagination defaultPage={1} count={Math.ceil(count / 10)} onChange={onChange} page={page} />
    </>
  )
}

export default MyPagination
