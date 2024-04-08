
// const redux = require("redux");

// import * as redux from "redux";
// import {todoReducer} from "./reducers/todoReducer";
// import { notesReducer } from "./reducers/noteReducer";
// import { combineReducers } from "redux";

// const result = combineReducers({
//       todoReducer,
//       notesReducer
// })
// // this will combine the reducers

// export const store = redux.createStore(result);


import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import { todoReducer } from "./reducers/todoReducer";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

export const store = configureStore({
    // configure store will give all the reducers in a store as we have 2 with us
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware : (getDefaultMiddleware) => [...getDefaultMiddleware(), loggerMiddleware]
    // this way we can add middleware
    // please add default middleware like this always
})