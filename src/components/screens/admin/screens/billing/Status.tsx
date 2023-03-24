import cn from "classnames"
import { FC } from "react"

import styles from "./Billing.module.scss"

type StatusProps = {
  status: boolean
}
const Status: FC<StatusProps> = ({ status }) => {
  return <div className={cn(styles.status, { [styles.bought]: status })}>{!status ? "Ожидания" : "Купил"}</div>
}

export default Status
