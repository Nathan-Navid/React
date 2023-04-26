import './App.css';
import React, {useState} from 'react';
import Display from './Components/Display';
import Form from './Components/Form';

function App() {

const [todolist, setTodoList] = useState([]);

  return (
    <div className="App">
      <Form todoList={todolist} setTodoList= {setTodoList}/>
      <Display todoList={todolist} setTodoList= {setTodoList}/>
    </div>
  );
}

export default App;
