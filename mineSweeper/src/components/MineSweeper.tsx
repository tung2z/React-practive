/* eslint-disable array-callback-return */
import React, { useState, useEffect, MouseEvent } from 'react';
import './MineSweeper.css';

const MineSweeper = () => {
	const width = 20;
	const height = 10;
	const [board, setBoard] = useState(
		new Array(height)
			.fill(0)
			.map(() =>
				new Array(width).fill(0).map(() => (Math.random() < 0.2 ? 9 : 0))
			)
	);

	const neighbor: any[] = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 0],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	const rule = (board: any[][]) => {
		return board.map((row, i) =>
			row.map((square, j) => {
				if (square === 9) {
					return square;
				}
				return neighbor.filter(item => {
					if (board[i + item[0]]) {
						return board[i + item[0]][j + item[1]] === 9;
					}
				}).length;
			})
		);
	};
	// console.log(board);
	// console.log(rule(board));



	const onSquareClick = (event: MouseEvent, i: number, j: number) => {
		event.currentTarget.classList.remove('hide');

		if (event.currentTarget.textContent === '0') {
			neighbor
				.filter(item => {
					if(board[i + item[0]]) {
					return	board[i + item[0]][j + item[1]] > -1
					}
				})
				.forEach(item => {
					event.currentTarget.parentElement?.children[
						(i + item[0]) * width + j + item[1]
					]?.classList.remove('hide');
				});
		}
	};

	const checkLose = () => {

	} 

	const onSquareRightClick = (event: any) => {
		event.preventDefault()
		event.currentTarget.classList.add('flag');
	}


	const onSquareDbClick = (event: any, i: number, j: number) => {

		event.currentTarget.classList.remove('hide');
		neighbor
				.filter(item => {
					if(board[i + item[0]]) {
					return	board[i + item[0]][j + item[1]] > -1
					}
				})
				.forEach(item => {
					event.currentTarget.parentElement?.children[
						(i + item[0]) * width + j + item[1]
					]?.classList.remove('hide');
				});
	}

	useEffect(() => {
		setBoard(rule(board));
		return () => {};
	}, []);

	return (
		<div className="mineSweeper">
			<div
				className="board"
				style={{ gridTemplateColumns: `repeat(${width}, 1fr)` }}
			>
				{board.map((row, i) =>
					row.map((square, j) => (
						<div
							key={i * width + j + 1}
							className={`square ${square === 9 ? 'mine' : ''} hide`}
							onClick={event => onSquareClick(event, i, j)}
							onContextMenu={onSquareRightClick}
							onDoubleClick={event=> onSquareDbClick(event, i, j)}
						>
							{square}
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default MineSweeper;
