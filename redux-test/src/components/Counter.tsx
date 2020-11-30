import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
	const counter = useSelector((state: any) => state.counter);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>{counter}</h1>
			<button
				onClick={() =>
					dispatch({
						type: 'INCREMENT',
					})
				}
			>
				+
			</button>
			<button
				onClick={() =>
					dispatch({
						type: 'DECREMENT',
					})
				}
			>
				-
			</button>
		</div>
	);
};

export default Counter;
