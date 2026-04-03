import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'


const Todos = () => {
const [todos, setTodos] = useState(null)
    
    const getTodos = async () => {
       
        
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/todos')
            let data = await res.json()
            setTodos(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getTodos()
    }, [])
    
  return (
    <>
    <h1>Todos page</h1>
        <div className="container">
        <div className="box">
            {todos? todos.map((todo) => (
            <Link to={`/todos/${todo.id}`} className="item" key={todo.id}>
             <div className="item" key={todo.id}>
                    <h2>{todo.id}</h2>
                    <h3>{todo.title}</h3>
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

export default Todos