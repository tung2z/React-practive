import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {
	const [searchedData, setSearchedData] = useState([]);

	const onSearchChange = (e: any) => {
		const cancelTokenSource = axios.CancelToken.source();
		axios
			.get(
				`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&search=ab&namespace=0&limit=10`,
				{
					cancelToken: cancelTokenSource.token,
				}
			)
			.then(response => {
				console.log(response);
			});

		setTimeout(() => {
			cancelTokenSource.cancel();
		}, 1000);
	};

	useEffect(() => {
		console.log('a');
		return () => {
			console.log('object');
		};
	});

	return (
		<div className="App container">
			<h1>Simple search app</h1>
			<input
				type="text"
				className="form-control mt-5"
				placeholder="Search"
				onChange={onSearchChange}
			/>
			<ul className="list-group">
				<li className="list-group-item">Cras justo odio</li>
				<li className="list-group-item">Dapibus ac facilisis in</li>
				<li className="list-group-item">Morbi leo risus</li>
				<li className="list-group-item">Porta ac consectetur ac</li>
				<li className="list-group-item">Vestibulum at eros</li>
			</ul>
		</div>
	);
};

export default App;
