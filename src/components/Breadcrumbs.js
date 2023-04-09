import { NavLink, useLocation } from "react-router-dom"

const Breadcrumbs = () => {
	const { pathname } = useLocation()
	let breadcrumb = []
	const paths = pathname
		.split("/")
		.filter(crumb => crumb !== "")
		.map(crumb => {
			breadcrumb.push(`/${crumb}`)
			return breadcrumb.join("")
		})
	return (
		<div className="breadcrumbs">
			{paths.map((path, i) => {
				return (
					<>
						<NavLink to={path} key={path} className="breadcrumb">
							{breadcrumb[i].split("/").at(-1)}
						</NavLink>
            <span>-</span>
					</>
				)
			})}
		</div>
	)
}

export default Breadcrumbs
