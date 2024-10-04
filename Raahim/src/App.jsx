import React from 'react'
import { Route, Routes } from 'react-router-dom'

import  './App.css'
import Signup from './Screens/Signup'
import Login from './Screens/Login'
import Homepage from './Screens/Homepage'
import Details from './Screens/Details'

const App = () => {
  return (
    <>
     <Routes>
    <Route index element={<Signup/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Homepage' element={<Homepage/>}/>
    <Route path='/Details/:id' element={<Details/>}/>
      </Routes> 
    </>
  )
}

export default App
