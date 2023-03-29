import { Suspense, lazy, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import MySpinner from "../components/ui/spinner/MySpinner"
import useAppDispatch from "../hooks/useAppDispatch.hook"
import { useAuth } from "../hooks/useAuth.hooks"
// import AdminLayout from "../components/layout/AdminLayout/AdminLayout"
// import AuthLayout from "../components/layout/AuthLayout/AuthLayout"
import MainLayout from "../components/layout/MainLayout/MainLayout"
// import Admin from "../components/screens/admin/Admin"
// import Add from "../components/screens/admin/screens/add/Add"
// import Admins from "../components/screens/admin/screens/admins/Admins"
// import Billing from "../components/screens/admin/screens/billing/Billing"
// import Comments from "../components/screens/admin/screens/comments/Comments"
// import AddCourse from "../components/screens/admin/screens/courses/addCourse/AddCourse"
// import Edit from "../components/screens/admin/screens/edit/Edit"
// import Feedbacks from "../components/screens/admin/screens/feedbacks/Feedbacks"
// import MaterialEdit from "../components/screens/admin/screens/materialEdit/MaterialEdit"
// import Students from "../components/screens/admin/screens/students/Students"
// import Users from "../components/screens/admin/screens/users/Users"
// import Material from "../components/screens/course/material/Material"
// import Error404 from "../pages/404/404"
// import SignIn from "../pages/Auth/SignIn"
// import SignUp from "../pages/Auth/SignUp"
// import ContactPage from "../pages/Contact/ContactPage"
// import CoursePage from "../pages/Course/CoursePage"
// import CoursesPage from "../pages/Courses/CoursesPage"
// import HomePage from "../pages/Home/HomPage"
// import ProfilePage from "../pages/Profile/ProfilePage"
// const AdminLayout = lazy(()=>import("../components/layout/AdminLayout/AdminLayout"))
import {
  ADD_COURSE_PAGE,
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
  FEEDBACK_PAGE,
  MAIN_PAGE,
  MATERIAL_EDIT,
  PROFILE_PAGE,
  SIGNIN_PAGE,
  SIGNUP_PAGE,
  STUDENTS_PAGE,
  USERS_PAGE,
} from "../shared/constants/route"
import { checkAuth } from "../store/user/user.actions"

const AdminLayout = lazy(() => import("../components/layout/AdminLayout/AdminLayout"))
const AuthLayout = lazy(() => import("../components/layout/AuthLayout/AuthLayout"))
const Admin = lazy(() => import("../components/screens/admin/Admin"))
const Add = lazy(() => import("../components/screens/admin/screens/add/Add"))
const Admins = lazy(() => import("../components/screens/admin/screens/admins/Admins"))
const Billing = lazy(() => import("../components/screens/admin/screens/billing/Billing"))
const Comments = lazy(() => import("../components/screens/admin/screens/comments/Comments"))
const AddCourse = lazy(() => import("../components/screens/admin/screens/courses/addCourse/AddCourse"))
const Edit = lazy(() => import("../components/screens/admin/screens/edit/Edit"))
const Feedbacks = lazy(() => import("../components/screens/admin/screens/feedbacks/Feedbacks"))
const MaterialEdit = lazy(() => import("../components/screens/admin/screens/materialEdit/MaterialEdit"))
const Students = lazy(() => import("../components/screens/admin/screens/students/Students"))
const Users = lazy(() => import("../components/screens/admin/screens/users/Users"))
const Material = lazy(() => import("../components/screens/course/material/Material"))
const Error404 = lazy(() => import("../pages/404/404"))
const SignIn = lazy(() => import("../pages/Auth/SignIn"))
const SignUp = lazy(() => import("../pages/Auth/SignUp"))
const ContactPage = lazy(() => import("../pages/Contact/ContactPage"))
const CoursePage = lazy(() => import("../pages/Course/CoursePage"))
const CoursesPage = lazy(() => import("../pages/Courses/CoursesPage"))
const HomePage = lazy(() => import("../pages/Home/HomPage"))
const ProfilePage = lazy(() => import("../pages/Profile/ProfilePage"))

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
  },
  {
    path: ADD_COURSE_PAGE,
    element: <AddCourse />,
  },
  {
    path: ADD_PAGE + "/:id",
    element: <Add />,
  },
  {
    path: EDIT_PAGE + "/:id",
    element: <Edit />,
  },
  {
    path: MATERIAL_EDIT + "/:id",
    element: <MaterialEdit />,
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
    path: USERS_PAGE,
    element: <Users />,
  },
  {
    path: FEEDBACK_PAGE,
    element: <Feedbacks />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]

const Routing = () => {
  const dispatch = useAppDispatch()
  const { isAdmin } = useAuth()
  useEffect(() => {
    dispatch(checkAuth())
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={MAIN_PAGE} element={<MainLayout />}>
            {routes.map((route, i) => (
              <Route key={i} path={route.path} element={<Suspense fallback={<MySpinner />}>{route.element}</Suspense>}>
                {route.children?.map((child, i) => (
                  <Route
                    key={i}
                    path={child.path}
                    element={<Suspense fallback={<MySpinner />}>{child.element}</Suspense>}
                  />
                ))}
              </Route>
            ))}
          </Route>
          <Route
            path={AUTH_PAGE}
            element={
              <Suspense fallback={<MySpinner />}>
                <AuthLayout />
              </Suspense>
            }
          >
            {authRoutes.map((route, i) => (
              <Route key={i} path={route.path} element={<Suspense fallback={<MySpinner />}>{route.element}</Suspense>}>
                {route.children?.map((child, i) => (
                  <Route
                    key={i}
                    path={child.path}
                    element={<Suspense fallback={<MySpinner />}>{child.element}</Suspense>}
                  />
                ))}
              </Route>
            ))}
          </Route>
          {isAdmin && (
            <Route
              path={ADMIN_PAGE}
              element={
                <Suspense fallback={<MySpinner />}>
                  <AdminLayout />
                </Suspense>
              }
            >
              {adminRoutes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  element={<Suspense fallback={<MySpinner />}>{route.element}</Suspense>}
                >
                  {route.children?.map((child, i) => (
                    <Route
                      key={i}
                      path={child.path}
                      element={<Suspense fallback={<MySpinner />}>{child.element}</Suspense>}
                    />
                  ))}
                </Route>
              ))}
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
