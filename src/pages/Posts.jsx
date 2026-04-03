import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const Posts = () => {
const [posts, setPosts] = useState(null)
    
    const getPosts = async () => {
       
        
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await res.json()
            setPosts(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getPosts()
    }, [])

  return (
    <>
    <h1>Posts page</h1>
    <div className="container">
        <div className="box">
            {posts ? posts.map((post) => (
            <Link to={`/posts/${post.id}`} className="item" key={post.id}>
                 <div className="item" key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            </Link>
            
           
                
            ))
           : 
           <Loader/>
        }
        </div>
    </div>
    </>


  )
}

export default Posts