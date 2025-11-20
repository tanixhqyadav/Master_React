import React, { useEffect , useState } from 'react';
import './App.css'
// ! Hooks are used for Ui updation in react 1 jgaah click karo 5 jagah changes aa rhe hai 
//* these are special funcnalities provided by react (builtin)to render the data 
function App() {
  let [counter,setCounter]= useState() 
  // let counter=0;
  const addValue=()=>{
    if(counter<20){
      setCounter(counter+1);
    }
    // console.log("value added",Math.floor(Math.random() *10));
    
  }
  const decValue=()=>{
    // console.log("value added",Math.floor(Math.random() *10));
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Count : {counter}</h2>
      <button id="cplus" onClick={addValue} >Count++</button>
      <br />
      <button id="cpminus" onClick={decValue}>Count--</button>
      <br />
      <p>footer:{counter}</p>
    </>
  )
}

export default App