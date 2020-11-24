import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface IShoppingListProps {
	data: any;
	handleClick: (values: any) => void;
}

const ShoppingList: React.FunctionComponent<IShoppingListProps> = props => {
	const { data, handleClick } = props;

	const formik = useFormik({
		initialValues: {
			ingredient: '',
			amount: '',
			showDelBtn: false,
			active: -1,
		},
		validationSchema: yup.object().shape({
			ingredient: yup.string().required('**Required'),
			amount: yup.number().required('**Required'),
		}),
		onSubmit: values => {
			handleClick(values);
			formik.resetForm();
    },
	});

	const onItemClick = (index: any, item: any) => {
		formik.setValues({
			ingredient: item[0],
			amount: item[1],
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
						<label htmlFor="ingredient">Ingredients</label>
						<input
							type="text"
							name="ingredient"
							className="form-control"
							id="ingredient"
							onChange={formik.handleChange}
							value={formik.values.ingredient}
						/>
						{formik.errors.ingredient && formik.touched.ingredient && (
							<small>{formik.errors.ingredient}</small>
						)}
					</div>

					<div className="col form-group mx-sm-3 mb-2 col-3">
						<label htmlFor="amount">Amount</label>
						<input
							type="text"
							name="amount"
							className="form-control"
							id="amount"
							onChange={formik.handleChange}
							value={formik.values.amount}
						/>
						{formik.errors.amount && formik.touched.amount && (
							<small>{formik.errors.amount}</small>
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
							handleClick({
								ingredient: formik.values.ingredient,
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
				{data?.map((item: any, index: any) => (
					<li
						className={`list-group-item ${index===formik.values.active && 'active'}`}
						style={{ cursor: 'pointer' }}
						key={index}
						onClick={() => onItemClick(index, item)}
					>
						{item[0]} -- {item[1]}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ShoppingList;
