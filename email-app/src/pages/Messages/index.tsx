import React, { useState } from 'react';
import Message from '../../utils/messages.json';
import { FORDER, THEAD, USERS } from '../../confix';
import { EmailBox, EmailPreview, Header } from '../../components';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import Moment from 'moment';

const Messages = () => {
	const formatMessages = Message.map(
		({ folder, body, subject, from, to, date, senderName, corpus, _id }) => ({
			folder,
			body,
			subject,
			from,
			to,
			senderName,
			corpus,
			_id,
			date: Moment(date).format('YYYY-MM-DD'),
		})
	);
	const { path } = useRouteMatch();
	const [userMessages, setUserMessages] = useState(
		formatMessages.filter(item => item.to === USERS[0])
	);
	let history = useHistory();

	const handleSelect = (e: any) => {
		setUserMessages(formatMessages.filter(item => item.to === e.target.value));
		history.push('/messages');
	};

	return (
		<>
			<Header users={USERS} handleSelect={handleSelect} />
			<div className="row">
				<div className="col col-2">
					<EmailBox list={FORDER} />
				</div>

				<Switch>
					<Route path={`${path}/:forder`}>
						<div className="col">
							<EmailPreview head={THEAD} data={userMessages} />
						</div>
					</Route>
				</Switch>
			</div>
		</>
	);
};

export default Messages;
