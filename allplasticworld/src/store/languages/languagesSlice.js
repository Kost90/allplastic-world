import { createSlice } from '@reduxjs/toolkit'

const initialState = "en"

export const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    changeUA: (state) => {
        return "ua"
    },
    changeEN:(state) => {
        return "en"
    }
  },
})

export const { changeUA, changeEN } = languagesSlice.actions

export default languagesSlice.reducer