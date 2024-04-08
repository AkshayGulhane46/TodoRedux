import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState={
    todos:[]
}

// create async thunk has its own dispatcher function
// as we cant call a API direcly in reducer as its a pure function

// export const getInitialStateAsync = createAsyncThunk(
//     "todo/getInitialState", 
//     (_,thunkAPI) => {
//         axios.get("http://localhost:4100/api/todos")
//         .then(res=>
//           // disptach(actions.setInitialState(res.data))
//           thunkAPI.dispatch(actions.setInitialState(res.data))
//         )
//     }
// )

// convert this function to return a Promis

export const getInitialStateAsync = createAsyncThunk(
    "todo/getInitialState", 
    () => {
        return  axios.get("http://localhost:4100/api/todos")
        // above returns a promis
    }
)

export const addRTodoAsync = createAsyncThunk(
    "todo/addTodo", async(payload) => {
        const response = await fetch("http://localhost:4100/api/todo",{
            method:"POST",
            headers :{
                "content-type":"application/json"
            },
            body : JSON.stringify({
                text :payload,
                completed : false
            })
       })
       return response.json();
    }
) 



// Creating Reducer using Redux toolkit
// we have to create a slice (slice means part of application)

const todoSlice = createSlice({
    name : 'todo',
    initialState:initialState,
    reducers:{ // we are having our reducers here not in seprate file now
        setInitialState:(state,action)=>{
            state.todos = [...action.payload];
            // ... is used to create a reference of object
            // so when you copy the object directly it will not work
            // that is why we have to send the reference 

        },
        add:(state,action)=>{ // it takes a state and action as param
            state.todos.push({ // PUSH POP CONCAT all the methos are available here
                text:action.payload, // 
                completed:false
            })
        },
        toggle:(state,action)=>{
            state.todos.map((todo,i)=>{
                if(i == action.payload){ // payload is the index which is sent from the JSX
                    todo.completed =! todo.completed
                }
                return todo
            })
        }

    },
    extraReducers:(
       (builder)=>{
            // case for GET request
            builder.addCase(getInitialStateAsync.fulfilled, (state,action)=>{
                console.log("Get initialize is fullfilled")
                state.todos= [...action.payload.data]

            })
            // case for POST request 
            .addCase(addRTodoAsync.fulfilled,(state,action)=>{
                console.log(action.payload);
                state.todos.push(action.payload)
            })
       }
    )
})

export const todoReducer = todoSlice.reducer
// this way we can export the reducers in react toolkit
export const actions = todoSlice.actions
// action is a property which will give the access to all the operations

export const todoSelector = (state) => state.todoReducer.todos



// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }

