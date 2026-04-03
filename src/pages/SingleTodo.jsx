import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

const SingleTodo = () => {

const [todo, setTodo] = useState(null)
    const { id } = useParams()

    const getTodo = async() => {
       
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            let data = await res.json()
            setTodo(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getTodo()
    }, [])


  return (
    <>
    <h1>Todo страница</h1>
{todo && 
            <div className="item">
               <h2>Id: {todo.id}</h2>
                    <h3> Ttile: {todo.title}</h3>

                <Link to="/todos">Назад</Link>
            </div> 
        }
    </>
  )
}

export default SingleTodo