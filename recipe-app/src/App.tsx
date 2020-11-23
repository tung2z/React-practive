import React, { useState } from 'react';
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

const App = () => {
	const [data, setData] = useState([
		{
			id: 1,
			name: 'Hamburger',
			imageURL:
				'https://images.unsplash.com/photo-1605964883324-6d18a190faf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=631&q=80',
			description: 'Good',
			ingrements: { tomato: 2, orange: 1, banana: 4 },
		},
		{
			id: 2,
			name: 'Meat',
			imageURL:
				'https://images.unsplash.com/photo-1605957551463-57d015501960?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
			description: 'Good',
			ingrements: { tomato: 2, orange: 1, banana: 4 },
		},
		{
			id: 3,
			name: 'Vegetable',
			imageURL:
				'https://images.unsplash.com/photo-1606010734745-750994528f58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
			description: 'Good',
			ingrements: { tomato: 2, orange: 1, banana: 4, apple: 3 },
		},
		{
			id: 4,
			name: 'Vegetable',
			imageURL:
				'https://images.unsplash.com/photo-1605714317114-fd489a75c3a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
			description: 'Good',
			ingrements: { tomato: 2, orange: 1, banana: 4, apple: 3 },
		},
		{
			id: 5,
			name: 'Vegetable',
			imageURL:
				'https://images.unsplash.com/photo-1605953807536-52eca0c50719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
			description: 'Good',
			ingrements: { tomato: 2, orange: 1, banana: 4, apple: 3 },
		},
		{
			id: 6,
			name: 'Hamburger',
			imageURL:
				'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1202&q=80',
			description: 'Good',
			ingrements: { tomato: 2, orange: 1, banana: 4 },
		},
	]);

	const onAddRecipe = ({ name, imageURL, description, ingrements }: any) => {
		let item = {
			id: data[data.length - 1].id + 1,
			name,
			imageURL,
			description,
			ingrements,
		};
		setData([...data, item])
	};

	const onDeleteRecipe = (value: any) => {
		let index = data.findIndex(item => item.id === Number(value));
		setData([...data.slice(0, index), ...data.slice(index + 1)]);
	};

	return (
		<div className="App container">
			<Router>
				<Nav />
				<Switch>
					<Route path="/recipes">
						<Recipe
							data={data}
							onDeleteRecipe={onDeleteRecipe}
							onAddRecipe={onAddRecipe}
						/>
					</Route>
					<Route path="/shopping-list">
						<ShoppingList />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
