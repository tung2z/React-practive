import React, { useState } from 'react';
import { Nav } from './components';
import { Recipe, ShoppingList } from './pages';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Data from './utils/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
	const [data, setData] = useState(Data);

	const [shoppingList, setShoppingList] = useState([['tomato', 2]]);

	const onHandleRecipe = ({
		id,
		name,
		imageURL,
		description,
		ingredients,
	}: any) => {
		let item = { id, name, imageURL, description, ingredients };

		if (id === 0) {
			item.id = data[data.length - 1].id + 1;
			setData([...data, item]);
		} else {
			let index = data.findIndex(item => item.id === Number(id));
			setData([...data.slice(0, index), item, ...data.slice(index + 1)]);
		}
	};

	const onDeleteRecipe = (value: any) => {
		let index = data.findIndex(item => item.id === Number(value));
		setData([...data.slice(0, index), ...data.slice(index + 1)]);
	};

	const handleClick = (value: any) => {
		if (!shoppingList.find(item => item[0] === value.ingredient)) {
			setShoppingList([
				...shoppingList,
				[value.ingredient, Number(value.amount)],
			]);
		} else {
			let index = shoppingList.findIndex(item => item[0] === value.ingredient);
			if (!value.amount) {
				setShoppingList([
					...shoppingList.slice(0, index),
					...shoppingList.slice(index + 1),
				]);
			} else {
				setShoppingList([
					...shoppingList.slice(0, index),
					[value.ingredient, Number(value.amount)],
					...shoppingList.slice(index + 1),
				]);
			}
		}
	};

	const onAddInShopCard = (value: any) => {
		let data: any = [...shoppingList];
		value.forEach((item: any) => {
			let index = shoppingList.findIndex(i => i[0] === item[0]);
			if (index === -1) {
				data = [...data, item];
			} else {
				console.log('object');
				data = [
					...data.slice(0, index),
					[item[0], item[1] + shoppingList[index][1]],
					...data.slice(index + 1),
				];
			}
		});

		setShoppingList(data);
	};

	return (
		<div className="App container">
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/">
						<Redirect to="/recipes" />
					</Route>
					<Route path="/recipes">
						<Recipe
							data={data}
							onDeleteRecipe={onDeleteRecipe}
							onHandleRecipe={onHandleRecipe}
							onAddInShopCard={onAddInShopCard}
						/>
					</Route>
					<Route path="/shopping-list">
						<ShoppingList data={shoppingList} handleClick={handleClick} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
