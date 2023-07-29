import React from "react";
import '../css/selectionBox.css';
import { useContext } from 'react';
import { todoContext } from '../App';

const Selectionbox=()=>{
    const {setStatus}=useContext(todoContext);

    const updateStatus=(e)=>{
        setStatus(e.target.value);
    }

    return(
        <select onClick={updateStatus}className="select">
            <option>All</option>
            <option>Completed</option>
            <option>Uncompleted</option>
        </select>
    )
}

export default Selectionbox;