import { FC } from "react"
import { Navigate, Outlet } from "react-router-dom"

import { useAuth } from "../../../hooks/useAuth.hooks"
import SEO from "../../../utils/seo/SEO"

import styles from "./AdminLayout.module.scss"
import Sidebar from "./sidebar/Sidebar"

const AdminLayout: FC = () => {
  const { isAdmin } = useAuth()
  if (!isAdmin) {
    return <Navigate to={"/"} />
  }
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
