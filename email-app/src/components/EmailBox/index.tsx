import React from 'react';
import {
	NavLink,
	useRouteMatch,
} from 'react-router-dom';
import './EmailBox.css'

interface IEmailBoxProps {
	list: string[];
}

const EmailBox: React.FunctionComponent<IEmailBoxProps> = props => {
	const { url } = useRouteMatch();
	const { list } = props;

	return (
			<ul className="list-group list-group-flush list">
				{list.map((item, index) => (
					<NavLink to={`${url}/${item}`} className="list-group-item link" key={index}>
						{item}
					</NavLink>
				))}
			</ul>
	);
};

export default EmailBox;
