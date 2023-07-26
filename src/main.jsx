import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState={
  todos:[],
  filtertodos:[],
  status:[],
  inputText:[],
  editTodo: null,
}
const Actions={
  Completed: "completed",
  Incompleted: "incompleted",
  All: "all",
  Update_Todos: "update-todo",
  Update_inputText: "update-inputtext",
  Filter_Todos: "filter-todos",
  Edit_Todo: "edit-todo",
  Update_Status: "update-status",

}

const reducer=(state=initialState, action)=>{
  switch (action.type){

    case Actions.Update_Todos:{
      return{

      }
    }
    case Actions.Edit_Todo:{
      return{

      }
    }
    case Actions.Filter_Todos:{
      return{

      }
    }
    case Actions.Update_Status:{
      return{

      }
    }
    case Actions.Update_inputText:{
      return{

      }
    }
    case Actions.All:{
      return{

      }
    }
    case Actions.Completed:{
      return{

      }
    }
    case Actions.Incompleted:{
      return{

      }
    }
  }




}
const store=createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
