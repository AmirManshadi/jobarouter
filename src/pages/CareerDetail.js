import { useLoaderData, useParams } from "react-router-dom"

const CareerDetail = () => {
	const career = useLoaderData()

	return (
		<div className="career-detail">
			<h2>detail about {career.title}</h2>
			<p>initial salary {career.salary}</p>
			<p>located in {career.location}</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quae quidem
				repudiandae porro, laudantium repellendus laborum? Ab, mollitia harum?
				Vel error quaerat doloribus. Possimus, corrupti? Fugiat voluptates alias
				facilis accusantium.
			</p>
		</div>
	)
}

export default CareerDetail
