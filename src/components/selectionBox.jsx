import React from "react";
import '../css/selectionBox.css';
const Selectionbox=({setStatus})=>{

    const updateStatus=(e)=>{
        setStatus(e.target.value);
    }

    return(
        <select onClick={updateStatus}className="select">
            <option>All</option>
            <option>Completed</option>
            <option>Incompleted</option>
        </select>
    )
}

export default Selectionbox;