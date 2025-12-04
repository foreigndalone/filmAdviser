import { useState } from 'react'
import { Routes, Route } from "react-router"
import './App.css'
import {Login, SignUp} from './pages/Login'
import {UsersData,UsersData2 } from './pages/UsersData'
import {Main} from './pages/Main'

function App() {

  return (
    <>
      <Routes>
        <Route path='/loginUp' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/update' element={<UsersData/>}/>
        <Route path='/update2' element={<UsersData2/>}/>
        <Route path='/main' element={<Main/>}/>
        
      </Routes>
    </>
  )
}

export default App
