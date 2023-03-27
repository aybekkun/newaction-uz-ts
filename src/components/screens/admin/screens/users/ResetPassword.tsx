import { AxiosError } from "axios"
import { FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import useAppDispatch from "../../../../../hooks/useAppDispatch.hook"
import useAppSelector from "../../../../../hooks/useAppSelector.hook"
import { IUserUpdatePassword } from "../../../../../services/user/user.interface"
import { UserService } from "../../../../../services/user/user.service"
import { setOpen } from "../../../../../store/update/update.slice"
import { passwordValidation } from "../../../../../utils/validation/validation"
import MyButton from "../../../../ui/MyButton/MyButton"
import MyPasswordInput from "../../../../ui/field/MyPasswordInput"

import styles from "./Users.module.scss"
import { useRefetch } from "./useRefetch"

type FormType = {
  password: string
}
const ResetPassword: FC = () => {
  const dispatch = useAppDispatch()
  const { userUpdate } = useAppSelector((state) => state.update)
  const { refetch } = useRefetch()
  const { mutate, isLoading } = useMutation(async (data: IUserUpdatePassword) => UserService.updatePassword(data), {
    onSuccess() {
      toastr.success("Паспорт", "изменен")
    },
    onError: (error: AxiosError) => {
      toastr.error("Oops, something get wrong", String(error.message))
    },
  })
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm<FormType>({
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    await mutate({ password: data.password, id: userUpdate.id })
    reset()
    dispatch(setOpen(false))
    refetch()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <MyPasswordInput
              fullWidth
              onChange={field.onChange}
              value={field.value}
              error={!!errors.password?.message}
              helperText={errors?.password?.message}
            />
          )}
          rules={passwordValidation}
        />
        <MyButton disabled={!isValid || isLoading} type="submit" sx={{ borderRadius: "100px" }}>
          Reset Password
        </MyButton>
      </form>
    </>
  )
}

export default ResetPassword
