import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const isAuthenticated= useSelector(state=> state.authReducer.isAuthenticated)
    const dispatch=useDispatch()
   const navigate= useNavigate()

    const logoutFunc= ()=>{
        dispatch(logout())
        navigate("/login")
    }
    
  return (
    <div>
      {
        isAuthenticated?
        <div>
            <h3>Afrooz</h3>
            <button className='bg-blue-100 p-2' onClick={logoutFunc}>Logout</button>
        </div>
        :
        <button className='bg-blue-100 p-2'><Link to="/login">Login</Link></button>
      }
    </div>
  )
}

export default Header
