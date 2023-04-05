import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="not-found">
			<h1>404</h1>
			<p>page not found</p>
			<p>
				navigate to the{" "}
				<Link
					path="/"
					style={{ textDecoration: "underline" }}
				>
					homepage
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
