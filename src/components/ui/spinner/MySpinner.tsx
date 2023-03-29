import { LinearProgress } from "@mui/material"
import { FC } from "react"

import styles from "./MySpinner.module.scss"

const MySpinner: FC = () => {
  return (
    <div className={styles.spinner}>
      <LinearProgress />
    </div>
  )
}

export default MySpinner
