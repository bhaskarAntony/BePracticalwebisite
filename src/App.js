import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Ex from './components/Example'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mern from './components/courses/Mern'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/mern-fullstack' element={<Mern/>}></Route>
    <Route path='/java-fullstack' element={<Home/>}></Route>
    <Route path='/Python-fullstack' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
