import React from 'react';
import { MusicStoreApp } from './pages';
import {
	BrowserRouter as Router,
	NavLink,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App container">
				<Switch>
					<Route exact path="/">
						<Redirect to="/music-store" />
					</Route>
					<Route path="/music-store">
						<MusicStoreApp />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
