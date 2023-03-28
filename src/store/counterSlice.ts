import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from './store'


interface InitialState  {
    count: number
}

const initialState:InitialState = {
    count : 0
}

const counterSlice = createSlice({
    name:"test",
    initialState,
    reducers:{
        increment(state) {
            state.count ++
        },
        decrement(state){
            state.count --
        },
        incrementByAmount(state,action:PayloadAction<number>){
            state.count += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.count

export default counterSlice.reducer