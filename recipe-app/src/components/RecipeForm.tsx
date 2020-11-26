import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface IRecipeFormProps {
	data: any;
	onHandleRecipe: (value: any) => void;
}

const RecipeForm: React.FunctionComponent<IRecipeFormProps> = props => {
	const { data, onHandleRecipe } = props;
	const { url } = useRouteMatch();
	let id = url.split('/')[2];
	let targetRecipe =
		data.find((item: { id: number }) => item.id === Number(id)) || {};
	let history = useHistory();

	const handleFormikIngredients = (index: any) => {
		let temp = [];
		if (index === '') {
			temp = [...formik.values.ingredients, []];
		} else {
			temp = [
				...formik.values.ingredients.slice(0, index),
				...formik.values.ingredients.slice(index + 1),
			];
		}
		formik.setValues({
			...formik.values,
			ingredients: temp,
		});
	};
	const formik = useFormik({
		initialValues: {
			id: targetRecipe.id || 0,
			name: targetRecipe.name,
			imageURL: targetRecipe.imageURL,
			description: targetRecipe.description,
			ingredients: targetRecipe.ingredients
				? Object.keys(targetRecipe.ingredients)?.map(item => [
						item,
						targetRecipe.ingredients[item],
				  ])
				: [],
		},
		validationSchema: yup.object().shape({
			name: yup.string().required(),
			imageURL: yup.string().url('Wrong URL').required(),
			description: yup.string().required(),
			ingredients: yup.array(yup.array(yup.string().required())).required(),
		}),
		onSubmit: values => {
			let ingredientsObject: any = {};
			formik.values.ingredients.forEach(item => {
				if (item[0]) {
					ingredientsObject[item[0]] = Number(item[1]) ? Number(item[1]) : 0;
				}
			});

			onHandleRecipe({ ...values, ingredients: ingredientsObject });
			history.push(`/recipes${data.id ? `/${data.id}` : ''}`);
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			onReset={() =>
				formik.setValues({
					...formik.values,
					name: '',
					imageURL: '',
					description: '',
					ingredients: [],
				})
			}
		>
			<div className="form-group">
				<button
					type="submit"
					className="btn btn-success"
					disabled={!(formik.dirty && formik.isValid)}
				>
					Save
				</button>
				<button type="reset" className="btn btn-danger ml-1">
					Reset
				</button>
			</div>

			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					className="form-control"
					id="name"
					name="name"
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="imageURL">Image URL</label>
				<input
					type="text"
					className="form-control"
					id="imageURL"
					name="imageURL"
					onChange={formik.handleChange}
					value={formik.values.imageURL}
				/>
				{formik.values.imageURL && !formik.errors.imageURL && (
					<img
						src={formik.values.imageURL}
						alt="img"
						width="300px"
						className="mt-1 img-thumbnail"
					/>
				)}
			</div>
			<div className="form-group">
				<label htmlFor="description">Description</label>
				<textarea
					className="form-control"
					id="description"
					name="description"
					rows={3}
					onChange={formik.handleChange}
					value={formik.values.description}
				></textarea>
			</div>
			{formik.values.ingredients.map((prop: any, index: any) => (
				<div
					className="form-inline d-flex justify-content-between mt-2"
					key={index}
				>
					<input
						type="text"
						className="form-control mr-5 col-6"
						name={`ingredients[${index}][0]`}
						onChange={formik.handleChange}
						value={formik.values.ingredients[index][0]}
					/>
					<input
						type="text"
						className="form-control mr-2 col-1"
						name={`ingredients[${index}][1]`}
						onChange={formik.handleChange}
						value={formik.values.ingredients[index][1]}
					/>
					<button
						type="button"
						className="btn btn-danger "
						onClick={() => handleFormikIngredients(index)}
					>
						X
					</button>
				</div>
			))}

			<button
				type="button"
				className="btn btn-success mt-2"
				onClick={() => handleFormikIngredients('')}
			>
				Add Ingrement
			</button>
		</form>
	);
};

export default RecipeForm;
