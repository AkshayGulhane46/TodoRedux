import "./NoteList.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/reducers/noteReducer";
import { notesSelector } from "../../redux/reducers/noteReducer";


function NoteList() {

  
  const notes = useSelector(notesSelector)

  const disptach = useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger"
            onClick={()=>disptach(actions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
