import * as React from 'react';
import { useParams } from 'react-router-dom';
import './EmailDetail.css';
import { Button } from '../index';

interface IEmailDetailProps {
	data: any[];
}

const EmailDetail: React.FunctionComponent<IEmailDetailProps> = props => {
	const { id } = useParams<{ id: string }>();

	const { data } = props;
	const item = data.filter(item => item._id === id)[0];

	return (
		<div className="EmailDetail mt-1 mr-4">
			<div className="header">
				<div>
					<h3>{item.subject}</h3>
					<p>
						{item.from} <i className="fas fa-angle-double-right"></i> {item.to}
					</p>
				</div>
				<div>
					<Button>
						<i className="fas fa-reply"></i> Reply
					</Button>
					<Button>
						<i className="fas fa-forward"></i> Forward
					</Button>
					<Button>
						<i className="fas fa-times"></i> Delete
					</Button>
				</div>
			</div>
			<hr className="my-4"></hr>
			<div>
				{item.body.split('\n').map((item: any, index: any) => (
					<p key={index}>{item}</p>
				))}
			</div>
		</div>
	);
};

export default EmailDetail;
