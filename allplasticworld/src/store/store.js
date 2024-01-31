import { configureStore } from '@reduxjs/toolkit'
import languagesReducer from '../store/languages/languagesSlice'

export const store = configureStore({
  reducer: {
    languages: languagesReducer,
  },
})