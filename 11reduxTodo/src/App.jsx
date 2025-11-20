import './App.css'
import AddTodo from './components/AddToDo'
import Todos from './components/Todos'

function App() {
    // !YHAN PAR BHI EK WRAPPER LAGTA HAI  JOKI APP.JSX YH MAIN.JSX MEIN BHI LGA SKTE HAI 
  return (
    <>
    <h1>Redux Toolkit</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
