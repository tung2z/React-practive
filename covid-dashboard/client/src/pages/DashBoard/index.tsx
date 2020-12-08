import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ButtonGroup, Map, Chart } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
	getBriefRequest,
	getCountriesRequest,
	setTargetCountry,
	getTimeseriesRequest,
	setTargetTimeseriesCountry,
} from '../../actions';

const Dashboard = () => {
	const brief = useSelector((state: any) => state.brief);
	const countries = useSelector((state: any) => state.countries);
	const targetCountry = useSelector((state: any) => state.targetCountry);
	const timeseries = useSelector((state: any) => state.timeseries);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getBriefRequest());
		dispatch(getCountriesRequest());
		dispatch(getTimeseriesRequest());
	}, []);

	const onCountryChange = (e: any) => {
		dispatch(
			setTargetCountry(
				countries.find(
					(country: any) => country.countryregion === e.target.value
				)
			)
		);
		dispatch(
			setTargetTimeseriesCountry(
				timeseries.find(
					(country: any) => country.countryregion === e.target.value
				)
			)
		);
	};

	return (
		<div className="mt-4 container-fluid">
			<div>
				<h2>World Wide</h2>
				<ButtonGroup value={brief} />
			</div>
			<div className="mt-3">
				<div className="d-flex">
					<h2>Regional</h2>
					<select
						className="form-control ml-2"
						style={{
							width: '120px',
							border: 'none',
							borderBottom: '1px solid #050505',
							borderRadius: '0',
							outline: 'none',
						}}
						onChange={onCountryChange}
					>
						{countries.map((country: any, index: any) => (
							<option
								key={index}
								selected={country.countryregion === targetCountry.countryregion}
								value={country.countryregion}
							>
								{country.countryregion}
							</option>
						))}
					</select>
				</div>
				<ButtonGroup value={targetCountry} />

				<Row>
					<Col>{/* <Map /> */}</Col>
					<Col>
						<Chart />
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Dashboard;
