import React from 'react'
import { Route,Routes } from "react-router-dom"
import Home from './Components/Home'
import Login from './Components/Login'
import "./App.css"
import About from './Components/About'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Routes>
                <Route path="" element={<Login></Login>}></Route>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="/home/about" element={<About></About>}></Route>
                <Route path='/home/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  )
}

export default App
