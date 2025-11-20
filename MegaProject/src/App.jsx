import './App.css'
import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import {Header,Footer} from './components'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading,setloading]=useState(true);
  const dispatch =useDispatch();
  // console.log(process.env.);
  useEffect( () =>{
    authService.getCurrentUser()
    .then( (userData) =>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setloading(false))
  },[])
  // ! Conditional Rendering is used here if there is no user then loading or else show user
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
