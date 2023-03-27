import { AxiosError } from "axios"
import { FC, useEffect } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"

import useAppDispatch from "../../../../../hooks/useAppDispatch.hook"
import useAppSelector from "../../../../../hooks/useAppSelector.hook"
import { IUserUpdate } from "../../../../../services/user/user.interface"
import { UserService } from "../../../../../services/user/user.service"
import { ISignInput } from "../../../../../shared/types/auth.types"
import { setOpen } from "../../../../../store/update/update.slice"
import { nameValidation, passwordValidation, phoneValidation } from "../../../../../utils/validation/validation"
import MyButton from "../../../../ui/MyButton/MyButton"
import MyPasswordInput from "../../../../ui/field/MyPasswordInput"
import MyPhoneInput from "../../../../ui/field/MyPhoneInput"
import MyUserInput from "../../../../ui/field/MyUserInput"

import styles from "./Users.module.scss"
import { useRefetch } from "./useRefetch"

const ResetUser: FC = () => {
  const dispatch = useAppDispatch()
  const { refetch } = useRefetch()
  const { userUpdate } = useAppSelector((state) => state.update)
  const { mutate, isLoading } = useMutation(async (data: IUserUpdate) => UserService.update(data), {
    onSuccess() {
      toastr.success("Пользователь", "изменен")
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
    setValue,
  } = useForm<ISignInput>({
    mode: "onChange",
  })
  useEffect(() => {
    setValue("name", userUpdate.user_name)
    setValue("phone", userUpdate.phone)
  }, [])

  const onSubmit: SubmitHandler<ISignInput> = async (data) => {
    await mutate({ id: userUpdate.id, ...data })
    reset()
    dispatch(setOpen(false))
    refetch()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <MyUserInput
            onChange={field.onChange}
            value={field.value}
            error={!!errors.name?.message}
            helperText={errors?.name?.message}
          />
        )}
        rules={nameValidation}
      />
      <Controller
        name="phone"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <MyPhoneInput
            onChange={field.onChange}
            value={field.value}
            error={!!errors.phone?.message}
            helperText={errors?.phone?.message}
          />
        )}
        rules={phoneValidation}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <MyPasswordInput
            onChange={field.onChange}
            value={field.value}
            error={!!errors.password?.message}
            helperText={errors?.password?.message}
          />
        )}
        rules={passwordValidation}
      />
      <MyButton disabled={!isValid || isLoading} type="submit" sx={{ borderRadius: "100px" }}>
        reset
      </MyButton>
    </form>
  )
}

export default ResetUser
