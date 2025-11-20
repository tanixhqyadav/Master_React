import Cards from './Card'
// import './App.css'

function App() {
//! here come the use of props i have exported card from cards component so both the cards are same but i want to differ
//! both for my use 
// console.log(props)
let myobj={
  username:"tanishq yadav",
  rollno:52,
  university:"Gla Mathura"
}
//* this is how we can pass value from one component to another 
let arr=[1,2,3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tanishq yadav </h1>
      <Cards name="tanishq"  dekho="Profile dikaho"someObj={myobj}/>
      <Cards name="Andubhai" dekho="Abe Id dikha" newarray={arr}/>
    </>
  )
}

export default App
