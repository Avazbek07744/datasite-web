import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Register from './Components/Register'
import News from './Components/News'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/news/:id' element={<News/>}></Route>
      </Routes>
    </div>
  )
}

export default App
