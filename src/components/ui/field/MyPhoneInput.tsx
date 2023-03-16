import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import { InputAdornment } from "@mui/material"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import React from "react"
import { IMaskInput } from "react-imask"
import { ReactElement } from "react-imask/dist/mixin"

interface CustomProps {
	onChange: (event: { target: { name: string; value: string } }) => void
	name: string
}
export const PhoneMaskCustom = React.forwardRef<ReactElement, CustomProps>(
	function PhoneMaskCustom(props, ref) {
		const { onChange, ...other } = props
		return (
			<IMaskInput
				{...other}
				mask={"{+}{998} 00 000 00 00"}
				unmask={true}
				definitions={{
					"#": /[0-9]/,
				}}
				inputRef={ref}
				onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
				overwrite
			/>
		)
	}
)

const MyPhoneInput = (props: TextFieldProps) => {
	return (
		<>
			<TextField
				variant="standard"
				placeholder="Telefon raqam"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<LocalPhoneIcon />
						</InputAdornment>
					),
					inputComponent: PhoneMaskCustom as any,
				}}
				size="small"
				{...props}
			/>
		</>
	)
}

// const MyPhoneInput = React.forwardRef<TextFieldProps, any>((props, ref) => {
// 	return (
// 		<>
// 			<TextField
// 				variant="standard"
// 				placeholder="Telefon raqam"
// 				InputProps={{
// 					startAdornment: (
// 						<InputAdornment position="start">
// 							<LocalPhoneIcon />
// 						</InputAdornment>
// 					),
// 					inputComponent: PhoneMaskCustom as any,
// 				}}
// 				inputRef={ref}
// 				size="small"
// 				{...props}
// 			/>
// 		</>
// 	)
// })

export default MyPhoneInput
