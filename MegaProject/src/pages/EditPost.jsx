// ! here we are making edit page
import React,{useEffect,useState} from 'react'
import {Container,PostForm} from "../components"
import appwriteService from '../appwrite/config'
import { useNavigate,useParams } from 'react-router-dom'
import PostFrom from '../components/post-form/PostFrom'
function EditPost() {
    const [post,setPosts]=useState([])
    const {slug}=useParams()
    // !using  usePraams we fetch data from url
    const navigate=useNavigate()
    useEffect( () => {
        // Here we are using useeffect because it allows to render the page even before the data 
        if(slug){
        // ? we got a slug using use parms and in backend we are sending a slug
            appwriteService.getPost( (slug).then( (post)=> {
                if(post){
                    setPosts(post)
                }
                else{
                    navigate('/')
                }
            }))
        }
    },[slug,navigate])
return post ? (
    <div className='py-8'>
        <Container>
            <PostFrom post={post}/>
        </Container>
    </div>
) :null
}

export default EditPost