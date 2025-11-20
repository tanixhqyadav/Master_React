import React from 'react'
import ReactDOM from 'react-dom/client'
import  {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import GIthub, { githubInfoLoader } from  './components/Github/GIthub.jsx'
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ]) 
//! Another way of writing this Route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User />} />
      {/* Yh jo user mein colon ke baad jo user id hai actually it is the params , which is passed through here  */}
      <Route 
      loader={githubInfoLoader}
      // ?Here loader is used to optimise the fetching procedure 
      path='github' 
      element={<GIthub />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
