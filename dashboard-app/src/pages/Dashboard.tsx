import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import _ from 'lodash';
import { Map, Buttons, Chart } from '../components';
import styles from './Dashboard.module.css';

interface IData {
	provincestate: string;
	countryregion: string;
	lastupdate: string;
	location: object;
	countrycode: { iso2: string; iso3: string };
	confirmed: number;
	deaths: number;
	recovered: number;
}

const Dashboard = () => {
	const [data, setData] = useState<IData[]>([]);

	const [targetCountry, setTargetCountry] = useState('VN');
	const [countryData, setCountryData] = useState<IData[]>([]);

	useEffect(() => {
		axios({
			method: 'get',
			url:
				'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest',
		})
			.then(res => res.data.filter((item: IData) => item.countrycode))
			.then(data => {
				setData(data);
			});
	}, []);

	useEffect(() => {
		axios({
			method: 'get',
			url: `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${targetCountry}&onlyCountries=true`,
		})
			.then(res => res.data)
			.then(data => {
				setCountryData(data);
			});

		return () => {};
	}, [targetCountry]);

	const onCountryChange = (e: any) => {
		setTargetCountry(e.target.value);
	};
	return (
		<div className="mt-4 container-fluid">
			<div>
				<h2>World Wide</h2>
				<Row>
					<Col>
						<Buttons
							name="confirmed"
							value={data.reduce(
								(result, item) => (result += item.confirmed || 0),
								0
							)}
						/>
					</Col>
					<Col>
						<Buttons
							name="recovered"
							value={data.reduce(
								(result, item) => (result += item.recovered || 0),
								0
							)}
						/>
					</Col>
					<Col>
						<Buttons
							name="deaths"
							value={data.reduce(
								(result, item) => (result += item.deaths || 0),
								0
							)}
						/>
					</Col>
					<Col>
						<Buttons
							name="fatalityRate"
							value={Number(
								(
									(data.reduce(
										(result, item) => (result += item.deaths || 0),
										0
									) /
										data.reduce(
											(result, item) => (result += item.confirmed || 0),
											0
										)) *
									100
								).toFixed(2)
							)}
						/>
					</Col>
				</Row>
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
						{_.uniqBy(data, 'countryregion').map((country, index) => (
							<option
								value={country.countrycode.iso2}
								key={index}
								selected={country.countrycode.iso2 === targetCountry}
							>
								{country.countryregion}
							</option>
						))}
					</select>
				</div>
				<Row>
					<Col>
						<Buttons
							name="confirmed"
							value={countryData.reduce(
								(result, item) => (result += item.confirmed || 0),
								0
							)}
						/>
					</Col>
					<Col>
						<Buttons
							name="recovered"
							value={countryData.reduce(
								(result, item) => (result += item.recovered || 0),
								0
							)}
						/>
					</Col>
					<Col>
						<Buttons
							name="deaths"
							value={countryData.reduce(
								(result, item) => (result += item.deaths || 0),
								0
							)}
						/>
					</Col>
					<Col>
						<Buttons
							name="fatalityRate"
							value={Number(
								(
									(countryData.reduce(
										(result, item) => (result += item.deaths || 0),
										0
									) /
										data.reduce(
											(result, item) => (result += item.confirmed || 0),
											0
										)) *
									100
								).toFixed(2)
							)}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Map />
					</Col>
					<Col>
						<Chart />
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Dashboard;
