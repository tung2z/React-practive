/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { IIngredient } from '../interfaces';
import { useSelector, useDispatch } from 'react-redux';

const ShoppingList = () => {
	const shoppingList = useSelector((state: any) => state.shoppingList);
	const recipes = useSelector((state: any) => state.recipes);
	console.log(recipes);
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			name: '',
			quantity: 0,
			showDelBtn: false,
			active: -1,
		},
		validationSchema: yup.object().shape({
			name: yup.string().required('**Required'),
			quantity: yup.number().required('**Required'),
		}),
		onSubmit: values => {
			dispatch({
				type: 'ADD/UPDATE',
				payload: { name: values.name, quantity: Number(values.quantity) },
			});
			formik.resetForm();
		},
	});

	const onItemClick = (index: number, ingredient: any) => {
		formik.setValues({
			name: ingredient.name,
			quantity: ingredient.quantity,
			showDelBtn: true,
			active: index,
		});
	};

	return (
		<div className="container">
			<form
				className="form my-4"
				onSubmit={formik.handleSubmit}
				onReset={formik.handleReset}
			>
				<div className="row mb-2">
					<div className="col form-group mb-2 col-3">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							className="form-control"
							id="name"
							onChange={formik.handleChange}
							value={formik.values.name}
						/>
						{formik.errors.name && formik.touched.name && (
							<small>{formik.errors.name}</small>
						)}
					</div>

					<div className="col form-group mx-sm-3 mb-2 col-3">
						<label htmlFor="quantity">Quantity</label>
						<input
							type="text"
							name="quantity"
							className="form-control"
							id="quantity"
							onChange={formik.handleChange}
							value={formik.values.quantity}
						/>
						{formik.errors.quantity && formik.touched.quantity && (
							<small>{formik.errors.quantity}</small>
						)}
					</div>
				</div>
				<button type="submit" className="btn btn-success mr-1">
					{formik.values.showDelBtn ? 'Update' : 'Add'}
				</button>
				{formik.values.showDelBtn && (
					<button
						type="button"
						className="btn btn-danger mr-1"
						onClick={() => {
							formik.resetForm();
							dispatch({
								type: 'DELETE',
								payload: formik.values.name,
							});
						}}
					>
						Delete
					</button>
				)}
				<button type="reset" className="btn btn-primary">
					Clear
				</button>
			</form>

			<hr />
			<ul className="list-group">
				{shoppingList.map((ingredient: IIngredient, index: any) => (
					<li
						className={`list-group-item ${
							index === formik.values.active && 'active'
						}`}
						style={{ cursor: 'pointer' }}
						key={index}
						onClick={() => onItemClick(index, ingredient)}
					>
						{ingredient.name} -- {ingredient.quantity}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ShoppingList;
