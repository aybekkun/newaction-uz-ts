import { $authHost } from "../../api/interceptors"

import { ISearch } from "./../../shared/types/search.types"
import { IOrderResponse } from "./order.interface"

export interface IOrderCreate {
  course_id: string | number
  user_id: string | number
}

export const OrderService = {
  async getAll(searchTerm: ISearch) {
    const { data } = await $authHost.get<IOrderResponse>(`/orders`, {
      params: searchTerm ? searchTerm : {},
    })
    return data
  },
  async create(data: IOrderCreate) {
    const response = await $authHost.post(`/orders`, data)
    return response.data
  },
}
