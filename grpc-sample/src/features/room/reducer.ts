import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './types'

export const chatSlice = createSlice({
  name: 'room',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    onChangeText: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
})

export const chatActions = chatSlice.actions
export const chatReducer = chatSlice.reducer
