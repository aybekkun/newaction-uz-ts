import { Skeleton } from "@mui/material"
import { FC } from "react"

const TableSkeleton: FC = () => {
  return (
    <>
      <Skeleton variant="rounded" sx={{ mb: 2 }} height={"25rem"} />
      <Skeleton variant="rounded" sx={{width:"40%"}} height={"2rem"} />
    </>
  )
}

export default TableSkeleton
