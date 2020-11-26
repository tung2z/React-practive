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

const App = () => {
	const [data, setData] = useState(Data);
	const object: IshoppingList = {
		fsdfs: 2,
	};
	object['fsdfsd'] = 2;

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
			item.id = data[data.length - 1].id + 1;
			tempData = [...data, item];
		} else {
			let index = data.findIndex(item => item.id === Number(id));
			tempData = [...data.slice(0, index), item, ...data.slice(index + 1)];
		}

		setData(tempData);
	};

	const onDeleteRecipe = (value: any) => {
		let index = data.findIndex(item => item.id === Number(value));
		setData([...data.slice(0, index), ...data.slice(index + 1)]);
	};

	const handleIngredients = (value: any) => {
		if (typeof value === 'string') {
			delete shoppingList[value];
		} else {
			Object.keys(value).forEach(prop => {
				shoppingList[prop] = shoppingList[prop]
					? shoppingList[prop] + value[prop]
					: value[prop];
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
