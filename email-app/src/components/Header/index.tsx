import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Messages, Contacts, Perferences } from '../../pages';
import { Button } from '../index';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = props => {
	return (
		<Router>
			<div>
				<nav className="navbar navbar-expand-lg navbar-light ">
					<div className="collapse navbar-collapse nav-tabs">
						<ul className="navbar-nav ">
							<li className="nav-item">
								<Link className="nav-link active" to="/messages">
									Messages
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contacts">
									Contacts
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/preferences">
									Preferences
								</Link>
							</li>
						</ul>
						
					</div>
					<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Dropdown button
							</button>
							<div
								className="dropdown-menu"
								aria-labelledby="dropdownMenuButton"
							>
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</div>
					<div  className="ml-1">
						<Button>
							<i className="fas fa-home"></i>
						</Button>
					</div>
					<div className="ml-1">
						<Button>
							<i className="fas fa-envelope"></i> New messages
						</Button>
					</div>
				</nav>
				<Switch>
					<Route path="/messages">
						<Messages />
					</Route>
					<Route path="/contacts">
						<Contacts />
					</Route>
					<Route path="/preferences">
						<Perferences />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Header;
