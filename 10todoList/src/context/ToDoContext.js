import { createContext,useContext } from "react";
// ! making a context provider using create Context and use context 
// ? the contxt has todos as arrays with object and methodss retrning null but having the dependices as a parrameter here
export const ToDoContext=createContext({
    todos:[
        {
        id:1,
        todo:"to do msg",
        completed:false
    }
],
    addTodo:(todo)=> {},
    updateTodo:(id,todo)=> {},
    deleteTodo:(id)=> {},
    tooggleComplete:(id)=> {}
});

// * using useContext hook which is having a context in it created by createContext  and the whole is given to useToDo
export const useTodo = ()=>{
    return useContext(ToDoContext)
}
// ! exporting context Provider
export const ToDoProvider=ToDoContext.Provider;