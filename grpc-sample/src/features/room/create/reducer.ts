import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './types'

export interface ChatMessage {
  text: string
  createTime: number
  authorName: string
}
export interface ChatState {
  dataList: ChatMessage[]
  message: string
}

export const chatSlice = createSlice({
  name: 'createRoom',
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
