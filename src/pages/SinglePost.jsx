
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"


const SinglePost = () => {

    const [post, setPost] = useState(null)
    const { id } = useParams()

    const getPost = async() => {
       
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            let data = await res.json()
            setPost(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getPost()
    }, [])

  return (
    <>
    <h1>Страница поста</h1>
            {post && 
                <div className="item">
                   <h3>Title:{post.title}</h3>
                    <p>Text:{post.body}</p>
                    <Link to="/posts">Назад</Link>
                </div> 
            }
    </>
  )
}

export default SinglePost