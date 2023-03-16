import { FC } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Provider } from "react-redux"

import store from "../store/store"

import ReduxToastr from "../components/ui/redux-toastr/ReduxToastr"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

interface IMainProvider {
	children: React.ReactNode | React.ReactNode[]
}

const MainProvider: FC<IMainProvider> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReduxToastr />
				{children}
				<ReactQueryDevtools initialIsOpen={true} />
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
