import Empty from "../components/ui/error/Empty"
import Error from "../components/ui/error/Error"
import TableSkeleton from "../components/ui/skeletons/TableSkeleton"

type useSkeletonProps = {
  isLoading: boolean
  isError: boolean
  data: any
}
export const useSkeleton = ({ isLoading, isError, data }: useSkeletonProps) => {
  if (isLoading) {
    return <TableSkeleton />
  }
  if (isError) {
    return <Error />
  }
  if (!data) {
    return <Empty />
  }
}
