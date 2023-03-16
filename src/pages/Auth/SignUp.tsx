import { FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import MyButton from "../../components/ui/MyButton/MyButton"
import MyPasswordInput from "../../components/ui/field/MyPasswordInput"
import MyPhoneInput from "../../components/ui/field/MyPhoneInput"
import MyUserInput from "../../components/ui/field/MyUserInput"

import useAppDispatch from "../../hooks/useAppDispatch.hook"
import { useAuth } from "../../hooks/useAuth.hooks"

import { ISignInput } from "../../shared/types/auth.types"

import { register } from "../../store/user/user.actions"

import {
	nameValidation,
	passwordValidation,
	phoneValidation,
} from "../../utils/validation/validation"

import styles from "./Auth.module.scss"
import { useAuthRedirect } from "./useAuthRedirect"

const SignUp: FC = () => {
	useAuthRedirect()
	const dispatch = useAppDispatch()
	const { isLoading } = useAuth()
	const {
		handleSubmit,
		control,
		formState: { errors, isValid },
		reset,
	} = useForm<ISignInput>({
		mode: "onChange",
	})

	const onSubmit: SubmitHandler<ISignInput> = async (data) => {
		await dispatch(register({ ...data }))
		reset()
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<h3>REGISTRATSIYA</h3>
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

export default SignUp
