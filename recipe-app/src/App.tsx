import React from 'react';
import { Nav } from './components';
import { Recipe, ShoppingList } from './pages';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const App = () => {
	const store = createStore(rootReducer, composeWithDevTools());

	return (
		<Provider store={store}>
			<div className="App container">
				<Router>
					<Nav />
					<Switch>
						<Redirect exact from="/" to="/recipes" />
						<Route path="/recipes">
							<Recipe />
						</Route>
						<Route path="/shopping-list">
							<ShoppingList />
						</Route>
					</Switch>
				</Router>
			</div>
		</Provider>
	);
};

export default App;
