import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
	const careers = useLoaderData();

	return (
		<>
			{careers.map((career) => (
				<Link
					to="/"
					key={career.id}
				>
					<h3>{career.title}</h3>
					<p>{career.location}</p>
				</Link>
			))}
		</>
	);
};

export default Careers;
