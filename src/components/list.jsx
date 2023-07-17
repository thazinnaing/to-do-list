import React from 'react';
import "../css/list.css";
import ListItem from './listItem';
import Selectionbox from './selectionBox';

const List=({filtertodos, setStatus, updateTodos, todos, updateInputText, setEditTodo})=>{
  
    return(
        <div className="todo-container">
        <div className="todo-content">
          
        {
          filtertodos && filtertodos.map((todo)=>{
            return(
              <ListItem todo={todo} updateTodos={updateTodos} todos={todos} key={todo.id} updateInputText={updateInputText} setEditTodo={setEditTodo}/>
            )
          })
        }

        </div>
        <div className="selection">
          {
            todos.length>0 && <Selectionbox setStatus={setStatus}/>
          }
        </div>
      </div>

    )
}

export default List;