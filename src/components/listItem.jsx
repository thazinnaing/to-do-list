import React from "react";
import "../css/list.css";

import TickIcon from "../svg/tick.svg";
import TrashIcon from "../svg/trash.svg";
import DoublecheckIcon from "../svg/double-check.svg";
import EditIcon from '../svg/edit.svg';
import { useContext } from 'react';
import { todoContext } from '../App';

const ListItem=({todo})=>{
    const {updateTodos, todos, updateInputText, setEditTodo}=useContext(todoContext);

    const editHandler=()=>{
        updateInputText(todo.inputText);
        const findTodo = todos.find(item=> item.id === todo.id);
        setEditTodo(findTodo);
    }

    const updateCompleteAction=()=>{
        updateTodos(
            todos.map(item=>{
                if(item.id === todo.id){
                    return({...item, completeAction : !todo.completeAction})
                }
                else{
                    return item;
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
                <div className={`text ${todo.completeAction ? 'line' : ''}`}>{todo.inputText}</div>

                <div className="edit">
                    <img src={EditIcon} alt="edit" onClick={editHandler} />
                </div>

                <div className="tick">
                    <img src={`${todo.completeAction? DoublecheckIcon : TickIcon}`} alt="tick"
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