import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import CheckIcon from "@mui/icons-material/Check"
import { FC } from "react"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"
import { useNavigate } from "react-router-dom"

import useAppDispatch from "../../../../hooks/useAppDispatch.hook"
import { useAuth } from "../../../../hooks/useAuth.hooks"
import { useIsThere } from "../../../../hooks/useIsThere.hook"
import { IOrderCreate, OrderService } from "../../../../services/order/order.service"
import { SIGNUP_PAGE } from "../../../../shared/constants/route"
import { checkAuth } from "../../../../store/user/user.actions"
import MyButton from "../../../ui/MyButton/MyButton"

const Order: FC = () => {
  const dispatch = useAppDispatch()
  const { isThereCourse, isThereOrder, courseId } = useIsThere()
  const navigate = useNavigate()
  const { isAuth, user } = useAuth()
  const { mutate, isLoading } = useMutation(async (data: IOrderCreate) => OrderService.create(data), {
    onSuccess: (data) => {
      toastr.success("Order", "Succesfully created")
    },
    onError: (error) => {
      //@ts-ignore
      toastr.error("Oops, something get wrong", JSON.stringify(error.message))
    },
  })

  const onClickOrder = async () => {
    if (user && courseId) {
      mutate({ user_id: user.id, course_id: courseId })
      setTimeout(() => dispatch(checkAuth()), 1500)
    } else {
      toastr.warning("Stop!", "Avval ro'yxatdan o'ting")
      setTimeout(() => navigate(SIGNUP_PAGE), 1500)
    }
  }

  if (!isThereCourse && !isThereOrder) {
    return (
      <MyButton disabled={isLoading} onClick={onClickOrder} startIcon={<AddShoppingCartIcon />}>
        Kursga Ariza
      </MyButton>
    )
  }
  if (isThereOrder && !isThereCourse) {
    return <MyButton startIcon={<CheckIcon />}>Ariza qabul qilindi</MyButton>
  }
  return null
}

export default Order
