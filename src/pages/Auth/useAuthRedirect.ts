import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth.hooks"



export const useAuthRedirect = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	useEffect(() => {
		if (isAuth) {
			navigate("/")
		}
	}, [isAuth])
}
