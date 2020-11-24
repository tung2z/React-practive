import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Messages, Contacts, Perferences } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
				<Route exact path="/">
						<Redirect to="/messages" />
					</Route>
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
			</Router>
		</div>
	);
}

export default App;
