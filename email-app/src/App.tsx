import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Messages, Contacts, Perferences } from './pages';
import { Header } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
				<Route exact path="/">
						<Messages />
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
