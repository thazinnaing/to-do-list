import { useState, useEffect, createContext, useContext } from 'react';
import './App.css';
import Form from './components/form.jsx';
import List from './components/list';

export const todoContext=createContext();

const App=()=> {

  const [todos, updateTodos]=useState([]);
  const [filtertodos, setfiltertodos]=useState([]);
  const [status, setStatus]=useState([]);
  const [inputText, updateInputText]=useState([]);
  const [editTodo, setEditTodo]= useState(null);

  useEffect(() => {
    if(localStorage.getItem('todos')){
      const todosFromLocalStorage= JSON.parse(localStorage.getItem('todos'));
      if(todosFromLocalStorage) updateTodos(todosFromLocalStorage);
    }
  },[])

  useEffect(()=>{
    if(todos.length>0){
      localStorage.setItem('todos',JSON.stringify(todos));
    }
    else{
      localStorage.removeItem("todos");
    }
  },[todos]);

  useEffect(()=>{
    switch(status){
      case "Completed": 
        setfiltertodos(todos.filter(todo=>todo.completeAction));
        break;

      case "Incompleted":
        setfiltertodos(todos.filter(todo=>!todo.completeAction));
        break;

      default:
        setfiltertodos(todos);
        break;
  }

 }, [status, todos])

  return(
    <todoContext.Provider value={{todos, updateTodos,inputText,updateInputText,editTodo,setEditTodo,filtertodos,setStatus}}>
    <div className="container">
      <h1>List for your daily routine</h1>
      <Form/>
      <List/>
    </div>
    </todoContext.Provider>

  )
}

export default App;
