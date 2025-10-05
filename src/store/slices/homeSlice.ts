import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HomeState } from '../../types'

// Initial state
const initialState: HomeState = {
  username: '',
}

// Create slice
const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeUsername: (state, action: PayloadAction<string>) => {
      // Delete prefixed '@' from the github username
      state.username = action.payload.replace(/@/gi, '')
    },
    clearUsername: (state) => {
      state.username = ''
    },
  },
})

// Export actions
export const { changeUsername, clearUsername } = homeSlice.actions

// Export reducer
export default homeSlice.reducer
