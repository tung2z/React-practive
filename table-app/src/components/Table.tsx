import React, { useState } from 'react';
import Users from '../constants/users.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const Table = () => {
	const dateFormat = (date: string) => {
		let b = date.split('-');
		return [b[2].slice(0, 2), b[1], b[0]].join('/');
	};

	const contactFormat = (contact: string) => {
		return ['+84', ...contact.split('-')].join('');
	};

	const formatedUsers = Users.map(
		({ id, firstName, lastName, email, gender, birthday, salary, phone }) => ({
			id,
			firstName,
			lastName,
			email,
			gender,
			birthday: dateFormat(birthday),
			salary,
			phone: contactFormat(phone),
		})
	);
	const [searchedUsers, setSearchedUsers] = useState(formatedUsers);
	const [currentPagi, setCurrentPagi] = useState(0);
	const [users, setUsers]: any = useState(
		searchedUsers.slice(currentPagi * 10, currentPagi * 10 + 9)
	);

	const onSearchChange =(e: any) => {
		setCurrentPagi(0);
		let filterUsers = formatedUsers.filter(
			(user: any) =>
				Object.values(user)?.filter(
					(item: any) =>
						item
							.toString()
							.toLowerCase()
							.indexOf(e.target.value.toLowerCase()) !== -1
				).length !== 0
		);
		
		setSearchedUsers(filterUsers);
		setUsers(filterUsers.slice(currentPagi * 10, currentPagi * 10 + 9));
		
	};

	const onSortChange = (e: any) => {
		const value = e.target.value;
		let sortedUsers = [...searchedUsers].sort((a: any, b: any) => {
			if (typeof a[value] === 'number') {
				return a[value] - b[value];
			}
			var nameA = a[value].toUpperCase();
			var nameB = b[value].toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			return 0;
		});
		setSearchedUsers(sortedUsers);
		setCurrentPagi(0)
		setUsers(sortedUsers.slice(currentPagi * 10, currentPagi * 10 + 9))
	};

	const onChangePagi = (index: number) => {
		setCurrentPagi(index);
		setUsers(searchedUsers.slice(index * 10, index * 10 + 9));
	};

	const onPrevClick = () => {
		if (currentPagi <= 0) {
			return;
		}
		setCurrentPagi(currentPagi - 1);
		setUsers(searchedUsers.slice((currentPagi - 1) * 10, currentPagi * 10 - 1));
	};

	const onNextClick = () => {
		if (currentPagi >= Math.ceil(searchedUsers.length / 10) - 1) {
			return;
		}
		setCurrentPagi(currentPagi + 1);
		setUsers(
			searchedUsers.slice((currentPagi + 1) * 10, (currentPagi + 2) * 10 - 1)
		);
	};

	return (
		<div className="container mt-3">
			<div className="form-inline mb-2">
				<div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text">Search</span>
					</div>
					<input
						type="text"
						className="form-control"
						onChange={e => onSearchChange(e)}
						placeholder="Enter anything..."
					/>
				</div>
				<div className="input-group col-3">
					<div className="input-group-prepend">
						<label className="input-group-text" htmlFor="inputGroupSelect01">
							Sort by
						</label>
					</div>
					<select
						className="custom-select"
						id="inputGroupSelect01"
						onChange={e => onSortChange(e)}
					>
						{Object.keys(formatedUsers[0]).map((item, index) => (
							<option value={item} key={index}>
								{item[0].toUpperCase() + item.slice(1)}
							</option>
						))}
					</select>
				</div>
			</div>
			<table className="table mx-auto ">
				<thead>
					<tr>
						{Object.keys(formatedUsers[0]).map((item, index) => (
							<th scope="col" key={index}>
								{item[0].toUpperCase() + item.slice(1)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{users.map((user: any, index: any) => (
						<tr key={index}>
							{Object.keys(user).map((item, index) => (
								<td key={index}>{user[item]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li
						className={`page-item ${currentPagi === 0 && 'disabled'}`}
						onClick={onPrevClick}
					>
						<p className="page-link">Previous</p>
					</li>
					{new Array(Math.ceil(searchedUsers.length / 10))
						.fill(0)
						.map((item, index) => (
							<li
								className={`page-item  ${index === currentPagi && 'active'}`}
								key={index}
							>
								<p className="page-link " onClick={() => onChangePagi(index)}>
									{index + 1}
								</p>
							</li>
						))}

					<li
						className={`page-item ${
							currentPagi >= Math.ceil(searchedUsers.length / 10) - 1 &&
							'disabled'
						}`}
						onClick={onNextClick}
					>
						<p className="page-link">Next</p>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Table;
