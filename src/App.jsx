import { useState } from 'react'
import './App.css'
import TodoBox from './components/todobox';
import BanIcon from './ban.svg'
import Selectionbox from './components/sectionbox.jsx';


const App=()=> {
  const [inputText, setInputText]=useState("");
  const [inputArray, setInputArray]=useState([]);
  const [delItem, setDelItem]=useState([]);

  const SetterArray=()=>{
    setInputArray(oldArray=>[...oldArray, inputText])
  }

  return(
    <div className="container">
      <h1>List for your daily routine</h1>
      <div className="inputContainer">
        <div>
          <input
          type='text'
          value={inputText}
          placeholder='make a task'
          onChange={(event)=> {setInputText(event.target.value);}} 
          />
        </div>

        <div className='plus-btn'>
          <button onClick={()=>{SetterArray()}}> + </button>
        </div>
        <div className="ban">
          <img src={BanIcon} alt="ban" onClick={()=>{setInputText("");}} />
        </div>
      </div>
      <div className="todo-container">
        <div className="todo-content">
          {inputArray.map((task,index)=>{
            return(<TodoBox inputText={task} key={index} delItem={delItem} setDelItem={setDelItem} index={index} setInputArray={setInputArray} inputArray={inputArray}/>)
          })}
        </div>
        <div className="selection">
          {
            inputArray.length>0 && <Selectionbox/>
          }
        </div>
      </div>
    </div>
    
  )
}

export default App
