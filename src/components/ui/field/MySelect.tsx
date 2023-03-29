import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { FC } from "react"

type MySelectProps = {
  data: {
    name: string
    value: string
  }[]
  value: string
  onChange: (event: string) => void
} 
const MySelect: FC<MySelectProps> = ({ data = [], value, onChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value)
  }
  return (
    <Select
 
      sx={{ width: 200 }}
      defaultValue=""
      value={value}
      onChange={handleChange}
      variant="outlined"
      size="small"
    >
      {data.map((item) => (
        <MenuItem key={item.name} value={item.value}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default MySelect
