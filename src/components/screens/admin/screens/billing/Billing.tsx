import { FC } from "react"


import styles from "./Billing.module.scss"
import BillingTable from "./BillingTable"

const Billing: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.search}>
      </div>
      <BillingTable/>
    </div>
  )
}

export default Billing
