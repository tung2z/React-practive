import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const counter = useSelector((state: any) => state.counter);
	const users = useSelector((state: any) => state.users);
	const posts = useSelector((state: any) => state.posts);
	const dispatch = useDispatch();
	return (
		<div className="App" style={{ textAlign: 'center' }}>
			{console.log('re-render')}
			<h1>{counter}</h1>
			<button
				onClick={() =>
					dispatch({
						type: '',
					})
				}
			>
				+
			</button>
			<button
				onClick={() =>
					dispatch({
						type: 'INCREMENT_ASYNC',
					})
				}
			>
				+(async)
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

			<div>
				{users.map((user: any, index: number) => (
					<p
						key={index}
						onClick={() => {
							dispatch({ type: 'CHANGE_TARGET_USERID', payload: user.id });
							dispatch({ type: 'GET_POSTS_ASYNC' });
						}}
						style={{ cursor: 'pointer' }}
					>
						{user.name}
					</p>
				))}
			</div>
			<button
				onClick={() =>
					dispatch({
						type: 'GET_USERS_ASYNC',
					})
				}
			>
				get users
			</button>
			<div>
				{posts?.map((post: any, index: number) => (
					<p key={index}>{post.title}</p>
				))}
			</div>
		</div>
	);
}

export default App;
