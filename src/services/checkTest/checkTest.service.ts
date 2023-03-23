import { $authHost } from "../../api/interceptors"

import { ITestCheck } from "./checkTest.interface"

export const TestCheckService = {
 async create(data: ITestCheck) {
  const response = await $authHost.post(`/questions`, data)
  return response
 },
}
