import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import GroupsIcon from "@mui/icons-material/Groups"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"
import cn from "classnames"
import { FC } from "react"
import { NavLink, useLocation } from "react-router-dom"

import { useAuth } from "../../../../hooks/useAuth.hooks"
import {
  ADMINS_PAGE,
  ADMIN_PAGE,
  BILLING_PAGE,
  COMMENTS_PAGE,
  FEEDBACK_PAGE,
  STUDENTS_PAGE,
  USERS_PAGE,
} from "../../../../shared/constants/route"
import Logo from "../../../ui/Logo/Logo"

import styles from "./Sidebar.module.scss"

const Sidebar: FC = () => {
  const { pathname } = useLocation()
  const { isSuperAdmin } = useAuth()
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Logo />
      </div>
      <div className={styles.center}>
        <span className={styles.title}>Главная</span>
        <NavLink
          to={ADMIN_PAGE}
          className={({ isActive }) => cn(styles.link, { [styles.active]: isActive && pathname === ADMIN_PAGE })}
        >
          <HomeOutlinedIcon />
          Курсы
        </NavLink>
        {isSuperAdmin && (
          <NavLink to={ADMINS_PAGE} className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
            <AdminPanelSettingsOutlinedIcon />
            Админы
          </NavLink>
        )}

        <span className={styles.title}>Группа</span>
        <NavLink to={USERS_PAGE} className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
          <GroupsIcon />
          Люди
        </NavLink>
        <NavLink to={STUDENTS_PAGE} className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
          <SchoolOutlinedIcon />
          Студенты
        </NavLink>
        <span className={styles.title}>Связь</span>
        <NavLink to={BILLING_PAGE} className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
          <AddShoppingCartOutlinedIcon />
          Заказы
        </NavLink>
        <NavLink to={COMMENTS_PAGE} className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
          <ChatBubbleOutlineOutlinedIcon />
          Комментарий
        </NavLink>
        <NavLink to={FEEDBACK_PAGE} className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
          <ChatBubbleOutlineOutlinedIcon />
          Комм. материалов
        </NavLink>
        {/*    <span className={styles.title}>Настройки</span>
        <NavLink to={SETTINGS_PAGE} className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
          <TuneIcon />
          Настройки
        </NavLink> */}
      </div>
    </div>
  )
}

export default Sidebar
