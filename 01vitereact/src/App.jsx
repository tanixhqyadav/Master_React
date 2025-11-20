import Hathoda from "./AddOnsFunc"

function App() {
  const evaluatedexp="this is a evaluated exp"
  return (

    // !<h1>Hello React + Vite </h1> this will give error  because it is rule that we can render one element at taa time
    //* now  adding this to a single component to div to remove this issue 
    // <div>
    //   <Hathoda />
    //   <h1>Hello React + Vite </h1>
    //! we can return empty as metinoed below
    // </div>
    //!we can directly use this as custom
    <>
      <Hathoda />
      <h1>Hello React + Vite {evaluatedexp}</h1>
    </>
  )
}
//! behind the scene Babble is injecting the code 
export default App
