import React, { useState } from 'react';
import { Search, Table, Pagination } from '../components';
import Users from '../datas/users.json';
import { KEYS, PAGE_SIZE } from '../confix';
import Moment from 'moment';
import _ from 'lodash';


const MasterData = () => {
	const dateFormat = (date: string) => {
		return Moment(date).format('DD/MM/YYYY');
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
	const [piecesOfUsers, setPiecesOfUsers] = useState(
		searchedUsers.slice(0, PAGE_SIZE)
	);
	const [currentPage, setCurrentPage] = useState(0)

	const convertFromCamelCase = (arr: string[]) => {
		return arr.map(item => _.startCase(item));
	};

	const renderSearch = (e: any) => {
		const value = e.target.value;
		let modifiedUsers = []
		
		if (e.target.type === 'text') {
		
			modifiedUsers = formatedUsers.filter((user: any) =>

				Object.keys(user).filter(key =>
					user[key].toString().toLowerCase().includes(value.toLowerCase())
				).length !== 0
			);

		}
		else {
			modifiedUsers = searchedUsers.sort((a: any, b: any) => {
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
		}

		setSearchedUsers(modifiedUsers)
		setPiecesOfUsers(modifiedUsers.slice(0, PAGE_SIZE))
	};

	const renderPagi = (value: any) => {
		if(value < 0) {
			return;
		}
		if(value >= Math.ceil(searchedUsers.length / PAGE_SIZE)) {
			return;
		}

		setCurrentPage(value)
		setPiecesOfUsers(searchedUsers.slice(value * PAGE_SIZE, (value + 1)*PAGE_SIZE))
	}


	return (
		<div className="masterData container">
			<h1 className="text-center mt-5">Master Data</h1>
			<Search
				keys={convertFromCamelCase(KEYS)}
				renderSearch={renderSearch}
			/>
			<Table datas={piecesOfUsers} keys={convertFromCamelCase(KEYS)} />
			<Pagination currentPage={currentPage} totalItem={searchedUsers.length} pageSize={PAGE_SIZE} renderPagi={renderPagi}/>
		</div>
	);
};

export default MasterData;
