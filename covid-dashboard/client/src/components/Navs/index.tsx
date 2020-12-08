import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Navs = () => {
	const user = useSelector((state: any) => state.user);
	return (
		<Navbar bg="dark" variant="dark" className="justify-content-between">
			<Navbar.Brand href="#">Covid Dasboard</Navbar.Brand>
			<Navbar.Text>{user.email}</Navbar.Text>
		</Navbar>
	);
};

export default Navs;
