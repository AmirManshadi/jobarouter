import { Link, useLocation } from "react-router-dom"

const Breadcrumbs = () => {
	const { pathname } = useLocation()
	let currentLink = ""
	const crumbs = pathname
		.split("/")
		.filter(crumb => crumb !== "")
		.map(crumb => {
			currentLink += `/${crumb}`
			return (
				<div className="crumb">
					<Link to={currentLink}>{crumb}</Link>
				</div>
			)
		})
	return <div className="breadcrumbs">{crumbs}</div>
}

export default Breadcrumbs
