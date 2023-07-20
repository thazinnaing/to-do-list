import React from 'react';
import "../css/list.css";
import ListItem from './listItem';
import Selectionbox from './selectionBox';
import { useContext } from 'react';
import { todoContext } from '../App';

const List=()=>{
  const {filtertodos, todos, setStatus}=useContext(todoContext);
  
    return(
        <div className="todo-container">
        <div className="todo-content">
          
        {
          filtertodos && filtertodos.map((todo)=>{
            return(
              <ListItem todo={todo} key={todo.id}/>
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