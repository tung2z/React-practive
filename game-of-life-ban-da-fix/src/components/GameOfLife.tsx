import * as React from 'react';
import './GameOfLife.css';

interface IGameOfLifeProps {}

interface IGameOfLifeState {
	generationCount: number;
	board: any[];
	sti: any;
}

class GameOfLife extends React.Component<IGameOfLifeProps, IGameOfLifeState> {
	constructor(props: IGameOfLifeProps) {
		super(props);
		this.state = {
			generationCount: 0,
			board: new Array(50 * 50)
				.fill(0)
				.map(() => (Math.random() < 0.4 ? 1 : 0)),
			sti: 0,
		};
	}
	//new Array(100).fill(0).map(() => Math.floor(Math.random() * 2))
	//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ...new Array(50).fill(1)]

	// [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,],

	rule = (board: number[]) => {
		let width = board.length ** 0.5 * 2;
		return board.map((item, index, arr) => {
			let aliveNeighbor = [
				arr[index + 1],
				arr[index - 1],
				arr[index + width],
				arr[index + width - 1],
				arr[index + width + 1],
				arr[index - width],
				arr[index - width - 1],
				arr[index - width + 1],
			].filter(item => item === 1);
			if (aliveNeighbor.length < 2) {
				return 0;
			}
			if (aliveNeighbor.length > 3) {
				return 0;
			}
			if (item === 0 && aliveNeighbor.length === 3) {
				return 1;
			} else {
				return item;
			}
		});
	};
	onStartBtnClick = () => {
		let a = setInterval(() => {
			this.setState({
				board: this.rule(this.state.board),
				generationCount: this.state.generationCount + 1,
				sti: a,
			});
		}, 200);
	};

	onStopBtnClick = () => {
		clearInterval(this.state.sti);
	};

	onResetBtnClick = () => {
		clearInterval(this.state.sti);
		this.setState({
			board: new Array(50 * 50)
				.fill(0)
				.map(() => (Math.random() < 0.4 ? 1 : 0)),
			generationCount: 0,
		});
	};

	componentWillUnmount() {
		clearInterval(this.state.sti);
	}

	public render() {
		const { board, generationCount } = this.state;
		const { onStartBtnClick, onStopBtnClick, onResetBtnClick } = this;
		return (
			<div className="gameOfLife">
				<h1>Generation: {generationCount}</h1>
				<div>
					<button onClick={onStartBtnClick}>Start</button>
					<button onClick={onStopBtnClick}>Stop</button>
					<button onClick={onResetBtnClick}>Reset</button>
				</div>
				<div
					className="board"
					style={{
						gridTemplateColumns: `repeat(${board.length ** 0.5 * 2}, 1fr)`,
					}}
				>
					{board.map((item, index) => (
						<div
							className="square"
							key={index}
							style={{ backgroundColor: `${item ? 'black' : 'white'}` }}
						></div>
					))}
				</div>
			</div>
		);
	}
}

export default GameOfLife;
