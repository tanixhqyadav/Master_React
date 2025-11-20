import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// ?User LoaderData is Hook used to load data , through fetching 
function GIthub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='flex flex-row   text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <div >Github followers: {data.followers}</div>
      <div>
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </div>
  )
}

export default GIthub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Samarth0606')
    return response.json()
}