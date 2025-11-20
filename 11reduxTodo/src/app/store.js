// ! 1st step Configure Store 
// * now make reducers or can be said funcnalities
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../featuxres/todo/todoSlice';


// * now store is given all the funcnalities
export const store=configureStore({
    reducer:todoReducer
})