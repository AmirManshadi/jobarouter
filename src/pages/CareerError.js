import { Link, useRouteError } from "react-router-dom"

const CareerError = () => {
	const error = useRouteError()

	return (
		<div className="error-message">
			<h2>{error.message}</h2>
			<Link to="/">return to homepage</Link>
		</div>
	)
}

export default CareerError
