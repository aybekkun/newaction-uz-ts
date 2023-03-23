//@ts-nocheck
import { toastr } from "react-redux-toastr"
export const handleAxiosError = (error: unknown) => {
  if (error.response) {
    const errorData = error.response.data
    if (errorData && errorData.message === "The given data was invalid.") {
      const errors = errorData.errors
      if (errors.phone) {
        toastr.error("Failed", errors.phone[0])
      }
      if (errors.password) {
        toastr.error("Failed", errors.password[0])
      }
    } else {
      toastr.error("Failed", errorData.message)
    }
  } else {
    toastr.error("Failed", error.message)
  }
}
