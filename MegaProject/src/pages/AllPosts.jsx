import React ,{useState,useEffect} from 'react'
import appWriteService from '../appwrite/config'
import {Container, PostCard} from '../components'
function AllPosts() {
    const [posts,setPosts]=useState([])
    useEffect( () => {}, [])
    // !here i used empty useeffct for a void render 
    appWriteService.getPosts([]).then( (posts) =>
    {
        // Here i fetched data from appwrite backend 
        if(posts){
            setPosts(posts.documents)
        }
    }
    )
return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {/* !the posts i am getting up there are mapped here  */}
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
)
}

export default AllPosts