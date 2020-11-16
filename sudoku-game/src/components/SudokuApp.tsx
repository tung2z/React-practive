import React, { useState } from 'react';
import './SudokuApp.css';

const SudokuApp = () => {
	const [board, setBoard] = useState(new Array(9).fill(new Array(9).fill(0)));
	const value = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const onSquareChange = (e: any) => {
    // console.log(e.nativeEvent.data);
		if (value.includes(e.nativeEvent.data)) {
      e.currentTarget.value = e.nativeEvent.data
    }
    else{
      e.currentTarget.value = ''
    }
		// e.currentTarget.classList.add('selected');
	};

	return (
		<div className="SudokuApp">
			{board.map((item, index) => (
				<div className="item" key={index}>
					{item.map((square: any, i: any) => (
						<input
							type="text"
							className="square"
							key={i}
							onChange={e => onSquareChange(e)}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default SudokuApp;
