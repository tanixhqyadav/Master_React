import React from 'react'
import { useState } from 'react';
import { useTodo } from '../context/ToDoContext';

function TodoFom() {
    const [todo, setTodo] = useState("")
    // using useToDo from out Context
    const {addTodo} = useTodo()
    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo( ({ todo: todo, completed: false})) // ! we are Adding it with default as funcanality written in Addto in appjs
        setTodo("")
    }

    return (
        // !we have added a funcanality to our S=sum=bmit form only that Onsubmit envoke add
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                // Setting value to todo and also at on change also setting value to todo
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}   
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoFom;

