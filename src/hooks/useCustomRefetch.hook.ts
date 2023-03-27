import { QueryKey, useQueryClient } from "react-query"

export function useCustomRefetch<TData = unknown, TError = unknown>(delay?: number) {
  const queryClient = useQueryClient()

  return (queryKey: QueryKey) => {
    setTimeout(() => queryClient.refetchQueries(queryKey), delay ?? 1500)
  }
}
