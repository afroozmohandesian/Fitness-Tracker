import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import HomePage from '../pages/HomePage'

const RoutesMap = () => {
  return (
    <Router>
       <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/home' element={<HomePage/>}/>

       </Routes>
    </Router>
  )
}

export default RoutesMap
