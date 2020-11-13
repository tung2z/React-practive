/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import './MineSweeper.css';

const MineSweeper = () => {
	const [board, setBoard] = useState(
		new Array(10)
			.fill(0)
			.map(() => new Array(20).fill(0).map(() => (Math.random() < 0.2 ? 1 : 0)))
	);

	// const neighbor: any[] = [
	// 	[-1, -1],
	// 	[-1, 0],
	// 	[-1, 1],
	// 	[0, -1],
	// 	[0, 0],
	// 	[0, 1],
	// 	[1, -1],
	// 	[1, 0],
	// 	[1, 1],
	// ];

	// const rule = (board: any[][]) => {
	// 	// for(let i = 0; i < board.length; i++) {
	// 	//   for(let j = 0; j < board[i].length; j++){
	// 	//     board[i][j] = neighbor.filter(item => board[i + item[0]][j + item[1]] === 1).length

	// 	//   }
	// 	// }

	// 	return board.map((row, i) =>
	// 		row.map((square, j) => {
  //       if(square === 1) {
  //         return square
  //       }
	// 			return neighbor.filter(item => {
  //         if(board[i + item[0]]){
  //           return board[i + item[0]][j + item[1]] === 1
  //         }
  //       }).length + 'fsdf';
	// 		})
	// 	);
	// };
	console.log(board);
	// console.log(rule(board));

	return (
		<div className="mineSweeper">
			<div className="board">
				{board.map(row =>
					row.map((square, index) => (
						<div key={index} className={`square ${square === 1? 'mine':''}`}></div>
					))
				)}
			</div>
		</div>
	);
};

export default MineSweeper;
