import * as React from 'react';

interface ITodoItemProps {
  item: any;
  checkComplete: (index: number) => void
  delFromList: (index: number) => void
}

const TodoItem: React.FunctionComponent<ITodoItemProps> = props => {
  const {item} = props
	return (
		<div
			className="alert alert-primary alert-dismissible fade show"
			role="alert"
		>
			<p>{item}</p>
			<button
				type="button"
				className="close"
				data-dismiss="alert"
				aria-label="Close"
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
};

export default TodoItem;
