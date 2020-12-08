import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button } from '../../components';

interface IButtonGroupProps {
	value: any;
}

const ButtonGroup: React.FunctionComponent<IButtonGroupProps> = ({ value }) => {
	return (
		<Row>
			<Col>
				<Button name="confirmed" value={value.confirmed} />
			</Col>
			<Col>
				<Button name="recovered" value={value.recovered} />
			</Col>
			<Col>
				<Button name="deaths" value={value.deaths} />
			</Col>
			<Col>
				<Button
					name="fatalityRate"
					value={Math.round((value.deaths / value.confirmed) * 100) / 100}
				/>
			</Col>
		</Row>
	);
};

export default ButtonGroup;
