import { FC } from "react"
import { Outlet } from "react-router-dom"

import SEO from "../../../utils/seo/SEO"

import styles from "./AdminLayout.module.scss"
import Sidebar from "./sidebar/Sidebar"

const AdminLayout: FC = () => {
  return (
    <>
      <SEO title="Admin" />
      <div className={styles.root}>
        <Sidebar />
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AdminLayout
