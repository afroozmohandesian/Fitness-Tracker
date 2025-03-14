import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const isAuthenticated= useSelector(state=> state.authReducer.isAuthenticated)
    
    
  return (
    <div>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Header
