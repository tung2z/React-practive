import * as React from 'react';

interface IInputProps {
  type: string
}

const Input: React.FunctionComponent<IInputProps> = props => {
  const {type} = props
	return (
		<div className="form-group my-4">
			<label htmlFor={type}>{props.children}</label>
			<input
				type={type}
				className="form-control"
				id={type}
				aria-describedby="emailHelp"
			/>
		</div>
	);
};

export default Input;
