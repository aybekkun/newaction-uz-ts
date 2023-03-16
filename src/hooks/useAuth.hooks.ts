import useAppSelector from "./useAppSelector.hook"

export const useAuth = () => {
	const { isLoading, user, isAuth, isAdmin, isSuperAdmin, isStudent } =
		useAppSelector((state) => state.user)

	return { isLoading, user, isAuth, isAdmin, isSuperAdmin, isStudent }
}
