import {createSlice, nanoid } from '@reduxjs/toolkit';
// ! here now we are makin slices first there is one initial state which is telling how it will look initilaly
const initialState ={
    todos: [{id: 1, text: "Hello world"}]
}
// * using create Slice we are making slice giving it a name with initial state and the mst imp reducers which are 
// * actual funcnalities consit of addTdo which has State which will tell the current State  and Action will change or perform the funcanalities

export const todoSlice =createSlice({
    // ! create slice have object in generally 
    // ? slices has name 
    name:'todo',
    initialState,
    reducers:{
        // ! reducers are made here only they have properties and functions in them 
        // ? this is the Syntax only to do as follows
    addTodo: (state, action) => {
        // !state gives the refernce of currnt scenerio 
        // !action give you the values 
        const todo ={
            id: nanoid(),
            // !nanoid gives you random new id 
            text: action.payload.text
            // ? action payload give the value , payload can be object too can be accesed by dot notation 
            }
            // ! as todos is array so we are pushing  todo to todos , it can be anything 
            state.todos.push(todo)
        },
    removeTodo:(state,action) =>{
        // !remove has aceess of nano id so using filter function to remove todo
        state.todos=state.todos.filter(todo=> todo.id !== action.payload)
    },
}})

// !exporting funcanalities here 
export const {addTodo,removeTodo}=todoSlice.actions
// ? store should also have refrence to the funcalities so we are exporting reducers here
export default todoSlice.reducer