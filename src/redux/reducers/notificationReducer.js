import { createSlice } from "@reduxjs/toolkit"
import { actions } from "./todoReducer"

const initialState = {
    message : ""
}

const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers:{
        // this is the action for reset notification
        reset:(state,action)=>{
            state.message = ""
        }
            

    },
    // extraReducers:{
    //     // when add action of addTODO is done 
    //     "todo/add" : (state,action)=>{
    //         console.log("Notification is fired")
    //         state.message = "Todo is created hardcoaded, but its no recommended"
    //     }
    // }
    // it is not a best practice to give hardcoaded names to extra reducers
    // so we will use builder function which have and addCase 
    
    // extraReducers:(builder)=>{
    //     builder.addCase(actions.add,(state,action)=>{
    //         state.message="todo is created by Builder function"
    //     })
    // }

    // using Map object last video
    extraReducers:{
        // map is like key value pair here object [key] : value
        [actions.add] : (state,action)=>{
            state.message = "todo is created by map";
        }
    }
})

export const notificationReducer = notificationSlice.reducer

export const notifictionSelector = (state)=>state.notificationReducer.message

export const resetNotifiction = notificationSlice.actions.reset