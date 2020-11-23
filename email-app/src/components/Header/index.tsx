/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '../index';

interface IHeaderProps {
	users: string[];
	handleSelect: (e: any) => void
}

const Header: React.FunctionComponent<IHeaderProps> = props => {
	const { users, handleSelect } = props;
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light ">
				<div className="collapse navbar-collapse nav-tabs">
					<ul className="navbar-nav ">
						<li className="nav-item">
							<NavLink className="nav-link" to="/messages">
								Messages
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/contacts">
								Contacts
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/preferences">
								Preferences
							</NavLink>
						</li>
					</ul>
				</div>
				<select className="custom-select col-2" onChange={handleSelect}>
					{
						users.map((user, index) => <option value={user} key={index}>{user}</option>)
					}

				</select>
				<Button>
					<i className="fas fa-home"></i>
				</Button>

				<Button>
					<i className="fas fa-envelope"></i> New messages
				</Button>
			</nav>
		</div>
	);
};

export default Header;
