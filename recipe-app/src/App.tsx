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
interface IshoppingList {
	[prop: string]: number;
}

interface IDataItem {
	id: number;
	name: string;
	imageURL: string;
	description: string;
	ingredients: IshoppingList;
}

const App = () => {
	const [data, setData] = useState<IDataItem[]>(Data);
	const [shoppingList, setShoppingList] = useState<IshoppingList>({});

	const onHandleRecipe = ({
		id,
		name,
		imageURL,
		description,
		ingredients,
	}: any) => {
		let item = { id, name, imageURL, description, ingredients };
		let tempData = [];
		if (id === 0) {
			item.id = data[data.length - 1].id ? data[data.length - 1].id + 1 : 0;
			tempData = [...data, item];
		} else {
			let index = data.findIndex(item => item.id === id);
			tempData = [...data.slice(0, index), item, ...data.slice(index + 1)];
		}

		setData(tempData);
	};

	const onDeleteRecipe = (value: any) => {
		let index = data.findIndex(item => item.id === Number(value));
		setData([...data.slice(0, index), ...data.slice(index + 1)]);
	};

	const handleIngredients = (value: any, action: string) => {
		if (action === 'delete') {
			delete shoppingList[value];
		} else {
			Object.keys(value).forEach(prop => {
				if (action === 'update') {
					shoppingList[prop] = value[prop];
				} else {
					shoppingList[prop] = shoppingList[prop]
						? shoppingList[prop] + value[prop]
						: value[prop];
				}
			});
		}

		setShoppingList(shoppingList);
	};

	return (
		<div className="App container">
			<Router>
				<Nav />
				<Switch>
					<Redirect exact from="/" to="/recipes" />
					<Route path="/recipes">
						<Recipe
							data={data}
							onDeleteRecipe={onDeleteRecipe}
							onHandleRecipe={onHandleRecipe}
							handleIngredients={handleIngredients}
						/>
					</Route>
					<Route path="/shopping-list">
						<ShoppingList
							data={shoppingList}
							handleIngredients={handleIngredients}
						/>
					</Route>
				</Switch>
				<Route path={``}></Route>
			</Router>
		</div>
	);
};

export default App;
