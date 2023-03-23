import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AdminLayout from "../components/layout/AdminLayout/AdminLayout"
import AuthLayout from "../components/layout/AuthLayout/AuthLayout"
import MainLayout from "../components/layout/MainLayout/MainLayout"
import Admin from "../components/screens/admin/Admin"
import Add from "../components/screens/admin/screens/add/Add"
import Admins from "../components/screens/admin/screens/admins/Admins"
import Billing from "../components/screens/admin/screens/billing/Billing"
import Comments from "../components/screens/admin/screens/comments/Comments"
import Edit from "../components/screens/admin/screens/edit/Edit"
import Settings from "../components/screens/admin/screens/settings/Settings"
import Students from "../components/screens/admin/screens/students/Students"
import Users from "../components/screens/admin/screens/users/Users"
import Material from "../components/screens/course/material/Material"
import useAppDispatch from "../hooks/useAppDispatch.hook"
import Error404 from "../pages/404/404"
import SignIn from "../pages/Auth/SignIn"
import SignUp from "../pages/Auth/SignUp"
import ContactPage from "../pages/Contact/ContactPage"
import CoursePage from "../pages/Course/CoursePage"
import CoursesPage from "../pages/Courses/CoursesPage"
import HomePage from "../pages/Home/HomPage"
import ProfilePage from "../pages/Profile/ProfilePage"
import {
  ADD_PAGE,
  ADMINS_PAGE,
  ADMIN_PAGE,
  AUTH_PAGE,
  BILLING_PAGE,
  COMMENTS_PAGE,
  CONTACT_PAGE,
  COURSES_PAGE,
  COURSE_PAGE,
  EDIT_PAGE,
  MAIN_PAGE,
  PROFILE_PAGE,
  SETTINGS_PAGE,
  SIGNIN_PAGE,
  SIGNUP_PAGE,
  STUDENTS_PAGE,
  USERS_PAGE,
} from "../shared/constants/route"
import { checkAuth } from "../store/user/user.actions"

interface IRoutes {
  path: string
  element: JSX.Element
  children?: IRoutes[]
}

const routes: IRoutes[] = [
  {
    path: MAIN_PAGE,
    element: <HomePage />,
  },
  {
    path: COURSES_PAGE,
    element: <CoursesPage />,
  },
  {
    path: COURSE_PAGE + "/:courseId",
    element: <CoursePage />,
    children: [
      {
        path: ":materialId",
        element: <Material />,
      },
    ],
  },
  {
    path: CONTACT_PAGE,
    element: <ContactPage />,
  },
  {
    path: PROFILE_PAGE,
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]

const authRoutes: IRoutes[] = [
  {
    path: SIGNUP_PAGE,
    element: <SignUp />,
  },
  {
    path: SIGNIN_PAGE,
    element: <SignIn />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]

const adminRoutes: IRoutes[] = [
  {
    path: ADMIN_PAGE,
    element: <Admin />,
    children: [
      {
        path: ADD_PAGE,
        element: <Add />,
      },
      {
        path: EDIT_PAGE,
        element: <Edit />,
      },
    ],
  },
  {
    path: BILLING_PAGE,
    element: <Billing />,
  },
  {
    path: COMMENTS_PAGE,
    element: <Comments />,
  },
  {
    path: STUDENTS_PAGE,
    element: <Students />,
  },
  {
    path: ADMINS_PAGE,
    element: <Admins />,
  },
  {
    path: SETTINGS_PAGE,
    element: <Settings />,
  },
  {
    path: USERS_PAGE,
    element: <Users />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]

const Routing = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={MAIN_PAGE} element={<MainLayout />}>
            {routes.map((route, i) => (
              <Route key={i} path={route.path} element={route.element}>
                {route.children?.map((child, i) => (
                  <Route key={i} path={child.path} element={child.element} />
                ))}
              </Route>
            ))}
          </Route>
          <Route path={AUTH_PAGE} element={<AuthLayout />}>
            {authRoutes.map((route, i) => (
              <Route key={i} path={route.path} element={route.element}>
                {route.children?.map((child, i) => (
                  <Route key={i} path={child.path} element={child.element} />
                ))}
              </Route>
            ))}
          </Route>
          <Route path={ADMIN_PAGE} element={<AdminLayout />}>
            {adminRoutes.map((route, i) => (
              <Route key={i} path={route.path} element={route.element}>
                {route.children?.map((child, i) => (
                  <Route key={i} path={child.path} element={child.element} />
                ))}
              </Route>
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
