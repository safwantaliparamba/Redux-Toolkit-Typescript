import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface InitialState  {
    isAuthenticated: boolean,
    username: string | null,
}

const initialState:InitialState = {
    isAuthenticated:true,
    username:null
}

const authSlice = createSlice({
    name:"test",
    initialState,
    reducers:{
        login (state,action:PayloadAction<InitialState>) {
            state.isAuthenticated = action.payload.isAuthenticated
            state.username = action.payload.username
        },
        logout (state){
            state.isAuthenticated = false
        }
    },
})

export const { login,logout } = authSlice.actions

export default authSlice.reducer