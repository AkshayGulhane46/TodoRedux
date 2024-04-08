import { useSelector, useDispatch } from "react-redux";
//import { toggleTodo } from "../../redux/actions/todoActions";
import { actions, getInitialStateAsync } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
import "./ToDoList.css";
import { useEffect } from "react";
import axios from "axios";

function ToDoList() {

  const todos=useSelector(todoSelector); // this is simplified as in todo reducer we have wrapped the state code
  // extra object is added above
  const disptach = useDispatch()
  console.log(todos);
  // const todos= store.getState().todos;

  // useEffect(()=>{
  //   fetch("https://localhost:4100/api/todos")
  //   .then(res=>res.json())
  //   .then(parsedJson=>{
  //     console.log(parsedJson)
  //   })
  // })
  // insted of conventinal fetch we can use AXIOS

  useEffect(()=>{
    // axios.get("http://localhost:4100/api/todos")
    //   .then(res=>
    //     disptach(actions.setInitialState(res.data))
    //   )

    // we can use dispatch here

    disptach(getInitialStateAsync())
  },[])

  // our data is coming from the API

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Done': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{disptach(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;