import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LanguageState } from '../../types'

const initialState: LanguageState = {
  locale: 'en',
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLocale: (state, action: PayloadAction<'en' | 'de' | 'ko'>) => {
      state.locale = action.payload
    },
  },
})

export const { changeLocale } = languageSlice.actions
export default languageSlice.reducer
