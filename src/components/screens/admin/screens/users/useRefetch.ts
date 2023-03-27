import { useQueryClient } from "react-query"

export const useRefetch = () => {
  const queryClient = useQueryClient()
  const refetch = () => {
    setTimeout(() => {
      queryClient.refetchQueries("Admin users")
    }, 1000)
  }
  return { refetch }
}
