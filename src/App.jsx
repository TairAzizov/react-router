import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Users from "./pages/Users"
import Posts from "./pages/Posts"
import Todos from "./pages/Todos"
import SingleUser from "./pages/SingleUser"
import SinglePost from "./pages/SinglePost"
import Home from "./pages/Home"
import SingleTodo from "./pages/SingleTodo"


function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/todos" element={<Todos/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<SingleUser/>}/>
        <Route path="/posts/:id" element={<SinglePost/>}/>
        <Route path='/todos/:id' element={<SingleTodo/>}/>
      </Routes>
    </>
  )
}

export default App
