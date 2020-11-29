import React from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const DisplayRecipe = () => {
	const { id } = useParams<{ id: string }>();
	const recipes = useSelector((state: any) => state.recipes);
	const item = recipes.find((recipe: any) => recipe.id === Number(id));
	console.log(item);
	const { url } = useRouteMatch();
	const dispatch = useDispatch();

	return (
		<div>
			<div className="imgBor">
				<img src={item.imageURL} alt={item.name} />
			</div>
			<h2 className="mt-2">{item.name}</h2>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Dropdown button
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<Link
						to="/shopping-list"
						className="dropdown-item"
						onClick={() => {
							console.log(item.ingredients);
							dispatch({
								type: 'ADD_ALL',
								payload: item.ingredients,
							});
						}}
					>
						Goto Shopping
					</Link>
					<Link to={`${url}/edit-recipe`} className="dropdown-item">
						Edit Recipe
					</Link>
					<Link
						to="/recipes"
						className="dropdown-item"
						onClick={() =>
							dispatch({
								type: 'DELETE_RECIPE',
								payload: Number(id),
							})
						}
					>
						Delete Recipe
					</Link>
				</div>
			</div>
			<p className="mt-2">{item.description}</p>
			<ul className="list-group">
				{item.ingredients.map((ingredient: any, index: any) => (
					<li className="list-group-item" key={index}>
						{ingredient.name} -- {ingredient.quantity}
					</li>
				))}
			</ul>
		</div>
	);
};

export default DisplayRecipe;
