import { createSlice } from "@reduxjs/toolkit"

const initialState ={
   notes:[
    {
        text:"test test",
        createdOn : new Date().toDateString()
    },{
        text:"Test test 2",
        createdOn:new Date().toDateString()
    }
   ] 
}

const noteSlice = createSlice({
    name: 'notes',
    initialState : initialState,
    reducers:{
        add:(state,action)=>{
            state.notes.push({
                text:action.payload,
                createdOn:new Date()
            })
        },
        delete:(state,action)=>{
            state.notes.splice(action.payload,1);
        }

    }
})

export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions
export const notesSelector = (state)=>state.noteReducer.notes


// export function notesReducer(state = initialState,action){
//     switch(action.type){
//         case ADD_NOTE:
//             return{
//                 ...state,
//                 notes:[
//                     ...state.notes,
//                     {
//                         text:action.text,
//                         createdOn:new Date()
//                     }
//                 ]
//             }
//             case DELETE_NOTE:
//                 state.notes.splice(action.index,1)
//                 return{
//                     ...state,
//                     notes:[...state.notes]
//                 }
//             default:{
//                 return state
//             }
//     }

// }