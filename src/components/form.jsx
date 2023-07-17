import React, {useState} from "react";
import '../css/form.css';
import BanIcon from '../svg/ban.svg';

const Form=({todos, updateTodos, inputText, updateInputText, editTodo, setEditTodo})=>{
    
    
    const updateText=(e)=>{
        updateInputText(e.target.value);
    }

    const toUpdateTodo=()=>{
        const newTodo=todos.map(todo=>{
            if(todo.id === editTodo.id){
                return(({...todo, inputText: inputText}))
            }
            return todo; 
        })
        updateTodos(newTodo);
        setEditTodo("");
    }

    const addTodoList=(e)=>{
        e.preventDefault();

        if(inputText !== ""){
            if(!todos){
                todos=[];
            }
            if(!editTodo){
                updateTodos(
                    [...todos, {inputText: inputText, completeAction: false, id: Math.random() *100 }]
                );
                updateInputText("");
            }
            else{
                toUpdateTodo();
            }
        }
    }

    return(
            <form>
            <div className="input-container">
            <div className="input-div">
            <input type='text' value={inputText} placeholder='make a task'
                onChange={updateText} 
            />
            </div>

            <div className='plus-btn'>
                <button onClick={addTodoList}> + </button>
            </div>

            <div className="ban">
                <img src={BanIcon} alt="ban" onClick={()=>{updateInputText("");}} />
            </div>

            </div>
            </form>
    )
    
}

export default Form;
