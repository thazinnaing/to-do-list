import React from "react";
import TickIcon from "../tick.svg";
import TrashIcon from "../trash.svg";
import "./todobox.css";

const TodoBox=({inputText, delItem, setDelItem, inputArray, setInputArray, index})=>{
    
    return(
            <div className="todo">
                <div className="task">
                {inputText}
                </div>
                <div className="tick">
                    <img src={TickIcon} alt="tick"
                    onClick={()=>{
                        setDelItem(oldArray=>[...oldArray, index]);
                    }}
                    />
                </div>
                <div className="trash">
                    <img src={TrashIcon} alt="Trash"
                    onClick={()=>{
                        const arr=inputArray.filter((item)=>{
                            console.log(item, inputArray[index]);
                            return item !== inputArray[index];
                            })
                        setInputArray(arr);
                    }}
                    />
                </div>
            </div>
    )
}
export default TodoBox;