import cn from "classnames"
import { FC } from "react"
import { NavLink, Outlet } from "react-router-dom"

import { SIGNIN_PAGE, SIGNUP_PAGE } from "../../../../shared/constants/route"
import Logo from "../../../ui/Logo/Logo"
import styles from "../AuthLayout.module.scss"

const Sidebar: FC = () => {
  return (
    <div className={styles.right}>
      <Logo className={styles.logo} />
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            cn(styles.link, {
              [styles.active]: isActive,
            })
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(styles.link, {
              [styles.active]: isActive,
            })
          }
          to={SIGNIN_PAGE}
        >
          Kirish
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(styles.link, {
              [styles.active]: isActive,
            })
          }
          to={SIGNUP_PAGE}
        >
          Registratsiya
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(styles.link, {
              [styles.active]: isActive,
            })
          }
          to={"/auth/offline"}
        >
          Offline o'qish
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Sidebar
