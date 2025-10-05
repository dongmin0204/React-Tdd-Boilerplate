import { configureStore } from '@reduxjs/toolkit'
import { createBrowserHistory } from 'history'
import appReducer from './slices/appSlice'
import homeReducer from './slices/homeSlice'
import languageReducer from './slices/languageSlice'
import { RootState } from '../types'

// Create browser history
export const history = createBrowserHistory()

// Configure the store
export const store = configureStore({
  reducer: {
    app: appReducer,
    home: homeReducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type { RootState }

export default store
