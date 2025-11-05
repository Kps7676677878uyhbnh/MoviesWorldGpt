import { useRouteError } from "react-router-dom";


const Error = () => {
	const error = useRouteError();
	console.log(error);
	return(
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
			<p className="text-gray-700">{error?.status} {error?.statusText || error?.message}</p>
		</div>
	)
}

export default Error;