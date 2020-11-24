import React from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';

interface IDisplayRecipeProps {
	data: any[];
	onDeleteRecipe: (value: any) => void;
	onAddInShopCard: (value: any) => void;
}

const DisplayRecipe: React.FunctionComponent<IDisplayRecipeProps> = props => {
	const { id } = useParams<{ id: string }>();
	const { data, onDeleteRecipe, onAddInShopCard } = props;
	const item = data.find(item => item.id === Number(id));
	const { url } = useRouteMatch();

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
						onClick={() => onAddInShopCard(item.ingredients)}
					>
						Goto Shopping
					</Link>
					<Link to={`${url}/edit-recipe`} className="dropdown-item">
						Edit Recipe
					</Link>
					<Link
						to="/recipes"
						className="dropdown-item"
						onClick={() => onDeleteRecipe(id)}
					>
						Delete Recipe
					</Link>
				</div>
			</div>
			<p className="mt-2">{item.description}</p>
			<ul className="list-group">
				{item.ingredients.map((i: any, index: any) => (
					<li className="list-group-item" key={index}>
						{i[0]} -- {i[1]}
					</li>
				))}
			</ul>
		</div>
	);
};

export default DisplayRecipe;
