import React, { useEffect, useState } from 'react'
import Loader from "../components/Loader"
import { Link } from "react-router-dom"

const Users = () => {
    
    const [users, setUsers] = useState(null)
    
    const getUsers = async () => {
       
        
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await res.json()
            setUsers(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getUsers()
    }, [])
    

  return (
    <>
    <h1>Users Page</h1>
    <div className="container">
        <div className="box">
            {users ? users.map((user) => (
                <div className="item" key={user.id}>
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                    <h3>{user.username}</h3>
                    <h3>{user.phone}</h3>
                </div>
            ))
           : 
           <Loader/>
        }
        </div>
    </div>
    </>
  )
}

export default Users