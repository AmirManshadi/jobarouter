import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<h1 className="logo">
				<NavLink to="/">jobarouter</NavLink>
			</h1>
			<NavLink className="button" to="/">home</NavLink>
			<NavLink className="button" to="about">about</NavLink>
			<NavLink className="button" to="help">help</NavLink>
			<NavLink className="button" to="careers">careers</NavLink>
		</nav>
	);
};

export default Navbar;
