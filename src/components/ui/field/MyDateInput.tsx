import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { Dayjs } from "dayjs"

type MyDateInputProps = {
  label: string
  value: Dayjs
  onChange: (val: Dayjs | null) => void
}

const MyDateInput = ({ label, value, onChange }: MyDateInputProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        sx={{
          "& .MuiInputBase-root": {
            fontSize: "0.8rem", // Adjust font size
            padding: "0 5px 0 0  ", // Adjust padding
          },
          "& .MuiPickersBasePicker-pickerView": {
            minHeight: "100px", // Adjust height
          },
          "& .MuiPickersCalendarHeader-switchHeader": {
            marginTop: "10px", // Adjust margin top
            marginBottom: "5px", // Adjust margin bottom
          },
          "& .MuiOutlinedInput-input": {
            height:"0.5em",
            // Adjust margin bottom
          },
          "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root":{
            transform: "translate(14px, 10px) scale(1)"
          }
        }}
        format={"DD-MM-YYYY"}
        onChange={(newValue) => onChange(newValue)}
      />
    </LocalizationProvider>
  )
}

export default MyDateInput
