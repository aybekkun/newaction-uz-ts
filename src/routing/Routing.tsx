import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AuthLayout from "../components/layout/AuthLayout/AuthLayout"
import MainLayout from "../components/layout/MainLayout/MainLayout"
import Material from "../components/screens/course/material/Material"

import useAppDispatch from "../hooks/useAppDispatch.hook"

import {
	AUTH_PAGE,
	COURSES_PAGE,
	COURSE_PAGE,
	MAIN_PAGE,
	SIGNIN_PAGE,
	SIGNUP_PAGE
} from "../shared/constants/route"

import { checkAuth } from "../store/user/user.actions"

import SignIn from "../pages/Auth/SignIn"
import SignUp from "../pages/Auth/SignUp"
import CoursePage from "../pages/Course/CoursePage"
import CoursesPage from "../pages/Courses/CoursesPage"
import HomePage from "../pages/Home/HomPage"

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
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default Routing
