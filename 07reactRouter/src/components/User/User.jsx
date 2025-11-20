import React from 'react'
import { useParams } from 'react-router-dom'
// !useparams is s mrthod through which we can pass values 

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-center text-3xl p-4'>User: {userid}</div>
  )
}

export default User