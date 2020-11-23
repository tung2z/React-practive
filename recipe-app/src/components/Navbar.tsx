import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface INavProps {}

const Nav: React.FunctionComponent<INavProps> = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavLink className="navbar-brand" to="/">
				Recipe Book
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink className="nav-link" to="/recipes">
							Recipe
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/shopping-list">
							Shopping list
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
