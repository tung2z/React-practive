import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navs } from './components';
import { Login, Dashboard } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

function App() {
	const user = useSelector((state: any) => state.user);
	return (
		<Router>
			<Navs />
			<Switch>
				<Route
					path="*"
					render={() => (user.token ? <Dashboard /> : <Login />)}
				></Route>
			</Switch>
		</Router>
	);
}

export default App;
