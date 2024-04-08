
/// we need to access the store ==> store
// if we need the access of next middleware ==> next
//  what need to be performed ==> action

import { store } from "../store";

// it uses currying concept
// this is the syntax

// const loggerMiddleware = (store) =>{
//     return function(next){
//         return function(action){

//         }
//     }
// }

// also closure are implemetnted
// as child components can acccess parent function even after parent function is completed


export const loggerMiddleware = (store) =>{
    return function(next){
        return function(action){
            // log actions
            console.log("[LOG]:" + action.type + " " + new Date().toString());
            // call next middleware in pipeline
            next(action)
            // log the current modified state data 
            //console.log(store.getState()); 
        }
    }
}
