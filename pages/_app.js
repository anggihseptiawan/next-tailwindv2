import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import useSession from "../hooks/useSession";
import { useStore } from "../redux/store";
import "../styles/globals.css";
import { UnAuth } from "./unAuth";

function MyApp({ Component, pageProps }) {
	const queryClient = new QueryClient();
	const router = useRouter();
	const [user, setUser] = useState(false);

	const store = useStore(pageProps.initialReduxState);

	// Consume global state in redux store
	const state = store.getState();

	useEffect(() => {
		const isLogin = useSession();
		if (isLogin === null) {
			setUser(false);
		} else {
			setUser(true);
		}

		// Set dependency array to state, so that if user login or logout, the app will be automaticly rerender
	}, [state]);

	// Set private route except for homepage
	let privateRoute = false;
	if (router.pathname !== "/") {
		privateRoute = true;
	}

	// Decide which component to render based on private route or not
	const ReturnPage = () => {
		if (privateRoute) {
			if (user) {
				return <Component {...pageProps} />;
			} else {
				return <UnAuth />;
			}
		} else {
			return <Component {...pageProps} />;
		}
	};

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReturnPage />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Provider>
	);
}

export default MyApp;
