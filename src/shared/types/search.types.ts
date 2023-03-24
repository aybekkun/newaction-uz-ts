export interface ISearch {
  from?: string
  to?: string
  status?: boolean | string | "true" | "false"
  limit?: number
  page?: number
}
