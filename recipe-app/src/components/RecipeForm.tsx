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
	let item = data.find((item: { id: number }) => item.id === Number(id)) || {};
	let history = useHistory();

	const deleteIngredients = (index: number) => {
		let temp = [];
		if (index === -1) {
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
			id: item.id || 0,
			name: item.name,
			imageURL: item.imageURL,
			description: item.description,
			ingredients: item.ingredients || [],
			disable: true,
		},
		validationSchema: yup.object().shape({
			name: yup.string().required(),
			imageURL: yup.string().url('Wrong URL').required(),
			description: yup.string().required(),
			ingredients: yup.array().of(yup.array<[string, number]>().required()),
		}),
		onSubmit: values => {
			onHandleRecipe(values);
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
					disable: true,
				})
			}
		>
			{formik.values.name &&
				formik.values.imageURL &&
				!formik.errors.imageURL &&
				formik.values.description &&
				(formik.values.disable = false)}
			{/* {console.log(formik.errors)}
			{formik.errors !== {} && formik.values && (formik.values.disable = false)} */}
			{(formik.errors.name ||
				formik.errors.imageURL ||
				formik.errors.description) &&
				(formik.values.disable = true)}
			<div className="form-group">
				<button
					type="submit"
					className="btn btn-success"
					disabled={formik.values.disable}
				>
					Save
				</button>
				<button type="reset" className="btn btn-secondary ml-1">
					Cancel
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
			{formik.values.ingredients.map((i: any, index: any) => (
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
						onClick={() => deleteIngredients(index)}
					>
						X
					</button>
				</div>
			))}

			<button
				type="button"
				className="btn btn-success mt-2"
				onClick={() => deleteIngredients(-1)}
			>
				Add Ingrement
			</button>
		</form>
	);
};

export default RecipeForm;
