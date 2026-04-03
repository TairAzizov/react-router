import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Users from "./pages/Users"
import Posts from "./pages/Posts"
import Todos from "./pages/Todos"


function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/todos" element={<Todos/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </>
  )
}

export default App
