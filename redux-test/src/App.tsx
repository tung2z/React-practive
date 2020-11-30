import React from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import './App.css';

function App() {
	const store = createStore(rootReducer, composeWithDevTools());
	return (
		<Provider store={store}>
			<div className="App">
				<Counter />
			</div>
		</Provider>
	);
}

export default App;
