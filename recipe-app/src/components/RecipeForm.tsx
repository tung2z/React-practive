import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface IRecipeFormProps {
	data: any;
	onAddRecipe: (value: any) => void;
}

const RecipeForm: React.FunctionComponent<IRecipeFormProps> = props => {
	const { data, onAddRecipe } = props;
	const { url } = useRouteMatch();
	let id = url.split('/')[2];
	let item = data.find((item: { id: number }) => item.id === Number(id)) || {};
	let history = useHistory();

	const [ingrements, setIngrements] = useState(item.ingrements || {});

	const formik = useFormik({
		initialValues: {
			id: item.id,
			name: item.name,
			imageURL: item.imageURL,
			description: item.description,
			ingrements: item.ingrements || {},
			enabled: false,
		},
		validationSchema: yup.object().shape({
			name: yup.string().required(),
			imageURL: yup.string().url('Wrong URL').required(),
			description: yup.string().required(),
		}),
		onSubmit: values => {
			values.ingrements.tomato += 1;
			onAddRecipe(values);
			history.push(`/recipes${data.id ? `/${data.id}` : ''}`);
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			{formik.values.name &&
				formik.values.imageURL &&
				!formik.errors.imageURL &&
				formik.values.description &&
				(formik.values.enabled = true)}
			{(formik.errors.name ||
				formik.errors.imageURL ||
				formik.errors.description) &&
				(formik.values.enabled = false)}
			<div className="form-group">
				<button
					type="submit"
					className="btn btn-success"
					disabled={!formik.values.enabled}
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
			{Object.keys(ingrements).map((i, index) => (
				<div className="form-inline d-flex justify-content-between mt-2" key={index}>
					<input
						type="text"
						className="form-control mr-5 col-6"
						value={i}
					/>
					<input
						type="text"
						className="form-control mr-2 col-1"
						value={item.ingrements[i]}
					/>
					<button type="button" className="btn btn-danger ">
						X
					</button>
				</div>
			))}
			<button type="button" className="btn btn-success mt-2">
				Add Ingrement
			</button>
		</form>
	);
};

export default RecipeForm;
