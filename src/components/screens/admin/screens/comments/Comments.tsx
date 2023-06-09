import { FC } from "react"
import { useQuery } from "react-query"

import { usePagination } from "../../../../../hooks/usePagination.hook"
import { CommentsService } from "../../../../../services/comments/comments.service"
import MyPagination from "../../../../common/MyPagination/MyPagination"
import Empty from "../../../../ui/error/Empty"
import Error from "../../../../ui/error/Error"
import TableSkeleton from "../../../../ui/skeletons/TableSkeleton"

import CommentsTable from "./CommentsTable"

const Comments: FC = () => {
  const { page, handleChangePage } = usePagination()
  const { data, isError, isLoading } = useQuery(
    ["Admin comments", page],
    ({ signal }) => CommentsService.getCourseComments({ page: page, limit: 10 }, signal),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      enabled: !!page,
    }
  )

  if (isLoading) {
    return <TableSkeleton />
  }
  if (isError) {
    return <Error />
  }
  if (!data || data.data.length===0) {
    return <Empty />
  }
  return (
    <>
      <CommentsTable page={page} data={data.data} />
      <MyPagination page={page} count={data.total} onChange={handleChangePage} />
    </>
  )
}

export default Comments
