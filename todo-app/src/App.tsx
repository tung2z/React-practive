import React, { KeyboardEvent, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
	const [list, setList] = useState([
		{ text: 'Danh rang', isComplete: true },
		{ text: 'Choc cho', isComplete: false },
		{ text: 'Di ngu', isComplete: false },
  ]);
  
  const addItemWithEnter = (event: KeyboardEvent) => {
    const input: any = document.querySelector('input[type="text"]')
    
    if(event.key === 'Enter') {
      console.log(input.value);
      setList([...list, {text: input.value, isComplete: false}])
      input.value = ''
    }
  }
  const addItemWithClick = () => {
    const input: any = document.querySelector('input[type="text"]')
    console.log(input.value);
    if(input) {
      setList([...list, {text: input.value, isComplete: false}])
      input.value = ''
    }
  }

  const checkComplete = (index: number) => {
    setList(list.splice(index, 1, {text: list[index].text, isComplete: true}))
  }

  const delFromList = (index: number) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)])
  }


	return (
		<div className="App container">
			<h1 className="m-3">Todo App</h1>
			<div className="input-group m-3 mx-auto col-5 ">
				<input
					type="text"
					className="form-control"
          placeholder="Add your todo...."
          onKeyUp={addItemWithEnter}
				/>
				<div className="input-group-append">
					<button className="btn btn-primary" type="button" id="button-addon2" onClick={addItemWithClick}>
						Add
					</button>
				</div>
			</div>
			<div className="col-sm-3 mx-auto">
				{list.map((item, index) => (
					<TodoItem item={item} key={index} checkComplete={checkComplete} delFromList={delFromList}/>
				))}
			</div>
		</div>
	);
}

export default App;
