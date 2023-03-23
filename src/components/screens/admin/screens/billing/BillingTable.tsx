import { FC } from "react"
import { useQuery } from "react-query"

import { usePagination } from "../../../../../hooks/usePagination.hook"
import { OrderService } from "../../../../../services/order/order.service"
import MyPagination from "../../../../common/MyPagination/MyPagination"

const BillingTable: FC = () => {
  const { page, handleChangePage } = usePagination()
  const { data, isLoading, isError, refetch } = useQuery(
    ["Billing", page],
    () => OrderService.getAll({ page: 1, limit: 10 }),
    { keepPreviousData: true, enabled: !page }
  )
  console.log(data?.data)

  return (
    <>
      <MyPagination count={data?.total ?? 1} page={page} onChange={handleChangePage} />
    </>
  )
}

export default BillingTable
