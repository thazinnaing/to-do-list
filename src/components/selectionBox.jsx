import React from "react";
import '../css/selectionbox.css';
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