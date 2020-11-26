import React, { useState } from 'react';
import { RecipeForm, RecipeCard, DisplayRecipe } from '../components';
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import './Recipe.css';

interface IRecipeProps {
	data: any[];
	onDeleteRecipe: (value: any) => void;
	onHandleRecipe: (value: any) => void;
	handleIngredients: (value: any) => void;
}

const Recipe: React.FunctionComponent<IRecipeProps> = props => {
	const { data, onDeleteRecipe, onHandleRecipe, handleIngredients } = props;
	const { path, url } = useRouteMatch();
	const [activeCard, setActiveCard] = useState(-1);
	const handleActiveCard = (index: number) => {
		setActiveCard(index)
	}

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
						<Link to={`${url}/${item.id}`} className="link" key={index} onClick={() => handleActiveCard(index)}>
							<RecipeCard data={item} active={activeCard === index}/>
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
						<RecipeForm data={[]} onHandleRecipe={onHandleRecipe} />
					</Route>
					<Route path={`${path}/:id/edit-recipe`}>
						<RecipeForm data={data} onHandleRecipe={onHandleRecipe} />
					</Route>
					<Route path={`${path}/:id`}>
						<DisplayRecipe
							data={data}
							onDeleteRecipe={onDeleteRecipe}
							handleIngredients={handleIngredients}
						/>
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default Recipe;
