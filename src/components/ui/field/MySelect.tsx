import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { FC, useState } from "react"

type MySelectProps = {
  data: {
    name: string
    value: string
  }[]
}
const MySelect: FC<MySelectProps> = ({ data = [] }) => {
  const [select, setSelect] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value)
  }

  return (
    <Select sx={{ width: 200 }} variant="outlined" size="small">
      {data.map((item) => (
        <MenuItem value={item.value}>{item.name}</MenuItem>
      ))}
    </Select>
  )
}

export default MySelect
