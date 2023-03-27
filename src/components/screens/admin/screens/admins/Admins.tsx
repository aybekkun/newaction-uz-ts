import { FC } from "react"
import { useQuery } from "react-query"

import { useAuth } from "../../../../../hooks/useAuth.hooks"
import { UserService } from "../../../../../services/user/user.service"
import Empty from "../../../../ui/error/Empty"
import Error from "../../../../ui/error/Error"
import TableSkeleton from "../../../../ui/skeletons/TableSkeleton"

import AdminsTable from "./AdminsTable"

const Admins: FC = () => {
  const { isSuperAdmin } = useAuth()
  const { data, isLoading, isError } = useQuery("Admins", async ({ signal }) => UserService.getAdmins(signal), {
    keepPreviousData: true,
    enabled: isSuperAdmin,
    refetchOnWindowFocus: true,
  })
  if (isLoading) {
    return <TableSkeleton />
  }
  if (isError || !isSuperAdmin) {
    return <Error />
  }
  if (!data) {
    return <Empty />
  }
  return (
    <>
      <AdminsTable data={data.data} />
    </>
  )
}

export default Admins
