import React, {useState} from "react";

import '../css/form.css';

import BanIcon from '../ban.svg';



const Form=({todos, updateTodos})=>{
    const [inputText, updateInputText]=useState([]);
    
    const updateText=(e)=>{
        updateInputText(e.target.value);

    }

    const addTodoList=(e)=>{
        e.preventDefault();

        if(inputText !== ""){
            console.log("underscope", inputText);
            if(!todos){
                todos=[];
            }
            updateTodos(
                [...todos, {inputText: inputText, completeAction: false, id: Math.random() *100 }]
            )
        }

    }
    console.log("input", inputText);
    console.log("todos", todos);

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
