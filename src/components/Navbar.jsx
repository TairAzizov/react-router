import React from 'react'
import { Link, NavLink } from "react-router-dom"

const links = [
    { url: '/', name: 'Posts' },
    { url: '/users', name: 'Users' },
    { url: '/todos', name: 'todos' },
]

const Navbar = () => {
  return (
    <>
        <nav className="nav">
            <ul className="list">
                {links.map((item) => (
                    <li key={item.url}>
                        <NavLink to={item.url} className="link">{item.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </>
  )
}

export default Navbar