import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions, addRTodoAsync } from "../../redux/reducers/todoReducer";
import { useSelector } from "react-redux";
import { notifictionSelector } from "../../redux/reducers/notificationReducer";
import { resetNotifiction } from "../../redux/reducers/notificationReducer";

import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  const message = useSelector(notifictionSelector)
  console.log(message)

  if(message){
    setTimeout(()=> {
      disptach(resetNotifiction())
    },3000)
  }
  // after 3 seconds the notification will hide itself




  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    //disptach(actions.add(todoText))
    disptach(addRTodoAsync(todoText))

  };

  return (
    <div className="container">

    <div class="alert alert-primary" role="alert" 
    >
      {
        message && 
        <div class="alert alert-primary" role="alert">
          {message}
        </div>
      }
      
    </div>
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;