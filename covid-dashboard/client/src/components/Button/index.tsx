import React from 'react';
import styles from './Button.module.css';
import { colors, faIcons } from '../../utils';
import NumberFormat from 'react-number-format';
import _ from 'lodash';

interface IButtonProps {
	name: string;
	value: number;
}

const Button: React.FunctionComponent<IButtonProps> = props => {
	const { name, value } = props;
	return (
		<div className={styles.button} style={{ backgroundColor: colors[name] }}>
			<div className="d-flex flex-center">
				<i className={`fas fa-${faIcons[name]} mt-1`}></i>
				<h4>{_.startCase(name)}</h4>
			</div>
			<h4>
				<NumberFormat
					value={value}
					displayType={'text'}
					thousandSeparator={true}
				/>
			</h4>
		</div>
	);
};

export default Button;
