import React from "react";
import "../css/list.css";

import TickIcon from "../tick.svg";
import TrashIcon from "../trash.svg";

const ListItem=({todo, filtertodos, updateTodos, todos})=>{

    const updateCompleteAction=()=>{
        updateTodos(
            todos.map(item=>{
                if(item.id === todo.id){
                    return({...item, complete : !todo.complete})
                }
            })
        )
        

    }
    const deleteHandler=()=>{
        updateTodos(
            todos.filter(item=>{
                return(item.id !== todo.id);
            })
        )

    }
    return(
        <div className="todo">
                <div className="task">
                {todo.inputText}
                </div>
                <div className="tick">
                    <img src={TickIcon} alt="tick"
                    onClick={updateCompleteAction}
                    />
                </div>
                <div className="trash">
                    <img src={TrashIcon} alt="Trash"
                    onClick={deleteHandler}
                    />
                </div>
            </div>
    )
}

export default ListItem;