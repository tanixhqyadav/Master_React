import React from 'react'
import {useDispatch} from   'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
function LogoutBtn() {
    const dispatch=useDispatch()
    // !data is dispatched to appwrite to delete the the session via logout in authService
    const logoutHandler=()=>{
        authService.logout()
        .then(()=>{
            // ? here what is happening is that logout is a method which is deleteing the session , and it is a promise thats why we are 
            // ? dispatching logout with id to store , to take the acees that which and how to delete
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn