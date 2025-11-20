import { useState } from "react"


function App() {
  const [color, setcolor]=useState("white");
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12
        inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button className="outline-none px-4 shadow-lg text-white rounded-full" onClick={()=> setcolor("red")}
                style={{backgroundColor:"red"}}>
                Red
              </button>
              <button className="outline-none px-4 shadow-lg text-white rounded-full" onClick={()=> setcolor("Black")}
                style={{backgroundColor:"Black"}}>
                Black
              </button>
              <button className="outline-none px-4 shadow-lg text-white rounded-full" onClick={()=> setcolor("yellow")}
                style={{backgroundColor:"yellow"}}>
                Yellow
              </button>
              <button className="outline-none px-4 shadow-lg text-white rounded-full" onClick={()=> setcolor("pink")}
                style={{backgroundColor:"pink"}}>
                Pink
              </button>
              <button className="outline-none px-4 shadow-lg text-white rounded-full" onClick={()=> setcolor("Orange")}
                style={{backgroundColor:"Orange"}}>
                Orange
              </button>
              <button className="outline-none px-4 shadow-lg text-white rounded-full" onClick={()=> setcolor("purple")}
                style={{backgroundColor:"purple"}}>
                Purple
              </button><button className="outline-none px-4 shadow-lg text-white rounded-full" onClick={()=> setcolor("grey")}
                style={{backgroundColor:"grey"}}>
                Grey
              </button>
              
              <button className="outline-none px-4 shadow-lg text-white rounded-full" onClick={()=> setcolor("Gold")}
                style={{backgroundColor:"gold"}}>
                Gold
              </button>
              <button className="outline-none px-4 shadow-lg text-white rounded-full" onClick={()=> setcolor("silver")}
                style={{backgroundColor:"silver"}}> Silver 
              </button>
              <button className="outline-none px-4 shadow-lg text-white rounded-full" onClick={()=> setcolor("lavender")}
                style={{backgroundColor:"lavender"}}>
                Lavender
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
