import { FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import MyButton from "../../components/ui/MyButton/MyButton"
import MyPasswordInput from "../../components/ui/field/MyPasswordInput"
import MyPhoneInput from "../../components/ui/field/MyPhoneInput"

import useAppDispatch from "../../hooks/useAppDispatch.hook"
import { useAuth } from "../../hooks/useAuth.hooks"

import { IAuthInput } from "../../shared/types/auth.types"

import { login } from "../../store/user/user.actions"

import {
	passwordValidation,
	phoneValidation,
} from "../../utils/validation/validation"

import styles from "./Auth.module.scss"
import { useAuthRedirect } from "./useAuthRedirect"

const SignIn: FC = () => {
	useAuthRedirect()
	const dispatch = useAppDispatch()
	const { isLoading } = useAuth()
	const {
		handleSubmit,
		control,
		formState: { errors, isValid },
		reset,
	} = useForm<IAuthInput>({
		mode: "onChange",
	})

	const onSubmit: SubmitHandler<IAuthInput> = async (data) => {
		await dispatch(login({ phone: data.phone, password: data.password}))
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<h3>KIRISH</h3>
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
			<MyButton
				disabled={!isValid || isLoading}
				type="submit"
				sx={{ borderRadius: "100px" }}
			>
				Kirish
			</MyButton>
		</form>
	)
}

export default SignIn
