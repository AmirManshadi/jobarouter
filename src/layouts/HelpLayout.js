import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
	return (
		<div className="help-section">
			<h1>help</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fugit
				dicta hic deserunt soluta? Quas, incidunt soluta. Totam, perferendis
				dolores.
			</p>
			<div className="btn-group">
				<NavLink
					className="button"
					to="faq"
				>
					faq
				</NavLink>
				<NavLink
					className="button"
					to="contact"
				>
					contact
				</NavLink>
			</div>
			<Outlet />
		</div>
	);
};

export default HelpLayout;
