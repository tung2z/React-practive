import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
	useEffect(() => {
		setInterval(()=> {
			axios({
				method: 'post',
				url: 'https://conduit.productionready.io/api/articles',
				data: {
					article: {
						title: "This is a trash article",
						description: "trash",
						body: "trash",
						tagList: [
							"‌",
							"‌‌",
							"‌‌‌",
							"‌‌‌‌",
							"‌‌‌‌‌",
							"‌‌‌‌‌‌‌",
							"‌‌‌‌‌‌‌‌",
							"‌‌‌‌‌‌‌‌‌‌‌",
							"‌‌‌‌‌‌‌‌‌‌",
							"‌‌‌‌‌‌",
							"HuManIty",
							"Hu‌Man‌Ity",
							"Gandhi",
							"HITLER",
							"SIDA",
							"BlackLivesMatter",
							"Black‌Lives‌Matter",
							"test",
							"dragons",
							"butt"
					]
					}
				},
				headers: {
					Authorization: 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTI4NTQyLCJ1c2VybmFtZSI6IkFwcmlpIiwiZXhwIjoxNjE0Njc0MDYwfQ.889PjCsil1MfM4Fe3txTTqY3WSh7LoEKmVSvVInni4w'
				}
			})
		}, 0)
		return () => {
		}
	}, [])
	return (
		<div className="App container">
			eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTI4NTQyLCJ1c2VybmFtZSI6IkFwcmlpIiwiZXhwIjoxNjE0Njc0MDYwfQ.889PjCsil1MfM4Fe3txTTqY3WSh7LoEKmVSvVInni4w
		</div>
	);
};

export default App;
