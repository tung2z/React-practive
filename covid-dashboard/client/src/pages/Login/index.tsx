import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from './Login.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions';
const Login = () => {
	const loginError = useSelector((state: any) => state.loginError);
	const dispatch = useDispatch();
	const schema = yup.object().shape({
		email: yup.string().required('Email is required'),
		password: yup.string().required('Password is required'),
		confirmPassword: yup
			.string()
			.required('**Required')
			.oneOf(
				[yup.ref('password'), null],
				'Confirm passsword must equal password'
			),
	});
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirmPassword: '',
			displayPassword: false,
		},
		validationSchema: schema,
		onSubmit: values => {
			dispatch(
				actions.getUserRequest({
					email: values.email,
					password: values.password,
				})
			);
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit} className="container mt-5">
			{loginError && <Alert variant="danger">{loginError}</Alert>}
			<Form.Group controlId="email">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter email"
					name="email"
					onChange={formik.handleChange}
					value={formik.values.email}
					className={
						formik.errors.email && formik.touched.email ? styles.warning : ''
					}
				/>
				{formik.errors.email && formik.touched.email && (
					<Form.Text className={styles.warningText}>
						{formik.errors.email}
					</Form.Text>
				)}
			</Form.Group>
			<Form.Group controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type={formik.values.displayPassword ? 'text' : 'password'}
					placeholder="Enter password"
					name="password"
					onChange={formik.handleChange}
					value={formik.values.password}
					className={
						formik.errors.password && formik.touched.password
							? styles.warning
							: ''
					}
				/>
				{formik.errors.password && formik.touched.password && (
					<Form.Text className={styles.warningText}>
						{formik.errors.password}
					</Form.Text>
				)}
			</Form.Group>
			<Form.Group controlId="confirmPassword">
				<Form.Label>Confirm Password</Form.Label>
				<Form.Control
					type={formik.values.displayPassword ? 'text' : 'password'}
					placeholder="Re-enter password"
					name="confirmPassword"
					onChange={formik.handleChange}
					value={formik.values.confirmPassword}
					className={
						formik.errors.confirmPassword && formik.touched.confirmPassword
							? styles.warning
							: ''
					}
				/>
				{formik.errors.confirmPassword && formik.touched.confirmPassword && (
					<Form.Text className={styles.warningText}>
						{formik.errors.confirmPassword}
					</Form.Text>
				)}
			</Form.Group>
			<Form.Group controlId="checkbox">
				<Form.Check
					type="checkbox"
					label="Check to display password"
					name="displayPassword"
					onChange={formik.handleChange}
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default Login;
