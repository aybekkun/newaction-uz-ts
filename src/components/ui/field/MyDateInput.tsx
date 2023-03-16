import { TextField } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { Dayjs } from "dayjs"

type MyDateInputProps = {
	label: string
	value: Dayjs | null
	onChangeValue: (val: Dayjs | null) => void
}

const MyDateInput = ({ label, value, onChangeValue }: MyDateInputProps) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				label={label}
				value={value}
				/* @ts-ignore */
				inputFormat={"DD-MM-YYYY"}
				onChange={(newValue) => onChangeValue(newValue)}
				renderInput={(params: any) => <TextField size="small" {...params} />}
			/>
		</LocalizationProvider>
	)
}

export default MyDateInput
