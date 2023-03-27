import CloseIcon from "@mui/icons-material/Close"
import { Divider, Drawer, IconButton } from "@mui/material"
import { FC } from "react"

import styles from "./MyDrawer.module.scss"

type MyDrawerProps = {
  children?: React.ReactNode
  open: boolean
  onClose: () => void
}
const MyDrawer: FC<MyDrawerProps> = ({ children, open, onClose }) => {
  return (
    <Drawer open={open} sx={{ zIndex: 100 }} anchor="right" onClose={onClose}>
      <div className={styles.root}>
        <div className={styles.top}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        {children}
      </div>
    </Drawer>
  )
}

export default MyDrawer
