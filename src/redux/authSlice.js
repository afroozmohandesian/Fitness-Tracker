import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    token:null,
    isAuthenticated:false
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
         
      },
      logout:()=>{
        state.user=null
        state.token=null
        state.isAuthenticated=false
      }

   } 
})

export const {login, logout, signup} = authSlice.actions
export default authSlice.reducer