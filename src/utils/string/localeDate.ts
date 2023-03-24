import dayjs, { Dayjs } from "dayjs"

export const localeDate = (row: Dayjs | Date | string) => {
  return dayjs(row).format("DD-MM-YYYY HH:mm")
}
