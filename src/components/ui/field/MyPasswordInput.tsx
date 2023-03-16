import LockIcon from "@mui/icons-material/Lock"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import {
	IconButton,
	InputAdornment,
	TextField,
	TextFieldProps,
} from "@mui/material"
import { useState } from "react"

const MyPasswordInput = (props: TextFieldProps) => {
	const [showPassword, setShowPassword] = useState(false)
	const handleClickShowPassword = () => setShowPassword((show) => !show)

	return (
		<TextField
			type={showPassword ? "text" : "password"}
			variant="standard"
			placeholder="Password"
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<LockIcon />
					</InputAdornment>
				),
				endAdornment: (
					<InputAdornment position="end">
						<IconButton onClick={handleClickShowPassword}>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			}}
			size="small"
			{...props}
		/>
	)
}

export default MyPasswordInput
