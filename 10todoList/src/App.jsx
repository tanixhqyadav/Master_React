import { ToDoProvider } from './context'
import './App.css'
import { useState , useEffect } from 'react'
import { ToDoFom } from './components';
import { ToDoItem } from './components';

function App() {
  // ! using context api again here and use state to change the context
  const [todos,setTodos]=useState([]);
  // * .../ is a spread operator
  // ! ...prev allwos you to add a new todo , but with previous todo aloso
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }
  // ! also refering previos (prev) method in asch method which are provided by context provider which is here the TodoList.provider
  const updateTodo = (id, todo) =>{
    // ?here prev gives the previous value and then we are looping it (prevToDo) to find the exact todo with that id where to update
    setTodos ( (prev) => prev.map((prevTodo) => (prevTodo.id ? todo : prevTodo )))
  }

  const deleteTodo = (id) =>{
    setTodos ((prev) => prev.filter((todo)=> todo.id !== id)) 
  }

  const tooggleComplete = (id) =>{
    setTodos ((prev)=> prev.map ((prevTodo)  => prevTodo.id ===id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }
  // usinf json.parse to get the previuos data and giving it to settodos , usinf Use effect beacuse it will instantly run after first time of 
  // the server 
  useEffect(() => {
    // !Use effect is used here because , useEffect runs  very first in react which allowas some to componnets to render first as compared
    // ! to other
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos);
      // We can also use multiple use effect
    }
  }, [])
  // this again we have done to set it again to local Storage
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    <ToDoProvider value={{todos,addTodo,deleteTodo,tooggleComplete,updateTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <ToDoFom />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* !key is given to not confuse Dom with the same Todos , todos is Array using map to render thr
                        elemnt as a list this is How it WORKS  */}
                        {todos.map((todo) => (
                          <div key={todo[todo]}
                          className='w-full'
                          >
                            <ToDoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
