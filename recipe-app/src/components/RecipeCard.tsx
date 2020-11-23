/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';

interface IRecipeCardProps {
	data: any
}

const RecipeCard: React.FunctionComponent<IRecipeCardProps> = props => {
	const {data} = props
	return (
		<div className="card mb-2 bg-darken-4">
			<div className="d-flex justify-content-between pt-4 px-3">
				<div>
					<h5>{data.name}</h5>
					<p>{data.description}</p>
				</div>
				<img
					height="50px"
					width="50px"
					src={data.imageURL}
					alt="Card image cap"
				></img>
			</div>
		</div>
	);
};

export default RecipeCard;
