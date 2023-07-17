import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form.jsx';
import List from './components/list';


const App=()=> {

  const [todos, updateTodos]=useState([]);
  const [filtertodos, setfiltertodos]=useState([]);
  const [status, setStatus]=useState([]);

 useEffect(()=>{
  switch(status){
    case "Completed": 
      setfiltertodos(todos.filter(todo=>todo.complete));
      break;

    case "Incompleted":
      setfiltertodos(todos.filter(todo=>!todo.complete));
      break;

    default:
      setfiltertodos(todos);
      break;
  }

 }, [status, todos])

  return(
    <div className="container">
      <h1>List for your daily routine</h1>
      <Form todos={todos} updateTodos={updateTodos} />
      <List filtertodos={filtertodos} setStatus={setStatus} updateTodos={updateTodos} todos={todos}/>
    
  
    </div>
    
  )
}

export default App;
