import PersonIcon from "@mui/icons-material/Person"
import { InputAdornment, TextField, TextFieldProps } from "@mui/material"

const MyUserInput = (props: TextFieldProps) => {
	return (
		<>
			<TextField
				variant="standard"
				placeholder="Ism, Familya"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<PersonIcon />
						</InputAdornment>
					),
				}}
				size="small"
				{...props}
			/>
		</>
	)
}

export default MyUserInput
