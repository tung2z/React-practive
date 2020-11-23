import React from 'react';
import { RecipeForm, RecipeCard, DisplayRecipe } from '../components';
import {
	Switch,
	Link,
	Route,
	useRouteMatch,
} from 'react-router-dom';
import './Recipe.css';

interface IRecipeProps {
	data: any[];
	onDeleteRecipe: (value: any) => void;
	onAddRecipe: (value: any) => void
}

const Recipe: React.FunctionComponent<IRecipeProps> = props => {
	const { data, onDeleteRecipe, onAddRecipe } = props;
	const { path, url } = useRouteMatch();

	return (
		<div className="row mt-5">
			<div className="col col-4">
				<Link to={`${url}/new-recipe`} className="link">
					<button type="button" className="btn btn-success">
						New Recipe
					</button>
				</Link>
				<hr />
				<ul className="list-group">
					{data.map((item: any, index) => (
						<Link to={`${url}/${item.id}`} className="link" key={index}>
							<RecipeCard data={item} />
						</Link>
					))}
				</ul>
			</div>
			<div className="col col-md">
				<Switch>
					<Route exact path={path}>
						<h2>Please select a Recipe!</h2>
					</Route>
					<Route path={`${path}/new-recipe`}>
						<RecipeForm data={[]} onAddRecipe={onAddRecipe}/>
					</Route>
					<Route path={`${path}/:id/edit-recipe`}>
						<RecipeForm data={data} onAddRecipe={onAddRecipe}/>
					</Route>
					<Route path={`${path}/:id`}>
						<DisplayRecipe data={data} onDeleteRecipe={onDeleteRecipe} />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default Recipe;
