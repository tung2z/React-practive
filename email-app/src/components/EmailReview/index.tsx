import React from 'react';
import {
	NavLink,
	useRouteMatch,
	useParams,
	Switch,
	Route,
} from 'react-router-dom';
import { EmailDetail } from '../index';
import './EmailPreview.css';

interface IEmailPreviewProps {
	head: string[];
	data: any[];
}

const EmailPreview: React.FunctionComponent<IEmailPreviewProps> = props => {
	const { forder } = useParams<{ forder: string }>();
	const { head, data } = props;
	const temp = data.filter(item => item.folder === forder);
	const { path, url } = useRouteMatch();
	return (
		<div>
			<div className="EmailPreview ">
				<table className="table table-borderless">
					<thead>
						<tr>
							{head.map((item, index) => (
								<th scope="col" key={index}>
									{item[0].toUpperCase() + item.slice(1)}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{temp.map((item, index) => (
							<tr key={index}>
								{head.map((i, a) => (
									<td key={a}>
										<NavLink to={`${url}/${item._id}`} className="link">
											{item[i]}
										</NavLink>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Switch>
				<Route path={`${path}/:id`}>
					<div className="col">
						<EmailDetail data={data} />
					</div>
				</Route>
			</Switch>
		</div>
	);
};

export default EmailPreview;
