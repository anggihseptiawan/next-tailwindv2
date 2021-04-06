import { useState } from "react";

const SignIn = () => {
	const [count, setCount] = useState({ a: 1, b: 2, c: 3 });

	return (
		<>
			<div className="text-center">SignIn Page</div>
			<p>Munculkan angka {count}</p>
			<button onClick={() => setCount({ ...count, a: a + 1 })}>Plus</button>
		</>
	);
};

export default SignIn;
