import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ChatMessage {
  text: string
  createTime: number
  authorName: string
}
export interface ChatState {
  dataList: ChatMessage[]
  message: string
}

const initialState: ChatState = {
  dataList: [],
  message: '',
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setDataList: (state, action: PayloadAction<ChatMessage[]>) => {
      state.dataList = action.payload
    },
    clearMessage: (state) => {
      state.message = ''
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload
    },
  },
})

export const chatActions = chatSlice.actions
export const chatReducer = chatSlice.reducer
