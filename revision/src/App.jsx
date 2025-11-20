import { useState } from "react"
function App() {
  const [count, setstate] = useState(0);
  const decre=()=> {
    setstate((count)=>{
    if(count<=0){
      reset();
    }
    return count-=1;  
  });
};
  const incre=()=> setstate(count+1);
  const reset=(count)=> setstate(count=0);

  return (
    <>
      {/* !Empty brackets are called react fragements */}
      {/* In React, attributes of a JSX element are called props. */}
      <h1>Vite + React</h1>
      <h2>Count : {count}</h2>

      <button onClick={incre}>INCRE</button>
      <button onClick={decre}>DECRE</button>
      <button onClick={reset}>Reset</button>
      <h3>A React component is a function that returns some JSX.
      JSX is an extension to JavaScript that allows you to write HTML-like directly inside JavaScript code.
      React Development server uses Babel to transpile JSX code to JavaScript code, and Webpack to merge output files into the bundle.js file for running the React app in the web browser.</h3>
      <h2>
      React compares the previous list with the new one and rerenders only the elements that have been added, modified, or removed.
      To compare the list element and update the DOM tree properly, React uses the key prop.
      {/* ! the keys may come from different sources:
      Database: If the data comes from a database, you can use the primary keys of the records as the key props of elements because they are designed to be unique.
      Locally generated data: If the data is generated locally, you can generate unique keys using the built-in randomUUID() method of the Crypto interface provided by the web browser or uuid third-party packages. */}
      </h2>
      <h4>Use the map() method to transform an array of data into an array of elements in JSX.</h4>
      <h5>React allows you to add event handlers to JSX elements directly. Event handlers are functions that you want to execute in response to events.</h5>
      {/* EVENTS
      User interactions trigger events in a React app.
      Define a function or an event handler, and assign it as a prop of the JSX element to respond to the event.
      Call the preventDefault() of the event object method to prevent unwanted default browser behaviors.
 */}
      {/* ! Preventing default behavior
      ! Some events have default browser behavior. For example, a <form> submit event will reload the whole page by default.
      !To stop the default browser behavior from occurring, you can call the preventDefault() method of the event object, for example: */}
      {/* ! React Context 
      React context is a feature in React that allows you to share the state across your entire React app (or part of it) without passing props down through every level of the component tree. */}
    </>
  )
}

export default App
