import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:localStorage.getItem("user")|| null,
    token:localStorage.getItem("token") || null,
    isAuthenticated:!!localStorage.getItem("token")
   }

const authSlice = createSlice({
   initialState,
   name: 'auth',
   reducers:{
      signup:(state, action)=>{
//name,email,password
        
      },
      login:(state, action)=>{
         state.user=action.payload.user
         state.token=action.payload.token
         state.isAuthenticated=true
         localStorage.setItem("user", action.payload.user)
         localStorage.setItem("token", action.payload.token)
         
      },
      logout:(state)=>{
        state.user=null
        state.token=null
        state.isAuthenticated=false
        localStorage.removeItem("user")
        localStorage.removeItem("token")
      }

   } 
})

export const {login, logout, signup} = authSlice.actions
export default authSlice.reducer