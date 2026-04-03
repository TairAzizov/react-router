import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

const SingleUser = () => {
    
    const [user, setUser] = useState(null)
    const { id } = useParams()

    const getUser = async() => {
       
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            let data = await res.json()
            setUser(data)
        } catch (error) {
            console.log(error);
            console.log(error);
        }
    }
    
    useEffect(() => {
        getUser()
    }, [])

    
    
  return (
    <>
        <h1>Страница пользователя</h1>
        {user && 
            <div className="item">
               <h2>{user.name}</h2>
                    <h3> Name:{user.email}</h3>
                    <h3>Username:{user.username}</h3>
                    <h3>Phone:{user.phone}</h3>
                <Link to="/users">Назад</Link>
            </div> 
        }
    </>
  )
}

export default SingleUser