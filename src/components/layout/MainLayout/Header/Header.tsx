import { Button } from "@mui/material"
import cn from "classnames"
import { FC } from "react"
import { Link } from "react-router-dom"

import useAppDispatch from "../../../../hooks/useAppDispatch.hook"
import { useAuth } from "../../../../hooks/useAuth.hooks"
import useToggle from "../../../../hooks/useToggle"
import { ADMIN_PAGE, CONTACT_PAGE, COURSES_PAGE, PROFILE_PAGE, SIGNIN_PAGE, SIGNUP_PAGE } from "../../../../shared/constants/route"
import { logout } from "../../../../store/user/user.actions"
import Logo from "../../../ui/Logo/Logo"
import MyButton from "../../../ui/MyButton/MyButton"
import Container from "../../../ui/container/Container"

import styles from "./Header.module.scss"
import MenuButton from "./MenuButton"

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const [open, toggle] = useToggle()
  const { isAuth, isAdmin } = useAuth()

  return (
    <header className={styles.root}>
      <Container className={styles.wrap}>
        <Logo />
        <div
          className={cn(styles.nav, {
            [styles.active]: open,
          })}
        >
          <nav>
            <Link to={"/"}>Home</Link>
            {/* 				<Link to={"/"}>About</Link> */}
            <Link to={COURSES_PAGE}>Courses</Link>
            <Link to={"/"}>Extra Courses</Link>
            <Link to={CONTACT_PAGE}>Contact</Link>
            {isAuth && <Link to={PROFILE_PAGE}>Profile</Link>}
          </nav>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                {isAdmin && <Link to={ADMIN_PAGE}>Admin</Link>}
                <Button
                  onClick={() => dispatch(logout())}
                  className={styles.login}
                  color="error"
                  sx={{
                    padding: "10px 20px ",
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to={SIGNUP_PAGE}>Sign Up</Link>
                <Link to={SIGNIN_PAGE}>
                  <MyButton
                    className={styles.login}
                    sx={{
                      padding: "10px 20px ",
                    }}
                  >
                    Log in
                  </MyButton>
                </Link>
              </>
            )}
          </div>
        </div>
        <MenuButton open={open} toggle={toggle} />
      </Container>
    </header>
  )
}

export default Header
