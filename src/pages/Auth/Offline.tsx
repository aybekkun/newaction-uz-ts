import { MenuItem, Select } from "@mui/material"
import { FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import MyButton from "../../components/ui/MyButton/MyButton"
import MyPhoneInput from "../../components/ui/field/MyPhoneInput"
import MyUserInput from "../../components/ui/field/MyUserInput"
import useAppDispatch from "../../hooks/useAppDispatch.hook"
import { useAuth } from "../../hooks/useAuth.hooks"
import { ISignInput } from "../../shared/types/auth.types"
import { nameValidation, phoneValidation } from "../../utils/validation/validation"

import styles from "./Auth.module.scss"

type FormType = {
  name: string
  phone: string
  kurs: string
}

const Offline: FC = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAuth()
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm<FormType>({
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h3>Offline o'qish</h3>
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
        name="kurs"
        control={control}
        defaultValue=""
    
        render={({ field }) => (
          <Select value={field.value} label="Kurs" onChange={field.onChange} size="small" variant="standard">
            <MenuItem value={10}>English A1</MenuItem>
            <MenuItem value={10}>English A2</MenuItem>
            <MenuItem value={10}>English B1</MenuItem>
          </Select>
        )}
      />
      <MyButton disabled={!isValid || isLoading} type="submit" sx={{ borderRadius: "100px" }}>
        Kirish
      </MyButton>
    </form>
  )
}

export default Offline
