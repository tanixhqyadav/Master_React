import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import {Container, PostCard} from '../components'
function Home() {
    const [posts,setPosts]=useState([])
    useEffect( ()=> {
        appwriteService.getPosts().then((posts) =>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    })
    if (posts.length === 0) {
        // ! here it is like that if we dont hav posts then show posts orelse show login to read 
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        // ? if post length be  zero the the above code , or else , this the by default render, and rendering is done if getting posts the map 
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )

}


export default Home