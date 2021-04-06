import Head from "next/head";
import Link from "next/link";
import { initializeStore } from "../redux/store";

const Home = () => {
	// get redux store for dispatch action
	const reduxStore = initializeStore();
	const { dispatch } = reduxStore;

	const handleSignin = () => {
		sessionStorage.setItem("login", true);
		dispatch({ type: "LOGIN", value: true });
	};

	const handleSignout = () => {
		sessionStorage.removeItem("login", true);
		dispatch({ type: "LOGIN", value: false });
	};

	// const getPost = async () => {
	// 	const URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

	// 	const response = await fetch(URL);
	// 	const data = await response.json();
	// 	return data;
	// };

	// useQuery("post", getPost, {
	// 	staleTime: 3000,
	// });

	return (
		<div className="">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container mx-auto sm:px-20 px-8 py-10">
				<h1 className="text-6xl text-center font-bold">
					Welcome to Next-tailwind App
				</h1>
				<h2 className="text-2xl text-center font-semibold mt-2">
					Build with{" "}
					<a
						className="no-underline text-blue-600"
						href="https://nextjs.org"
					>
						Next.js!
					</a>{" "}
					& Styled with&nbsp;
					<a
						className="no-underline text-blue-600"
						href="https://tailwindcss.com/"
					>
						tailwindcss v2.0
					</a>
				</h2>

				<div className="flex justify-center mt-5">
					<Link href="/about">
						<a className="border border-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-6 py-1 mr-2">
							About
						</a>
					</Link>
					<Link href="/profile">
						<a className="border border-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-6 py-1 mr-2">
							Profile
						</a>
					</Link>
					<Link href="/contact">
						<a className="border border-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-6 py-1 mr-2">
							Contact
						</a>
					</Link>
					<button
						className="border border-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-6 py-1 mr-2"
						onClick={handleSignin}
					>
						Signin
					</button>
					<button
						className="border border-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-6 py-1 mr-2"
						onClick={handleSignout}
					>
						Signout
					</button>
				</div>

				<p className="mt-10">
					Get started by editing <code className="">pages/index.js</code>
				</p>

				<div className="grid gap-4 sm:grid-cols-2 mt-6">
					<a
						href="https://nextjs.org/docs"
						className="bg-gray-50 hover:bg-gray-100 py-6 px-8 rounded-md"
					>
						<h3>Documentation &rarr;</h3>
						<p>
							Find in-depth information about Next.js features and API.
						</p>
					</a>

					<a
						href="https://nextjs.org/learn"
						className="bg-gray-50 hover:bg-gray-100 py-6 px-8 rounded-md"
					>
						<h3>Learn &rarr;</h3>
						<p>
							Learn about Next.js in an interactive course with quizzes!
						</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className="bg-gray-50 hover:bg-gray-100 py-6 px-8 rounded-md"
					>
						<h3>Examples &rarr;</h3>
						<p>
							Discover and deploy boilerplate example Next.js projects.
						</p>
					</a>

					<a
						href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className="bg-gray-50 hover:bg-gray-100 py-6 px-8 rounded-md"
					>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with
							Vercel.
						</p>
					</a>
				</div>
			</main>

			<footer className="container flex justify-center mx-auto sm:px-20 px-8 py-10">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
					className="flex"
				>
					Powered by{" "}
					<img src="/vercel.svg" alt="Vercel Logo" className="w-20 ml-2" />
				</a>
			</footer>
		</div>
	);
};

export default Home;
