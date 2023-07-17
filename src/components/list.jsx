import React from 'react';
import "../css/list.css";
import ListItem from './listItem';
import Selectionbox from './selectionBox';

const List=({filtertodos, setStatus, updateTodos, todos})=>{
  console.log("filtertodos", filtertodos);
    return(
        <div className="todo-container">
        <div className="todo-content">
          
        {
          filtertodos && filtertodos.map((todo)=>{
            console.log("todo.id", todo.id);
            return(
              <ListItem todo={todo} updateTodos={updateTodos} todos={todos} key={todo.id} />
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