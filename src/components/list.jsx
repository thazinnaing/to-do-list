import React from 'react';
import "../css/list.css";
import ListItem from './listItem';
import Selectionbox from './sectionbox';

const List=({filtertodos, setStatus, updateTodos, todos})=>{
    return(
        <div className="todo-container">
        <div className="todo-content">
          
        {
          filtertodos.length>0 && filtertodos.map(todo=>{
            return(

            <ListItem key={todo.id} todo={todo} filtertodos={filtertodos} updateTodos={updateTodos} todos={todos}/>

            )
          })
        }
    
        </div>
        <div className="selection">
          {
            filtertodos.length>0 && <Selectionbox setStatus={setStatus}/>
          }
        </div>
      </div>



    )
}

export default List;