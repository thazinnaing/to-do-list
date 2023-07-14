import React from "react";
import './sectionbox.css';
const Selectionbox=()=>{
    return(
        <select className="select">
            <option>All</option>
            <option>Completed</option>
            <option>inCompleted</option>
        </select>
    )
}

export default Selectionbox;